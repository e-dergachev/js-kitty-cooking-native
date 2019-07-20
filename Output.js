import React from 'react';
import { StyleSheet, View } from 'react-native';

function Output() {
    return (
        <View style={styles.output}>
        </View>
    );
}

const styles = StyleSheet.create({
    output: {
        backgroundColor: '#edeeff',
        borderWidth: 1,
        alignItems: 'center',
        width: '90%',
        height: '55%',
        borderColor: '#5d4300',
    },
});

export default Output;
