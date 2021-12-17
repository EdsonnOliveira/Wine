import React from 'react';

import Routes from './src/routes';

import Loading from './src/components/loading/Loading';

import { useFonts } from 'expo-font';

export default function App() {
  let [fontsLoaded] = useFonts({
    'ExtraLight': require('./src/assets/fonts/montserrat/Montserrat-ExtraLight.ttf'),
    'Light': require('./src/assets/fonts/montserrat/Montserrat-Light.ttf'),
    'Thin': require('./src/assets/fonts/montserrat/Montserrat-Thin.ttf'),
    'Regular': require('./src/assets/fonts/montserrat/Montserrat-Regular.ttf'),
    'Medium': require('./src/assets/fonts/montserrat/Montserrat-Medium.ttf'),
    'SemiBold': require('./src/assets/fonts/montserrat/Montserrat-SemiBold.ttf'),
    'Bold': require('./src/assets/fonts/montserrat/Montserrat-Bold.ttf'),
    'ExtraBold': require('./src/assets/fonts/montserrat/Montserrat-ExtraBold.ttf'),
    'Black': require('./src/assets/fonts/montserrat/Montserrat-Black.ttf'),
  })

  return fontsLoaded ? <Routes/> : <Loading/>
}