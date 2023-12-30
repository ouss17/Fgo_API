import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, ImageBackground, SafeAreaView, Text, Dimensions } from 'react-native';
import secondScreen from '../../assets/backgrounds/second_screen.jpg'
import loadingContext from '../../context/LoadingContext';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllServantsNice, getAllServantsBasic } from '../../Redux/actions/ServantsAction';

const SecondScreen = () => {

    const windowHeight = Dimensions.get('window').height;

    const { fouLoading, setFouLoading } = useContext(loadingContext)
    const [textTap, setTextTap] = useState(false);
    const dispatch = useDispatch();
    const randomServant = useSelector((state) => state.RandomServantReducer)

    useEffect(() => {
        setFouLoading({ "load": true, "text": "loading" });
        setTimeout(() => {

            dispatch(GetAllServantsNice()).then((res) => {
                setFouLoading({ "load": false, text: "loading" });
                setTimeout(() => {
                    setTextTap(true);
                }, 300);

            });
        }, 2000);


    }, []);

    useEffect(() => {
        randomServant.id &&
            console.log(randomServant.profile.comments[0].comment.length);

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
            <>
                {
                    randomServant.id &&
                    <View style={[{ height: windowHeight }]}>
                        <View style={[styles.servant]}>
                            <Text style={[styles.title]}>SERVANT</Text>
                            <Text style={[styles.servantName]}>{randomServant.name}</Text>
                            <Text style={[styles.servantClass]}>Class: {randomServant.className}</Text>
                        </View>
                        <View style={[styles.info]}>
                            <Text style={[styles.servantInfo, { width: (randomServant.profile.comments.length > 0 && randomServant.profile.comments[0].comment.length > 500) ? "80%" : "60%", fontSize: (randomServant.profile.comments.length > 0 && randomServant.profile.comments[0].comment.length > 500) ? 13 : 18 }]}>{randomServant.profile.comments.length > 0 && randomServant.profile.comments[0].comment}</Text>
                        </View>
                        {
                            textTap &&
                            <View style={[styles.tap]}>
                                <Text style={[styles.textTap]}>Please Tap the Screen</Text>
                            </View>
                        }
                    </View>
                }

            </>
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
    info: {
        alignItems: "center"
    },
    servantInfo: {
        color: "white",
        // fontSize: 18,
        textAlign: "left"
    },
    tap: {
        alignItems: "center",
        position: "absolute",
        bottom: 20,
        right: 50,
        left: 50
    },
    textTap: {
        fontSize: 23,
        color: "rgb(126, 204, 238)",
    }
})

export default SecondScreen;
