import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function NavBar() {
    return (
        <View style={styles.navbar}>
            <Text style={styles.msg}>Click to select cuisines</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: '#aeafc2',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '7%',
        marginTop: 27,
        width: '99%',
        borderColor: '#5d4300',
    },
    msg: {
        color: '#332500',
        fontSize: 15,
    }
});

export default NavBar;
