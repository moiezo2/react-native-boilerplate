/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  StatusBar,
  SafeAreaView
} from 'react-native';
import { Icon } from '@rneui/themed';
import { Provider } from 'react-redux';
import { store } from './stores/index';

import ProfileScreen from './screens/Profilescreen';
import HomeScreen from './screens/Homescreen';

// import {
//   Colors,
// } from 'react-native/Libraries/NewAppScreen';


const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerShown: false,
              // headerStatusBarHeight : 
              // tabBarIcon: ({ focused, color, size }) => {
              //   let iconName;

              //   if (route.name === 'Home') {
              //     iconName = focused
              //       ? 'ios-information-circle'
              //       : 'ios-information-circle-outline';
              //   } else if (route.name === 'Settings') {
              //     iconName = focused ? 'ios-list' : 'ios-list-outline';
              //   }

              //   // You can return any component that you like here!
              //   return <Ionicons name={iconName} size={size} color={color} />;
              // },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
            })}
          >
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerShown: false, tabBarBadge: 3,
                tabBarIcon: ({ color, size }) => (
                  <Icon
                    name='home'
                    type='font-awesome'
                    color={color}

                  />
                )
              }}
            />
            <Tab.Screen name="Profile" component={ProfileScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Icon
                    name='person'
                    type='material'
                    size={size}
                    color={color}

                  />
                )
              }}
            />
          </Tab.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
