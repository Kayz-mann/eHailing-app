import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen';
import DestinationSearch from '../screens/DestinationSearch';
import SearchResults from '../screens/SearchResults';

const Stack = createStackNavigator();

interface Props {
    // HomeScreen: undefined;
    // DestinationSearch: undefined;
}

const RootNavigator: React.FC<Props> = () => {
    return <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName={"DestinationSearch"}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="DestinationSearch" component={DestinationSearch} />
            <Stack.Screen name="SearchResults" component={SearchResults} />
      </Stack.Navigator>
  </NavigationContainer>;
}

export default RootNavigator;