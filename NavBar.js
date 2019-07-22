import React , { useState } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';

function NavBar(props) {
    const [pressStatus, setPressStatus] = useState({General: false, Vegetarian: false, American: false, French: false, Indian: false, Italian: false, Jewish: false});

    const styles = StyleSheet.create({
        navbar: {
            borderWidth: 1,
            marginTop: Constants.statusBarHeight + 2, //marginTop: 27
            width: '99%',
            borderColor: props.scheme.color5,
        },
        foldedNavBar: {
            backgroundColor: props.scheme.color3,
            height: 55,
            alignItems: 'center',
            justifyContent: 'center',
        },
        unfoldedNavBar: {
            backgroundColor: props.scheme.color4,
            height: 420,
            zIndex: 100,
            position: 'absolute',
        },
        msg: {
            color: props.scheme.color7,
            fontSize: 15,
        },
        buttons: {
            alignItems: 'center',
        },
        button: {
            borderColor: props.scheme.color5,
            borderRadius: 7,
            marginTop: 5,
            height: 40,
            width: 225,
            justifyContent: 'center',
            alignItems: 'center',
        },        
    });

    function msgOnclick(cuisine) {
        props.cuisines[cuisine] ? props.setCuisines(prevState => {return {...prevState, [cuisine]: false}}) : props.setCuisines(prevState => {return {...prevState, [cuisine]: true}});
    }

    function msgStyle(cuisine) {
        let res;
        if (props.cuisines[cuisine]) {
            res = {...styles.button, backgroundColor: props.scheme.color3};
        }
        else {
            res = {...styles.button, backgroundColor: props.scheme.color4};
        }
        if (pressStatus[cuisine]) {
            res = {...res, borderWidth: 2};
        }
        else {
            res = {...res, borderWidth: 1};
        }
        return res;
    }

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
                <View style={styles.buttons}>
                    <Text style={{...styles.msg, marginTop: 5}}>Click cuisines to select/unselect them</Text>
                    <Text style={{...styles.msg, marginBottom: 5}}>Click the bar again to close it</Text>
                    <TouchableHighlight
                        onPress={() => msgOnclick('General')}
                        style={msgStyle('General')}
                        onHideUnderlay={() => setPressStatus(prevState => {return {...prevState, General: false}})}
                        onShowUnderlay={() => setPressStatus(prevState => {return {...prevState, General: true}})}
                        underlayColor={props.cuisines['General'] ? props.scheme.color3 : props.scheme.color4}
                    >
                        <Text style={styles.msg}>General</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => msgOnclick('Vegetarian')}
                        style={msgStyle('Vegetarian')}
                        onHideUnderlay={() => setPressStatus(prevState => {return {...prevState, Vegetarian: false}})}
                        onShowUnderlay={() => setPressStatus(prevState => {return {...prevState, Vegetarian: true}})}
                        underlayColor={props.cuisines['Vegetarian'] ? props.scheme.color3 : props.scheme.color4}
                    >
                        <Text style={styles.msg}>Vegetarian</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => msgOnclick('American')}
                        style={msgStyle('American')}
                        onHideUnderlay={() => setPressStatus(prevState => {return {...prevState, American: false}})}
                        onShowUnderlay={() => setPressStatus(prevState => {return {...prevState, American: true}})}
                        underlayColor={props.cuisines['American'] ? props.scheme.color3 : props.scheme.color4}
                    >
                        <Text style={styles.msg}>American</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => msgOnclick('French')}
                        style={msgStyle('French')}
                        onHideUnderlay={() => setPressStatus(prevState => {return {...prevState, French: false}})}
                        onShowUnderlay={() => setPressStatus(prevState => {return {...prevState, French: true}})}
                        underlayColor={props.cuisines['French'] ? props.scheme.color3 : props.scheme.color4}
                    >
                        <Text style={styles.msg}>French</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => msgOnclick('Indian')}
                        style={msgStyle('Indian')}
                        onHideUnderlay={() => setPressStatus(prevState => {return {...prevState, Indian: false}})}
                        onShowUnderlay={() => setPressStatus(prevState => {return {...prevState, Indian: true}})}
                        underlayColor={props.cuisines['Indian'] ? props.scheme.color3 : props.scheme.color4}
                    >
                        <Text style={styles.msg}>Indian</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => msgOnclick('Italian')}
                        style={msgStyle('Italian')}
                        onHideUnderlay={() => setPressStatus(prevState => {return {...prevState, Italian: false}})}
                        onShowUnderlay={() => setPressStatus(prevState => {return {...prevState, Italian: true}})}
                        underlayColor={props.cuisines['Italian'] ? props.scheme.color3 : props.scheme.color4}
                    >
                        <Text style={styles.msg}>Italian</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => msgOnclick('Jewish')}
                        style={msgStyle('Jewish')}
                        onHideUnderlay={() => setPressStatus(prevState => {return {...prevState, Jewish: false}})}
                        onShowUnderlay={() => setPressStatus(prevState => {return {...prevState, Jewish: true}})}
                        underlayColor={props.cuisines['Jewish'] ? props.scheme.color3 : props.scheme.color4}
                    >
                        <Text style={styles.msg}>Jewish</Text>
                    </TouchableHighlight>   
                </View>
            </TouchableHighlight>
        );        
    }

}

export default NavBar;
