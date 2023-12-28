import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, ImageBackground, SafeAreaView, Text } from 'react-native';
import secondScreen from '../../assets/backgrounds/second_screen.jpg'
import loadingContext from '../../context/LoadingContext';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllServantsNice, getAllServantsBasic } from '../../Redux/actions/ServantsAction';

const SecondScreen = () => {

    const { fouLoading, setFouLoading } = useContext(loadingContext)
    const [textTap, setTextTap] = useState(false);
    const dispatch = useDispatch();
    const randomServant = useSelector((state) => state.RandomServantReducer)

    // useEffect(() => {
    //     setFouLoading({ "load": true, "text": "loading" });
    //     setTimeout(() => {

    //         dispatch(GetAllServantsNice()).then((res) => {
    //             setFouLoading({"load" : false, text:"loading"});

    //         });
    //     }, 2000);


    // }, []);

    useEffect(() => {
        randomServant.id &&
            console.log(randomServant.profile.comments[0].comment);

        // randomServant.profile.comments.forEach(comment => {
        //     console.log(comment.comment);
        //     console.log("PERIOD PERIOD");

        // });
    }, [randomServant]);

    const [result, setResult] = useState("");

    useEffect(() => {
        console.log(result, "RESULT");
    }, [result])

    return (
        <ImageBackground
            style={styles.bg}
            source={secondScreen}
            resizeMode="cover"
        >
            <SafeAreaView>
                {
                    randomServant.id &&
                    <>
                        <View style={[styles.servant]}>
                            <Text style={[styles.title]}>SERVANT</Text>
                            <Text style={[styles.servantName]}>{randomServant.name}</Text>
                            <Text style={[styles.servantClass]}>Class: {randomServant.className}</Text>
                        </View>
                        <View style={[styles.info]}>
                            <Text style={[styles.servantInfo]}>{randomServant.profile.comments.length > 0 && randomServant.profile.comments[0].comment}</Text>
                        </View>
                    </>
                }

            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
    },
    servant: {
        // width: 80,
        alignItems: "center",
    },
    title: {
        color: "gold",
        textAlign: "center",
        fontSize: 23,
        letterSpacing: 5,
        fontFamily: "georgia"
    },
    servantName: {
        color: "white",
        fontSize: 23,
        textAlign: "center"
    },
    servantClass: {
        fontSize: 18,
        textTransform: "capitalize",
        color: "white",
        textAlign: "center",
        borderBottomColor: "rgba(255,255,255,0.1)",
        borderBottomWidth: 1,
        width: 700
    },
    servantInfo: {
        color: "white",
        fontSize: 18,
        textAlign: "center"
    },
})

export default SecondScreen;
