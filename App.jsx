import React, { useEffect, useState } from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Provider } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { store } from "./Redux/store";

import LoadingContext from './context/LoadingContext.js';

import { GetRandomServant, getAllServantsBasic } from "./Redux/actions/ServantsAction";

import BlackScreen from './components/BlackScreen';
import FirstScreen from './components/FirstScreen';
import SecondScreen from './components/SecondScreen';
import AnimFou from './components/AnimFou';
import TitleScreen from './components/TitleScreen/index.jsx';
import BlackScreen2 from './components/BlackScreen2/index.jsx';



function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [firstScreen, setFirstScreen] = useState(true);
  const [goBlackScreen, setGoBlackScreen] = useState(false);
  const [goBlackScreen2, setGoBlackScreen2] = useState(false);
  const [fouLoading, setFouLoading] = useState({ "load": false, "text": "loading" })

  const dispatch = useDispatch();
  const basicServants = useSelector((state) => state.AllServantsBasicReducer)

  const [readyTitleScreen, setReadyTitleScreen] = useState(false)
  const [titleScreens, setTitleScreen] = useState(false)

  const [endLoadScreen, setEndLoadScreen] = useState(false);
  const [endTitleScreen, setEndTitleScreen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFirstScreen(false)
      setGoBlackScreen(true)
    }, 2000);
  }, []);

  useEffect(() => {
    if (!firstScreen) {
      setFouLoading({ "load": true, "text": "connecting" });

    }
  }, [goBlackScreen]);

  const [goTitleScreen, setGoTitleScreen] = useState(false)

  useEffect(() => {
    if (titleScreens) {
      setEndLoadScreen(true);
      setGoBlackScreen2(true);
      setTimeout(() => {
        setGoBlackScreen2(false);
        setGoTitleScreen(true);
      }, 1000);

    }
  }, [titleScreens]);


  return (
    <>
      <LoadingContext.Provider value={{ fouLoading, setFouLoading }}>
        <StatusBar
          animated={true}
          hidden={true}
        />
        {

          firstScreen ?

            <FirstScreen />
            :

            goBlackScreen
              ?
              <BlackScreen setFouLoading={setFouLoading} chargeRandom={true} setGoBlackScreen={setGoBlackScreen} />
              :
              !endLoadScreen
                ?
                <SecondScreen readyTitleScreen={readyTitleScreen} setReadyTitleScreen={setReadyTitleScreen} setTitleScreen={setTitleScreen} />
                :
                <></>



        }
        {
          goTitleScreen
            ?

            goBlackScreen2
              ?
              <BlackScreen2 />

              :
              !endTitleScreen
                ?
                <TitleScreen />
                :
                <></>
            :
            <></>
        }
        {
          fouLoading.load
          &&
          <AnimFou text={fouLoading.text} />
        }
      </LoadingContext.Provider>
    </>
  );
}

const styles = StyleSheet.create({


});

export default function Main() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
