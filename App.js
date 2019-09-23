import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import Input from './Input';
import Output from './Output';
import NavBar from './NavBar';
import colors from './colors.js';
import { Asset } from 'expo-asset';
import * as FileSystem from 'expo-file-system';
import { AdMobBanner, AdMobInterstitial } from "expo-ads-admob";

function App() {
  const [colorScheme, setColorScheme] = useState("lavender");
  const [fontLoaded, setFontLoadingStatus] = useState(false);
  const [navFolded, setNavFolded] = useState(true);
  const [cuisines, setCuisines] = useState({General: true, Vegetarian: true, American: true, French: true, Indian: true, Italian: true, Jewish: true});
  const [dish, setDish] = useState({});
  const [counter, setCounter] = useState(0);

  async function loadFont() {
    await Font.loadAsync({
      'indie-flower': require('./assets/fonts/IndieFlower-Regular.ttf'),
    });
    setFontLoadingStatus(true);
  }

  async function loadDB() {
    //await FileSystem.deleteAsync(`${FileSystem.documentDirectory}SQLite/recipes.sqlite3`);
    try {
      await FileSystem.makeDirectoryAsync(`${FileSystem.documentDirectory}SQLite`, {
        intermediates: true
      });
      const check = await FileSystem.getInfoAsync(`${FileSystem.documentDirectory}SQLite/recipes.sqlite3`);
      if (!check.exists) {
        await FileSystem.downloadAsync(Asset.fromModule(require('./assets/db/recipes.sqlite3')).uri, `${FileSystem.documentDirectory}SQLite/recipes.sqlite3`);
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadFont();
    loadDB();
    AdMobInterstitial.setTestDeviceID('EMULATOR');
    AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712');
  }, []); //the empty array tells it to never re-render

  async function showInterstitial() {
    setCounter(counter + 1);
    if (counter === 7) {
      await AdMobInterstitial.requestAdAsync();
      await AdMobInterstitial.showAdAsync();
      setCounter(1);
    }    
  }

  useEffect(() => {
    showInterstitial();
  }, [dish]); //launches ad mob interstitial on every 7th (a test value) counter change

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: colors[colorScheme].color1,
    },
  });

  return (
    <View style={styles.container}>
      <NavBar 
        scheme={colors[colorScheme]}
        navFolded={navFolded}
        setNavFolded={setNavFolded}
        cuisines={cuisines}
        setCuisines={setCuisines}
      />
      <Input 
        scheme={colors[colorScheme]}
        navFolded={navFolded}
        cuisines={cuisines}
        setDish={setDish}
      />
      <Output 
        scheme={colors[colorScheme]} //leave it here instead of using colorScheme directly to keep the code more clear
        colorScheme={colorScheme}
        setColorScheme={setColorScheme}
        fontLoaded={fontLoaded}
        cuisines={cuisines}
        dish={dish}
        setDish={setDish}
      />
      <AdMobBanner
        bannerSize="banner"
        adUnitID="ca-app-pub-3940256099942544/6300978111" //test id, to replace
        testDeviceID="EMULATOR"  // always use test id for admob ads
      />
    </View>
  );
}

export default App;
