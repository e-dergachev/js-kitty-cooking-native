import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Constants from 'expo-constants';

function Input(props) {

  const styles = StyleSheet.create({
    input: {
      backgroundColor: props.scheme.color2,
      borderWidth: 1,
      alignItems: 'center',
      width: '85%',
      height: 150,
      marginTop: 15,
      marginBottom: 15,
      borderColor: props.scheme.color5,
    },
    defaultTopMargin: {
      marginTop: 15,
    },
    bigTopMargin: {
      marginTop: Constants.statusBarHeight + 72,
    },
    search: {
      width: '95%',
      borderBottomWidth: 2,
      borderColor: props.scheme.color5,
      color: props.scheme.color6,
    },
  });

  return (
    <View style={{...styles.input, ...props.navFolded ? styles.defaultTopMargin : styles.bigTopMargin}}>
      <TextInput
        style={styles.search} 
        placeholder="What dish are you going to cook?"
        placeholderTextColor="#808080"
      />
    </View>
  );
}

export default Input;
