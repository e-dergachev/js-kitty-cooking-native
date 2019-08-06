import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, TextInput, View, ScrollView, TouchableHighlight, Text } from 'react-native';
import Constants from 'expo-constants';
import { FontAwesome } from '@expo/vector-icons';
import { getDishByTags } from './sqliteHandler';

function Input(props) {
  const [input, setInput] = useState("");
  const [pressStatus, setPressStatus] = useState({});
  const [dishes, setDishes] = useState([]);
  let inputEl = useRef(null);

  useEffect(() => {
    getDishByTags(setDishes, props.cuisines, input);
  }, [input, props.cuisines]); //launches getDishByTag on input and cuisines change

  const styles = StyleSheet.create({
    input: {
      backgroundColor: props.scheme.color2,
      borderWidth: 1,
      alignItems: 'center',
      flex: 1,
      //width: '85%',
      height: 152,
      borderColor: props.scheme.color5,
    },
    inputWrapper: {
      width: '90%',
      flexDirection: 'row',
      marginTop: 15,
      marginBottom: 15,
    },
    defaultTopMargin: {
      marginTop: 15,
    },
    bigTopMargin: {
      marginTop: Constants.statusBarHeight + 72,
    },
    inputButton: {
      borderColor: props.scheme.color5,
      borderRadius: 7,
      marginBottom: 5,
      marginLeft: 5,
      height: 30,
      width: 40,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: props.scheme.color4,          
  },
  inputButtonNotPressed: {
      borderWidth: 1,
  },        
  inputButtonPressed: {
      borderWidth: 2,
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

  function suggestions() {
    return dishes.map((dish, i) =>
      <TouchableHighlight
        key={dish._id}
        style={suggestionStyle(i)}
        onPress={() => props.setDish(dish)}
        onHideUnderlay={() => setPressStatus({})}
        onShowUnderlay={() => setPressStatus({[i]: true})}
        underlayColor={i%2 === 0 ? props.scheme.color2 : props.scheme.color4}
      >
        <Text style={styles.suggestionText}>{dish.name}</Text>
      </TouchableHighlight>
    );
  }

  return (
    <View style={{...styles.inputWrapper, ...props.navFolded ? styles.defaultTopMargin : styles.bigTopMargin}}>
      <View style={styles.input}>
        <TextInput
          style={{...styles.search, borderBottomWidth: pressStatus[0] ? 3 : 2}}
          placeholder="What dish are you going to cook?"
          placeholderTextColor="#808080"
          onChangeText={value => setInput(value)}
          ref={ref => inputEl = ref}
        />
        <ScrollView
          persistentScrollbar={true}
          style={styles.scrollbar}
        >
          {suggestions(input)}
        </ScrollView>
      </View>
      <View>
        <TouchableHighlight
          onPress={() => {
            setInput('');
            inputEl.clear();
          }}
          onHideUnderlay={() => setPressStatus({})}
          onShowUnderlay={() => setPressStatus({clearInput: true})}
          style={{...pressStatus['clearInput'] ? styles.inputButtonPressed : styles.inputButtonNotPressed, ...styles.inputButton}}
          underlayColor={props.scheme.color4}
        >
          <FontAwesome name="times" color={props.scheme.color5} />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {}}
          onHideUnderlay={() => setPressStatus({})}
          onShowUnderlay={() => setPressStatus({fold: true})}
          style={{...pressStatus['fold'] ? styles.inputButtonPressed : styles.inputButtonNotPressed, ...styles.inputButton}}
          underlayColor={props.scheme.color4}
        >
          <FontAwesome name="chevron-up" color={props.scheme.color5} />
        </TouchableHighlight>
      </View>
    </View>
  );
}

export default Input;
