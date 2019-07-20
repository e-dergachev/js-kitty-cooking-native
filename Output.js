import React, { useState } from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';

function Output(props) {

    const [pressStatus, setPressStatus] = useState({lavender: false, green: false, pink: false});

    const styles = StyleSheet.create({
        output: {
            backgroundColor: props.scheme.color2,
            borderWidth: 1,
            alignItems: 'center',
            width: '90%',
            height: '55%',
            borderColor: props.scheme.color5,
        },
        theme: {
            borderWidth: 1,
            borderColor: props.scheme.color5,
        },
        themePressed: {
            borderWidth: 2,
            borderColor: props.scheme.color5,
        },
        themeBox: {
            width: 65, 
            height: 45,
        },
        lavender: {
            backgroundColor: '#e6e6fa',
        },
        green: {
            backgroundColor: '#b3ff99',
        },
        pink: {
            backgroundColor: '#efa7c0',
        }
    });

    return (
        <View style={styles.output}>
            <TouchableHighlight 
                onPress={() => props.setColorScheme("lavender")}
                onHideUnderlay={() => {setPressStatus(prevState => {return {...prevState, lavender: false}})}}
                onShowUnderlay={() => {setPressStatus(prevState => {return {...prevState, lavender: true}})}}
                style={pressStatus['lavender'] ? styles.themePressed : styles.theme}
            >
                <View style={{...styles.themeBox, ...styles.lavender}} />
            </TouchableHighlight>
            <TouchableHighlight 
                onPress={() => props.setColorScheme("green")}
                onHideUnderlay={() => {setPressStatus(prevState => {return {...prevState, green: false}})}}
                onShowUnderlay={() => {setPressStatus(prevState => {return {...prevState, green: true}})}}
                style={pressStatus['green'] ? styles.themePressed : styles.theme}
            >
                <View  style={{...styles.themeBox, ...styles.green}} />
            </TouchableHighlight>
            <TouchableHighlight 
                onPress={() => props.setColorScheme("pink")}
                onHideUnderlay={() => {setPressStatus(prevState => {return {...prevState, pink: false}})}}
                onShowUnderlay={() => {setPressStatus(prevState => {return {...prevState, pink: true}})}}
                style={pressStatus['pink'] ? styles.themePressed : styles.theme}
            >
                <View  style={{...styles.themeBox, ...styles.pink}} />
            </TouchableHighlight>
        </View>
    );
}

export default Output;
