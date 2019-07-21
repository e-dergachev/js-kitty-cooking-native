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
      />
      <Input 
        scheme={colors[colorScheme]}
      />
      <Output 
        scheme={colors[colorScheme]}
        colorScheme={colorScheme}
        setColorScheme={setColorScheme}
        fontLoaded={fontLoaded}
      />
    </View>
  );
}

export default App;
