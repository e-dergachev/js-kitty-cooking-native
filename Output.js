import React, { useState } from 'react';
import { StyleSheet, View, TouchableHighlight, Image, Text, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { getRandomDish } from './sqliteHandler';

function Output(props) {

    const [pressStatus, setPressStatus] = useState({random: false, clear: false, lavender: false, green: false, pink: false});

    const styles = StyleSheet.create({
        output: {
            backgroundColor: props.scheme.color2,
            borderWidth: 1,
            alignItems: 'center',
            width: '90%',
            borderColor: props.scheme.color5,
            //marginBottom: 15,
            flex: 1,
        },
        outputCap: {
            flexDirection: 'row-reverse',
            width: '100%',
            paddingRight: 5,
            paddingBottom: 5,
        },
        cuisine: {
            borderBottomWidth: 2,
            borderColor: props.scheme.color5,
            height: 30,
            marginTop: 5,
            marginLeft: 'auto',
            justifyContent: 'center',
            alignItems: 'center',
            paddingRight: 5,
            paddingLeft: 5,       
        },
        button: {
            borderColor: props.scheme.color5,
            borderRadius: 7,
            marginTop: 5,
            marginRight: 5,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: props.scheme.color4,          
        },
        buttonNotPressed: {
            borderWidth: 1,
        },        
        buttonPressed: {
            borderWidth: 2,
        },
        outputCapText: {
            color: props.scheme.color8,
        },
        appTitle: {
            fontSize: 30,
            color: props.scheme.color6,
            fontFamily: 'indie-flower',
            marginBottom: 3,
        },
        simpleText: {
            color: props.scheme.color6,
            textAlign: 'center',
        },
        recipeText: {
            color: props.scheme.color6,
        },
        recipeBox: {
            alignItems: 'flex-start',
            paddingLeft: 5,
            paddingRight: 5,
            marginTop: 9,
            marginBottom: 10,
        },
        titleBox: {
            flex: 0.6,
            //borderWidth: 1,
            justifyContent: 'center',
        },
        kittyBox: {
            flex: 1,
            justifyContent: 'center',
            //borderWidth: 1,
        },
        kitty: {
            height: '70%'//110,
        },
        bottom: {
            justifyContent: "center",
            //borderWidth: 1,
            flex: 0.8,
        },
        themes: {
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 5,
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
        legalBox: {
            justifyContent: "flex-end",
        },
        legal: {
            fontSize: 11,
            textAlign: 'center',
            color: props.scheme.color6,
            marginBottom: 5,
            marginTop: 5,
        },
    });

    if (props.dish.name) {
        return (
            <View style={styles.output}>
                <ScrollView persistentScrollbar={true}>
                    <View style={styles.outputCap}>
                        <TouchableHighlight
                            onPress={() => setTimeout(() => getRandomDish(props.setDish, props.cuisines), 200)}
                            onHideUnderlay={() => setPressStatus(prevState => {return {...prevState, random: false}})}
                            onShowUnderlay={() => setPressStatus(prevState => {return {...prevState, random: true}})}
                            style={{...pressStatus['random'] ? styles.buttonPressed : styles.buttonNotPressed, ...styles.button, width: 80}}
                            underlayColor={props.scheme.color4}              
                        >
                            <View>
                                <Text style={styles.outputCapText}>Random <FontAwesome name="random" color={props.scheme.color5} /></Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => setTimeout(() => props.setDish({}), 200)} //to give time for the button animation
                            onHideUnderlay={() => setPressStatus(prevState => {return {...prevState, clear: false}})}
                            onShowUnderlay={() => setPressStatus(prevState => {return {...prevState, clear: true}})}
                            style={{...pressStatus['clear'] ? styles.buttonPressed : styles.buttonNotPressed, ...styles.button, width: 58}}
                            underlayColor={props.scheme.color4}
                        >
                            <View>
                                <Text style={styles.outputCapText}>Clear <FontAwesome name="times" color={props.scheme.color5} /></Text>
                            </View>
                        </TouchableHighlight>
                        <View style={styles.cuisine}>
                            <Text style={styles.outputCapText}>Cuisine: {props.dish.cuisine}</Text>
                        </View>
                    </View>
                    <View style={styles.recipeBox}>
                        <Text style={{...styles.recipeText, fontSize: 16}}>{props.dish.name}</Text>
                        <Text style={styles.recipeText}>-------------------------------------</Text>
                        <Text style={styles.recipeText}>{props.dish.recipe}</Text>
                        <Text style={styles.recipeText}>-------------------------------------</Text>
                        <Text style={styles.recipeText}>{props.dish.source}</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
    else {
        return (
            <View style={styles.output}>
                <View style={styles.outputCap}>
                    <TouchableHighlight
                        onPress={() => setTimeout(() => getRandomDish(props.setDish, props.cuisines), 200)}
                        onHideUnderlay={() => setPressStatus(prevState => {return {...prevState, random: false}})}
                        onShowUnderlay={() => setPressStatus(prevState => {return {...prevState, random: true}})}
                        style={{...pressStatus['random'] ? styles.buttonPressed : styles.buttonNotPressed, ...styles.button, width: 80}}
                        underlayColor={props.scheme.color4}              
                    >
                        <View>
                            <Text style={styles.outputCapText}>Random <FontAwesome name="random" color={props.scheme.color5} /></Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={styles.titleBox}>
                    {props.fontLoaded ? (<Text style={styles.appTitle}>JS Kitty Cooking</Text>) : null}
                    <Text style={styles.simpleText}>Old recipes from ancient cookbooks</Text>
                </View>
                <View style={styles.kittyBox}>
                    <Image
                        source={require('./assets/kitty.png')}
                        style={styles.kitty}
                        resizeMode='contain'
                    />
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.simpleText}>Choose a color scheme:</Text>
                    <View style={styles.themes}>
                        <TouchableHighlight 
                            onPress={() => props.setColorScheme("lavender")}
                            onHideUnderlay={() => setPressStatus(prevState => {return {...prevState, lavender: false}})}
                            onShowUnderlay={() => setPressStatus(prevState => {return {...prevState, lavender: true}})}
                            style={{...pressStatus['lavender'] ? styles.themePressed : styles.theme, ...styles.lavender}}
                            underlayColor='#e6e6fa'
                        >
                            <View />
                        </TouchableHighlight>
                        <TouchableHighlight 
                            onPress={() => props.setColorScheme("green")}
                            onHideUnderlay={() => setPressStatus(prevState => {return {...prevState, green: false}})}
                            onShowUnderlay={() => setPressStatus(prevState => {return {...prevState, green: true}})}
                            style={{...pressStatus['green'] ? styles.themePressed : styles.theme, ...styles.green}}
                            underlayColor='#b3ff99'
                        >
                            <View />
                        </TouchableHighlight>
                        <TouchableHighlight 
                            onPress={() => props.setColorScheme("pink")}
                            onHideUnderlay={() => setPressStatus(prevState => {return {...prevState, pink: false}})}
                            onShowUnderlay={() => setPressStatus(prevState => {return {...prevState, pink: true}})}
                            style={{...pressStatus['pink'] ? styles.themePressed : styles.theme, ...styles.pink}}
                            underlayColor='#efa7c0'
                        >
                            <View />
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.legalBox}>
                    <Text style={styles.legal}>All the recipes are taken from the public domain books on Guttenberg.com</Text>
                </View>
            </View>
        );
    }
}

export default Output;
