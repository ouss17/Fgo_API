import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, ImageBackground, SafeAreaView, Text, Dimensions, TouchableOpacity, Pressable, ScrollView } from 'react-native';
import secondScreen from '../../assets/backgrounds/second_screen.jpg'
import loadingContext from '../../context/LoadingContext';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllServantsNice, getAllServantsBasic } from '../../Redux/actions/ServantsAction';

const SecondScreen = ({ readyTitleScreen,
    setReadyTitleScreen,
    setTitleScreen }) => {

    const windowHeight = Dimensions.get('window').height;

    const { fouLoading, setFouLoading } = useContext(loadingContext)
    const [textTap, setTextTap] = useState(false);
    const dispatch = useDispatch();
    const randomServant = useSelector((state) => state.RandomServantReducer)

    const GoToTitleScreen = () => {
        if (readyTitleScreen) {
            setTitleScreen(true);

        }
    }

    useEffect(() => {
        setFouLoading({ "load": true, "text": "loading" });
        setTimeout(() => {

            dispatch(GetAllServantsNice()).then((res) => {
                setFouLoading({ "load": false, text: "loading" });
                setTimeout(() => {
                    setReadyTitleScreen(true);
                    setTextTap(true);
                }, 300);

            });
        }, 2000);


    }, []);

    // const [kawa, setKawa] = useState(`"Kama? She's rather charming theses days, don't you think?"{"\n"}
    //                                 In an act of retaliation against Pãrvatî and others' disagreeably warm comments, the dog of love has awakened as the Demon King Mara (or so she claims).{"\n"}{"\n"}

    //                                 Summer is full of temtation. 'Tis the season of depravity.{"\n"}
    //                                 What kind of Demon King would she be if she doesn't assert her presence? Newly motivated, she changes into a cute swimsuit and tries even more aggressively than usual to corrupt her Master...{"\n"}{"\n"}

    //                                 "What do you think? This is the true form of the summer Demon King Mara. Scared that you might accidentally get corrupted?"{"\n"}{"\n"}

    //                                 Everyone nodded, agreeing that it is indeed terrifying that she's no different than the usual Kama.`)

    // useEffect(() => {
    //     randomServant.id &&
    //         console.log(randomServant.profile.comments[0].comment.length);

    //     // randomServant.profile.comments.forEach(comment => {
    //     //     console.log(comment.comment);
    //     //     console.log("PERIOD PERIOD");

    //     // });
    // }, [randomServant]);


    return (
        <ImageBackground
            style={styles.bg}
            source={secondScreen}
            resizeMode="cover"
        >
            <>
                <ScrollView>
                    {

                        randomServant.id &&
                        <Pressable style={[{ height: windowHeight }]} onPress={() => GoToTitleScreen()}>
                            <View style={[styles.servant]}>
                                <Text style={[styles.title]}>SERVANT</Text>
                                <Text style={[styles.servantName]}>{randomServant.name}</Text>
                                <Text style={[styles.servantClass]}>Class: {randomServant.className}</Text>
                            </View>
                            <View style={[styles.info]}>
                                <Text style={[styles.servantInfo, { width: (randomServant.profile.comments.length > 0 && randomServant.profile.comments[0].comment.length > 500) ? "60%" : "60%", fontSize: (randomServant.profile.comments.length > 0 && randomServant.profile.comments[0].comment.length > 500) ? 13 : 18 }]}>{randomServant.profile.comments.length > 0 && randomServant.profile.comments[0].comment}</Text>
                            </View>
                            {
                                textTap &&
                                <View style={[styles.tap]}>
                                    <Text style={[styles.textTap]}>Please Tap the Screen</Text>
                                </View>
                            }
                        </Pressable>
                        // <Pressable style={[{ height: windowHeight }]} onPress={() => GoToTitleScreen()}>
                        //     <View style={[styles.servant]}>
                        //         <Text style={[styles.title]}>SERVANT</Text>
                        //         <Text style={[styles.servantName]}>Kama (Avenger)</Text>
                        //         <Text style={[styles.servantClass]}>Class: Avenger</Text>
                        //     </View>
                        //     <View style={[styles.info]}>
                        //         <Text style={[styles.servantInfo, { width: (kawa.length > 0 && kawa.length > 500) ? "60%" : "60%", fontSize: (kawa.length > 0 && kawa.length > 500) ? 13 : 18 }]}>"Kama? She's rather charming theses days, don't you think?"{"\n"}
                        //             In an act of retaliation against Pãrvatî and others' disagreeably warm comments, the dog of love has awakened as the Demon King Mara (or so she claims).{"\n"}{"\n"}

                        //             Summer is full of temtation. 'Tis the season of depravity.{"\n"}
                        //             What kind of Demon King would she be if she doesn't assert her presence? Newly motivated, she changes into a cute swimsuit and tries even more aggressively than usual to corrupt her Master...{"\n"}{"\n"}

                        //             "What do you think? This is the true form of the summer Demon King Mara. Scared that you might accidentally get corrupted?"{"\n"}{"\n"}

                        //             Everyone nodded, agreeing that it is indeed terrifying that she's no different than the usual Kama.</Text>
                        //     </View>
                        //     {
                        //         textTap &&
                        //         <View style={[styles.tap]}>
                        //             <Text style={[styles.textTap]}>Please Tap the Screen</Text>
                        //         </View>
                        //     }
                        // </Pressable>
                    }
                </ScrollView>

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
        fontFamily: "georgia",
        // marginBottom: 0
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
        display: "flex",
        alignItems: "center",
        // marginLeft: 75,
        // marginRight: 50
    },
    servantInfo: {
        color: "white",
        // fontSize: 18,
        textAlign: "left"
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
        color: "rgb(126, 204, 238)",
    }
})

export default SecondScreen;
