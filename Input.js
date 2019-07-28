import React, { useState } from 'react';
import { StyleSheet, TextInput, View, ScrollView, TouchableHighlight, Text } from 'react-native';
import Constants from 'expo-constants';

function Input(props) {
  const [input, setInput] = useState("");
  const [pressStatus, setPressStatus] = useState({});

  const styles = StyleSheet.create({
    input: {
      backgroundColor: props.scheme.color2,
      borderWidth: 1,
      alignItems: 'center',
      width: '85%',
      height: 152,
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
      height: 30,
      borderColor: props.scheme.color5,
      color: props.scheme.color6,
    },
    scrollbar: {
      width: '100%',
    },
    suggestion: {
      height: 30,
      justifyContent: 'center',
    },
    suggestionPressed: {
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderBottomColor: props.scheme.color5,
    },
    suggestionText: {
      color: props.scheme.color6,
      marginLeft: 5,
      marginRight: 5
    }
  });

  function suggestionStyle(i) {
    let res = {...styles.suggestion, backgroundColor: i%2 === 0 ? props.scheme.color2 : props.scheme.color4}
    if (pressStatus[i]) {
      if (i == 0) {
        res = {...res, ...styles.suggestionPressed, borderTopColor: props.scheme.color2};
      }
      else {
        res = {...res, ...styles.suggestionPressed, borderTopColor: props.scheme.color5};
      }
    }
    return res;
  };

  function suggestions(input) {
    let tags = input.split(' ');
    return tags.map((tag, i) =>
      <TouchableHighlight
        key={tag + i}
        style={suggestionStyle(i)}
        onPress={() => {}}
        onHideUnderlay={() => setPressStatus({})}
        onShowUnderlay={() => setPressStatus({[i]: true})}
        underlayColor={i%2 === 0 ? props.scheme.color2 : props.scheme.color4}
      >
        <Text style={styles.suggestionText}>{tag}</Text>
      </TouchableHighlight>
    );
  }

  return (
    <View style={{...styles.input, ...props.navFolded ? styles.defaultTopMargin : styles.bigTopMargin}}>
      <TextInput
        style={{...styles.search, borderBottomWidth: pressStatus[0] ? 3 : 2}} 
        placeholder="What dish are you going to cook?"
        placeholderTextColor="#808080"
        onChangeText={value => setInput(value)}
      />
      <ScrollView
        persistentScrollbar={true}
        style={styles.scrollbar}
      >
        {suggestions(input)}
      </ScrollView>
    </View>
  );
}

export default Input;
