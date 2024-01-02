import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';
import { GetRandomServant, getAllServantsBasic, getAllServantsBasicNA } from '../../Redux/actions/ServantsAction';

const BlackScreen2 = ({ }) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const dispatch = useDispatch();

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

export default BlackScreen2;
