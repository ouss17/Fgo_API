import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';
import { GetRandomServant, getAllServantsBasic, getAllServantsBasicNA } from '../../Redux/actions/ServantsAction';

const BlackScreen = ({ setGoBlackScreen, chargeRandom, setFouLoading }) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const dispatch = useDispatch();

    useEffect(() => {
        if (chargeRandom) {
            dispatch(getAllServantsBasicNA()).then((res) => {
                if (res.length > 0) {
                    // console.log(res);
                    let random = Math.floor(Math.random() * res.length - 1);
                    setTimeout(() => {
                        dispatch(GetRandomServant(res[random].id)).then(() => {
                            setTimeout(() => {
                                setGoBlackScreen(false)
                                setFouLoading({ load: false, "text": "connecting" });
                            }, 1000);
                        });
                    }, 1000);
                }
            });
        }
    }, []);
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
