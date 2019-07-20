import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Input from './Input';
import Output from './Output';
import NavBar from './NavBar';
import colors from './colors.js';

function App() {

  const [colorScheme, setColorScheme] = useState("lavender");

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
      />
    </View>
  );
}

export default App;
