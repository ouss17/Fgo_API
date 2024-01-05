import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Pressable, ImageBackground, Text, Dimensions, Image, Animated } from 'react-native';
import titleScreen from '../../assets/backgrounds/launch_app.jpg'
import logo from '../../assets/Fate_Grand_Order_logo.png'

const TitleScreen = () => {
    const windowHeight = Dimensions.get('window').height;
    const [text] = useState("Touch Screen");
    const [letters, setLetters] = useState([])
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        setLetters(text.split(''));
    }, [text]);

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start(() => fadeOut());
    };

    const fadeOut = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
        }).start(() => fadeIn());
    };

    useEffect(() => {
        fadeIn();
    }, []);

    // useEffect(() => {
    //     // Animation d'opacité de 0.5 à 1 sur une durée de 1000 millisecondes
    //     Animated.timing(
    //         fadeAnim,
    //         {
    //             toValue: 1,
    //             duration: 1000,
    //             useNativeDriver: true,
    //         }
    //     ).start();
    // }, [fadeAnim]);

    return (
        <ImageBackground
            style={styles.bg}
            source={titleScreen}
            resizeMode="cover"
        >
            <Pressable style={[{ alignItems: "center", height: windowHeight }]}>
                <Image source={logo} style={{ marginTop: 30, }} />
                <View style={[styles.tap]}>
                    {letters.map((letter, index) => (
                        <Animated.Text key={index} style={[styles.textTap, { color: "#0096ff", opacity: fadeAnim, }]}>
                            <Text style={[styles.highlight, { color: "#fff" }]}>{letter}</Text>
                        </Animated.Text>
                    ))}
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
        flexDirection: 'row',
        justifyContent: 'center',
        bottom: 75,
        right: 50,
        left: 50
    },
    textTap: {
        fontSize: 30,
        color: "#fff",
        fontWeight: "bold"
        // textShadowColor: 'rgb(126, 204, 238)',
        // textShadowOffset: { width: 5, height: 5 },
        // zIndex: 1
    },
    highlight: {
        textShadowColor: '#0096ff', // Couleur de surlignage (ici jaune)
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 10,
    },
})

export default TitleScreen;
