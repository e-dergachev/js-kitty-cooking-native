import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

function Input() {
  return (
    <View style={styles.input}>
      <TextInput
        style={styles.search} 
        placeholder="What dish are you going to cook?"
        placeholderTextColor="#808080"
      />
    </View>
  );
}
  
const styles = StyleSheet.create({
  input: {
    backgroundColor: '#edeeff',
    borderWidth: 1,
    alignItems: 'center',
    width: '85%',
    height: '25%',
    marginTop: 15,
    marginBottom: 15,
    borderColor: '#5d4300',
  },
  search: {
    width: '95%',
    borderBottomWidth: 2,
    borderColor: '#5d4300',
    color: '#291e00',
  },
});

export default Input;
