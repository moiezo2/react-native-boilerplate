/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Loading from './Loading';

// import {
//   Colors,
// } from 'react-native/Libraries/NewAppScreen';



function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
      <NavigationContainer>
        <Loading/>
      </NavigationContainer>
  );
}

export default App;
