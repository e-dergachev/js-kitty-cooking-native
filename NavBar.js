import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Constants from 'expo-constants';

function NavBar(props) {

    const styles = StyleSheet.create({
        foldedNavBar: {
            backgroundColor: props.scheme.color3,
            borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'center',
            height: '9%',
            marginTop: Constants.statusBarHeight + 2, //marginTop: 27
            width: '99%',
            borderColor: props.scheme.color5,
        },
        msg: {
            color: props.scheme.color7,
            fontSize: 15,
        }
    });

    return (
        <View style={styles.foldedNavBar}>
            <Text style={styles.msg}>Click to select cuisines</Text>
        </View>
    );
}

export default NavBar;
