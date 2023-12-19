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

import { GetRandomServant } from "./Redux/actions/ServantsAction";

import BlackScreen from './components/BlackScreen';
import FirstScreen from './components/FirstScreen';
import SecondScreen from './components/SecondScreen';
import AnimFou from './components/AnimFou';



function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [firstScreen, setFirstScreen] = useState(true);
  const [goBlackScreen, setGoBlackScreen] = useState(false);
  const [fouLoading, setFouLoading] = useState(false)

  const dispatch = useDispatch();
  const randomServant = useSelector((state) => state.RandomServantReducer)


  useEffect(() => {
    setTimeout(() => {
      setFirstScreen(false)
      setGoBlackScreen(true)
    }, 2000);
  }, []);

  useEffect(() => {
    if (!firstScreen) {
      setFouLoading(true);
      dispatch(GetRandomServant()).then(() => {
        setTimeout(() => {
          setGoBlackScreen(false)
          setFouLoading(false);
        }, 1000);
      });
    }
  }, [goBlackScreen]);

  useEffect(() => {
    if (randomServant.name) {
      console.log(randomServant.name);

    }
  }, [randomServant]);

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
              <BlackScreen />
              :
              <SecondScreen />

        }
        {
          fouLoading
          &&
          <AnimFou text={"connecting"} />
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
