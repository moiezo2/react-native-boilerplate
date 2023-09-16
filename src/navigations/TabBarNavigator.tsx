import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {
    SafeAreaView
} from 'react-native';
import HomeScreen from '../screens/homescreens';
import ProfileScreen from '../screens/profilescreens';
import { Icon } from '@rneui/base';
import HomeNavigator from './HomeNavigator';

const TabBarNavigator = () =>{
    const Tab = createBottomTabNavigator();

    return(
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
              component={HomeNavigator}
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
    )
}

export default TabBarNavigator;