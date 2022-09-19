/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';
import config from './src/aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';
import { getCarId } from './src/graphql/queries';

import HomeScreen from './screens/HomeScreen';
import { createCar } from './src/graphql/mutation';

Amplify.configure(config);


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    const updateUser = async () => {
      // Get authenticated user
      const authenticatedUser = await Auth.currentAuthenticatedUser({ bypassCache: true })
      if (!authenticatedUser) {
        return;
      }

      // Check if user has a car
      const carData: any = await API.graphql(
        graphqlOperation(
          getCarId,
          { id: authenticatedUser.attributes.sub }
        )
      )

      if (!!carData.data.getCarId ) {
        console.log('User already has a car assigned');
        return;
      }

      // If not create a new car
      const newCar = {
        id: authenticatedUser.attributes.sub,
        type: 'UberX',
        userId: authenticatedUser.attributes.sub,
      }
      await API.graphql(graphqlOperation(
        createCar, {
        input: newCar
      }
      ))
    };
    updateUser();
  }, [])

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <HomeScreen origin={undefined} destination={undefined} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

// export default withAuthenticator(App);
export default App
