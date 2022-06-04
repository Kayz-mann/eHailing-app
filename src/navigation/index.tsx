import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeNav from './HomeNav';
import DrawerNav from './DrawerNav';



export type RootStackParamList = {
    HomeNav: undefined;
    DrawerNav: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator(): JSX.Element {
    return <NavigationContainer>
        <Stack.Screen name="HomeNav" component={HomeNav} />
        <Stack.Screen name="DrawerNav" component={DrawerNav} />
  </NavigationContainer>;
}

export default RootNavigator;