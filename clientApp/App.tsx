
import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { PermissionsAndroid, Platform, StyleSheet } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import 'react-native-gesture-handler';

import { Amplify, Auth } from 'aws-amplify';
import config from './src/aws-exports';
Amplify.configure(config);
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/navigation';
import { withAuthenticator } from 'aws-amplify-react-native';


function App({ user }: any) {
  navigator.geolocation = require('@react-native-community/geolocation');
  // const mockNavigator = {
  //   geolocation: {
  //     getCurrentPosition: () => {
  //      require('@react-native-community/geolocation');
  //     },
  //   }
  // };

  // (window as any).navigator = mockNavigator;   

  // const androidPermissions = async () => {
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //       {
  //         title: "eHailing App Camera Permission",
  //         message: "eHailing App needs access to your location" +
  //           "so you can take awesome rides.",
  //         buttonNeutral: "Ask Me Later",
  //         buttonNegative: "Cancel",
  //         buttonPositive: "OK"
  //       }
  //     );
  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //       console.log("You can use the location");
  //     } else {
  //       console.log("Camera permissions denied");
  //     }
  //   } catch (err) {
  //     console.warn(err)
  //   }
  // }

  // useEffect(() => {
  //   let isMounted = true;
  //   if (Platform.OS === 'android') {
  //     if (isMounted) (androidPermissions());
  //   } else {
  //     //ios permission
  //     Geolocation.requestAuthorization();
  //     return () => { isMounted = false };
  //   }
  // });



  // useEffect(() => {
  //   let isMounted = true;
  //   if (Platform.OS === 'android') {
  //     if (isMounted) {
  //       androidPermissions();
  //     }
  //   }
  //   Geolocation.requestAuthorization();
  //   return () => { isMounted = false };
  // }, [])


  // 1:21:08


  return (
    <SafeAreaProvider>
      <Navigation />
      <StatusBar style="auto" />
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default App

// export default withAuthenticator(App);

// add amplify project
// setup auth
// amplify add auth
// setup lambda function
// create own module










































// configure App.js