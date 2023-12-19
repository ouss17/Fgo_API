import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import logo from '../../assets/logo_mini.jpeg'

const FirstScreen = () => {
    return (
        <View style={[styles.container]}>
            <Image style={[styles.logoGame]} source={logo} />
            <Text style={styles.loadApp}>
                This is a work of peaktion. It has absolutely no relation to any existing individu or organization.
            </Text>
            <Text style={styles.loadApp}>
                This application can be played for free.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoGame: {
        width: 175,
        height: 175,
        marginVertical: 65
    },
    loadApp: {
        fontWeight: "bold",
        color: "#080808",
        fontSize: 10
    },
})

export default FirstScreen;
