import React from 'react';
import { StyleSheet, View } from 'react-native';
import Input from './Input';
import Output from './Output';
import NavBar from './NavBar';

function App() {
  return (
    <View style={styles.container}>
      <NavBar />
      <Input />
      <Output />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#e6e6fa',
  },
});

export default App;
