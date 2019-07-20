import React, { useState } from 'react';
import { StyleSheet, View, TouchableHighlight, Image, Text } from 'react-native';

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
        appTitle: {
            fontSize: 25,
            color: props.scheme.color6,
        },
        appSubtitle: {
            color: props.scheme.color6,
        },
        kitty: {
            width: '75%',
        },
        themes: {
            flexDirection: 'row',
            justifyContent: 'center',
        },
        theme: {
            borderWidth: 1,
            borderColor: props.scheme.color5,
            width: 65, 
            height: 45,
        },
        themePressed: {
            borderWidth: 2,
            borderColor: props.scheme.color5,
            width: 65, 
            height: 45,
        },
        themeMsg: {
            color: props.scheme.color6,
        },
        lavender: {
            backgroundColor: '#e6e6fa',
        },
        green: {
            backgroundColor: '#b3ff99',
            marginRight: 8,
            marginLeft: 8,
        },
        pink: {
            backgroundColor: '#efa7c0',
        },
        legal: {
            fontSize: 11,
            textAlign: 'center',
            color: props.scheme.color6,
        },
    });

    return (
        <View style={styles.output}>
            <Text style={styles.appTitle}>JS Kitty Cooking</Text>
            <Text style={styles.appSubtitle}>Old recipes from ancient cookbooks</Text>
            <Image
                source={require('./assets/kitty.png')}
                style={styles.kitty}
                resizeMode='contain'
            />
            <Text style={styles.themeMsg}>Choose a color scheme:</Text>
            <View style={styles.themes}>
                <TouchableHighlight 
                    onPress={() => props.setColorScheme("lavender")}
                    onHideUnderlay={() => {setPressStatus(prevState => {return {...prevState, lavender: false}})}}
                    onShowUnderlay={() => {setPressStatus(prevState => {return {...prevState, lavender: true}})}}
                    style={{...pressStatus['lavender'] ? styles.themePressed : styles.theme, ...styles.lavender}}
                    underlayColor='#e6e6fa'
                >
                    <View />
                </TouchableHighlight>
                <TouchableHighlight 
                    onPress={() => props.setColorScheme("green")}
                    onHideUnderlay={() => {setPressStatus(prevState => {return {...prevState, green: false}})}}
                    onShowUnderlay={() => {setPressStatus(prevState => {return {...prevState, green: true}})}}
                    style={{...pressStatus['green'] ? styles.themePressed : styles.theme, ...styles.green}}
                    underlayColor='#b3ff99'
                >
                    <View />
                </TouchableHighlight>
                <TouchableHighlight 
                    onPress={() => props.setColorScheme("pink")}
                    onHideUnderlay={() => {setPressStatus(prevState => {return {...prevState, pink: false}})}}
                    onShowUnderlay={() => {setPressStatus(prevState => {return {...prevState, pink: true}})}}
                    style={{...pressStatus['pink'] ? styles.themePressed : styles.theme, ...styles.pink}}
                    underlayColor='#efa7c0'
                >
                    <View />
                </TouchableHighlight>
            </View>
            <Text style={styles.legal}>All the recipes are taken from the public domain books on Guttenberg.com</Text>
        </View>
    );
}

export default Output;
