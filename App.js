import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import Input from './Input';
import Output from './Output';
import NavBar from './NavBar';
import colors from './colors.js';

function App() {
  const [colorScheme, setColorScheme] = useState("lavender");
  const [fontLoaded, setFontLoadingStatus] = useState(false);
  const [navFolded, setNavFolded] = useState(true);
  const [cuisines, setCuisines] = useState({General: true, Vegetarian: true, American: true, French: true, Indian: true, Italian: true, Jewish: true});

  async function loadFont() {
    await Font.loadAsync({
      'indie-flower': require('./assets/fonts/IndieFlower-Regular.ttf'),
    });
    setFontLoadingStatus(true);
  }

  useEffect(() => {loadFont()}, []); //the empty array tells it to never re-render

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
      />
      <Output 
        scheme={colors[colorScheme]}
        colorScheme={colorScheme}
        setColorScheme={setColorScheme}
        fontLoaded={fontLoaded}
        cuisines={cuisines}
      />
    </View>
  );
}

export default App;
