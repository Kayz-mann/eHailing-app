import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeNav from './HomeNav';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from '../components/DrawerContent';
import HomeScreen from '../screens/HomeScreen';



export type DrawerNavParamList = {
    HomeScreen: undefined;
    HomeNav: undefined;
    Trips: undefined;
    Help: undefined;
    Settings: undefined;
}

const Drawer = createDrawerNavigator<DrawerNavParamList>();

function DrawerNav(): JSX.Element {
    return (
        <Drawer.Navigator
            drawerContent={(props: any) => <DrawerContent {...props} />}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Drawer.Screen name="HomeNav" component={HomeNav} />
            {/* <Drawer.Screen name="Trips" component={HomeScreen} />
            <Drawer.Screen name="Help" component={HomeScreen} />
            <Drawer.Screen name="Settings" component={HomeScreen} /> */}
        </Drawer.Navigator>
    )
}



export default DrawerNav;

{/* <Drawer.Navigator
drawerContent={(props: any) => <DrawerContent {...props} />}
screenOptions={{
  headerShown: false,
}}
> */}