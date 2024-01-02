import React from 'react';
import { View, StyleSheet, Pressable, ImageBackground, Text, Dimensions, Image } from 'react-native';
import titleScreen from '../../assets/backgrounds/launch_app.jpg'

const TitleScreen = () => {
    const windowHeight = Dimensions.get('window').height;


    return (
        <ImageBackground
            style={styles.bg}
            source={titleScreen}
            resizeMode="cover"
        >
            <Pressable style={[{ height: windowHeight }]}>
                <Image />
                <View style={[styles.tap]}>
                    <Text style={[styles.textTap]}>Touch Screen</Text>
                </View>
            </Pressable>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
    },
    tap: {
        alignItems: "center",
        position: "absolute",
        bottom: 25,
        right: 50,
        left: 50
    },
    textTap: {
        fontSize: 23,
        color: "#fff",
        textShadowColor: 'rgb(126, 204, 238)',
        textShadowOffset: { width: 5, height: 5 },
        zIndex: 1
    },
})

export default TitleScreen;
