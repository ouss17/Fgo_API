import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';

const BlackScreen = () => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    return (
        <View style={[styles.black, { width: windowWidth, height: windowHeight }]}>
        </View>
    );
}

const styles = StyleSheet.create({
    black: {
        backgroundColor: "black"
    }
})

export default BlackScreen;
