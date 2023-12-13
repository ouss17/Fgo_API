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

import logo from './assets/logo_mini.jpeg'
import secondScreen from './assets/backgrounds/second_screen.jpg'
import BlackScreen from './components/BlackScreen';



function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [firstScreen, setFirstScreen] = useState(true);
  const [goBlackScreen, setGoBlackScreen] = useState(false);


  useEffect(() => {
    setTimeout(() => {
      setFirstScreen(false)
      setGoBlackScreen(true)
    }, 2000);
  }, []);

  useEffect(() => {
    if (!firstScreen) {
      setTimeout(() => {
        setGoBlackScreen(false)
      }, 1000);
    }
  }, [firstScreen]);

  return (
    <>
      <StatusBar
        animated={true}
        // backgroundColor="#61dafb"
        // barStyle={statusBarStyle}
        // showHideTransition={statusBarTransition}
        hidden={true}
      />
      {

        firstScreen ?

          <View style={[styles.container]}>
            <Image style={[styles.logoGame]} source={logo} />
            <Text style={styles.loadApp}>
              This is a work of peaktion. It has absolutely no relation to any existing individu or organization.
            </Text>
            <Text style={styles.loadApp}>
              This application can be played for free.
            </Text>
          </View>
          :

          goBlackScreen
            ?
            <BlackScreen />
            :
            <ImageBackground
              style={styles.bg}
              source={secondScreen}
              resizeMode="cover"
            >
              <SafeAreaView>

              </SafeAreaView>
            </ImageBackground>

      }

    </>

  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoGame: {
    width: 175,
    height: 175,
    marginVertical: 65
  },
  loadApp: {
    fontWeight: "bold",
    color: "#080808",
    fontSize: 10
  },
  bg: {
    flex: 1
  }
});

export default App;
