import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, ImageBackground, SafeAreaView, Text } from 'react-native';
import secondScreen from '../../assets/backgrounds/second_screen.jpg'
import loadingContext from '../../context/LoadingContext';
import { useDispatch } from 'react-redux';
import { GetAllServantsNice, getAllServantsBasic } from '../../Redux/actions/ServantsAction';

const SecondScreen = () => {

    const { fouLoading, setFouLoading } = useContext(loadingContext)
    const dispatch = useDispatch();

    useEffect(() => {
        setFouLoading(true);
        setTimeout(() => {

            dispatch(getAllServantsBasic()).then((res) => {
                console.log(res.length);
            });
        }, 1000);


    }, []);

    return (
        <ImageBackground
            style={styles.bg}
            source={secondScreen}
            resizeMode="cover"
        >
            <SafeAreaView>
                <View style={[styles.servant]}>
                    <Text style={[styles.title]}>SERVANT</Text>
                    <Text style={[styles.servantName]}></Text>
                    <Text style={[styles.servantClass]}>Class: </Text>
                </View>
                <View style={[styles.info]}>
                    <Text style={[styles.servantInfo]}></Text>
                </View>

            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    bg: {
        flex: 1
    }
})

export default SecondScreen;
