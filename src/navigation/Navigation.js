import React from 'react';

// navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Splash from '../screens/Splash';
import Settings from '../screens/Settings';
import Chat from '../screens/Chat';

const Stack = createStackNavigator();
const WrapperStack = createStackNavigator();
const RootStack = createStackNavigator();

const ChatStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: 'none',
        headerShown: false,
        gesturesEnabled: true,
      }}
      initialRouteName="Splash">
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Splash" component={Splash} />

      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name={'ChatBot'} component={ChatStack} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

function AppWrapper() {
  return <Navigation />;
}

export default AppWrapper;
