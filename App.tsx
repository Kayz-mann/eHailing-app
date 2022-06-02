import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { PermissionsAndroid, Platform, StyleSheet, Text, View } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import DestinationSearch from './src/screens/DestinationSearch';
import HomeScreen from './src/screens/HomeScreen';
import SearchResults from './src/screens/SearchResults';
import 'react-native-gesture-handler';
import RootNavigator from './src/navigation';

export default function App() {
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
