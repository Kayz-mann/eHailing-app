import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeNav from './HomeNav';
import DrawerNav from './DrawerNav';

type RootStackParamList = {
  HomeNav: undefined;
  DrawerNav: undefined;
};

export default function Navigation(): JSX.Element {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  function RootNavigator(): JSX.Element {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="DrawerNav" component={DrawerNav} />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
