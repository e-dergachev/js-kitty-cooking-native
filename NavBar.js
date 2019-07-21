import React , { useState } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';

function NavBar(props) {

    const styles = StyleSheet.create({
        navbar: {
            borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: Constants.statusBarHeight + 2, //marginTop: 27
            width: '99%',
            borderColor: props.scheme.color5,   
        },
        foldedNavBar: {
            backgroundColor: props.scheme.color3,
            height: 55,
        },
        unfoldedNavBar: {
            backgroundColor: props.scheme.color4,
            height: '50%',
            zIndex: 100,
            position: 'absolute',
        },
        msg: {
            color: props.scheme.color7,
            fontSize: 15,
        }
    });

    if (props.navFolded) {
        return (
            <TouchableHighlight 
                onPress={() => props.setNavFolded(false)}
                style={{...styles.foldedNavBar, ...styles.navbar}}
                underlayColor={props.scheme.color4}
            >
                <Text style={styles.msg}>Click to select cuisines</Text>
            </TouchableHighlight>
        );
    }
    else {
        return (
            <TouchableHighlight
                onPress={() => props.setNavFolded(true)}
                style={{...styles.unfoldedNavBar, ...styles.navbar}}
                underlayColor={props.scheme.color3}
            >
                <View />
            </TouchableHighlight>
        );        
    }

}

export default NavBar;
