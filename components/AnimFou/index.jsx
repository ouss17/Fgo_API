import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text, Dimensions } from 'react-native';

import fou1 from '../../assets/characters/fou/load_fou_1.jpg'
import fou2 from '../../assets/characters/fou/load_fou_2.jpg'
import fou3 from '../../assets/characters/fou/load_fou_3.jpg'
import fou4 from '../../assets/characters/fou/load_fou_4.jpg'

const AnimFou = ({ text }) => {
    const windowWidth = Dimensions.get('window').width;
    const [changeText, setChangeText] = useState(text);
    const [imageSource, setImageSource] = useState(fou1);
    const [imageCounter, setImageCounter] = useState(1);
    const [textWidth, setTextWidth] = useState(0);

    const images = [fou2, fou4, fou3, fou1];

    const [dots, setDots] = useState('');

    useEffect(() => {
        let timeout;

        const showDots = () => {
            timeout = setTimeout(() => {
                if (dots === '...') {
                    setDots('');
                } else {
                    setDots((prevDots) => prevDots + '.');
                }
            }, 1000);
        };

        showDots();

        return () => clearTimeout(timeout);
    }, [dots]);

    // useEffect(() => {
    //     // Mesurer la largeur du texte
    //     if (text) {
    //         setTextWidth(0); // Réinitialisation de la largeur pour s'assurer de la réévaluation
    //         setTextWidth(Math.ceil((text.length * 22))); // Remplacez 10 par la taille de police utilisée
    //     }
    // }, [text]);


    useEffect(() => {
        const interval = setInterval(() => {
            setImageSource(images[imageCounter % images.length]);
            setImageCounter((prevCounter) => prevCounter + 1);
        }, 200);

        return () => clearInterval(interval);
    }, [imageCounter]);

    return (
        <View style={[styles.footerFoo, { width: windowWidth }]}>
            <Text
                // onLayout={(event) => {
                //     const { width } = event.nativeEvent.layout;
                //     if (width !== textWidth) {
                //         setTextWidth(width);
                //     }
                // }}
                style={[styles.text]}>{changeText}{dots}</Text>
            <Image
                source={imageSource}
                style={{ width: 50, height: 50, marginRight: 50, marginLeft: 30 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    footerFoo: {
        position: "absolute",
        flexDirection: "row",
        bottom: 0,
        backgroundColor: "rgba(3,3,3, 0.3)",
        alignItems: "baseline",
        justifyContent: "flex-end",
        borderBottomColor: "#fff",
        borderBottomWidth: 2
    },
    text: {
        color: "#fff",
        textTransform: "uppercase",
        fontSize: 22,
        marginRight: 30,
        width: 200,
        letterSpacing: 3

    }
})

export default AnimFou;
