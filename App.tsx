import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { PermissionsAndroid, Platform, StyleSheet, View } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import 'react-native-gesture-handler';
import { withAuthenticator } from 'aws-amplify-react-native';
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config)

import RootNavigator from './src/navigation';




 function App() {
  // navigator.geolocation = require('@react-native-community/geolocation');
  const androidPermissions = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "eHailing App Camera Permission",
          message: "eHailing App needs access to your location" +
            "so you can take awesome rides.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location");
      } else {
        console.log("Camera permissions denied");
      }
    } catch (err) {
       console.warn(err)
    }
  }

  useEffect(() => {
    if (Platform.OS === 'android') {
      androidPermissions();
    } else {
      //ios permission
      Geolocation.requestAuthorization();
    }
  });

  return (
    <View style={styles.container}>
      <RootNavigator />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default withAuthenticator(App);

// add amplify project
// setup auth
// amplify add auth
// setup lambda function
// create own module
// configure App.js