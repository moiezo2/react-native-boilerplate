import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/homescreens';


const HomeNavigator = () => {
    const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen options={{
        headerShown : false,
      }} name='HomeScreen' component={HomeScreen}></Stack.Screen>
    </Stack.Navigator>
  );
}

export default HomeNavigator;