import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import DestinationSearch from '../screens/DestinationSearch';
import SearchResults from '../screens/SearchResults';
import HomeSearch from '../components/HomeSearch';




export type HomeNavParamList = {
    HomeScreen: undefined;
    DestinationSearch: undefined;
    SearchResults: {
        originPlace: string;
        destinationPlace: string;
    };
}

const Home = createNativeStackNavigator<HomeNavParamList>();

function HomeNav(): JSX.Element {
    return (
        <Home.Navigator
        screenOptions={{
            headerShown: false,
        }}
        initialRouteName={"DestinationSearch"}
    >
        <Home.Screen name="HomeScreen" component={HomeScreen} />
        <Home.Screen name="DestinationSearch" component={DestinationSearch} />
        <Home.Screen name="SearchResults" component={SearchResults} />
  </Home.Navigator>
    )
}

export default HomeNav;