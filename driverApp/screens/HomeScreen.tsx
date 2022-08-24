/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */

import React, { useState } from 'react';
import {StyleSheet, View, Text, Dimensions, TouchableOpacity, Pressable} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Icon from 'react-native-vector-icons/Entypo';
import NewOrderPopup from '../components/NewOrderPopup';


interface Props {
    origin: any;
    destination: any;
}

const origin = { latitude: 37.3318456, longitude: -122.0296002 }
const destination = { latitude: 37.7718456, longitude: -122.5296002}
  
  
  const GOOGLE_MAPS_APIKEY = 'AIzaSyD6nVVBjHCJDJHpzcH46Ra-8SBxSCBFhzo';

// const HomeScreen = (): JSX.Element => {
const HomeScreen: React.FC<Props> = ({ origin, destination }) => {
  const [isOnline, setIsOnline] = useState<boolean>(false);

  const goPress = () => {
    setIsOnline(!isOnline);
  } 

    return (
        <View style={{ flex: 1, }}>
          <MapView
            // eslint-disable-next-line react-native/no-inline-styles
            style={{ width: '100%', height: Dimensions.get('window').height - 120 }}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            initialRegion={{
            latitude: 28.450627,
            longitude: -16.263045,
            latitudeDelta: 0.0222,
            longitudeDelta: 0.0121,
            }}
           >
           <MapViewDirections
                origin={origin}
                destination={destination}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={5}
                strokeColor="black"
            />
           </MapView>
           <Pressable 
             onPress={() => console.warn('Hey')}
             style={[styles.balanceButton, {top: 10, right: 20, flexDirection: 'row'}]}>
              <Text style={{ color: '#4a4a4a', fontWeight: 'bold'}}>$</Text>
             <Text style={{ color: '#fff', marginLeft: 5, fontWeight: 'bold'}}>0.00</Text>
           </Pressable>
           <Pressable 
             onPress={() => console.warn('Hey')}
             style={[styles.roundButton, {top: 10, left: 10}]}>
             <Icon name={'menu'} size={24} color="#4a4a4a" />
           </Pressable>
           <Pressable 
             onPress={() => console.warn('Hey')}
             style={[styles.roundButton, {top: 10, right: 10}]}>
             <Icon name={'menu'} size={24} color="#4a4a4a" />
           </Pressable>
           <Pressable 
             onPress={() => console.warn('Hey')}
             style={[styles.roundButton, {top: 620, left: 10}]}>
             <Icon name={'menu'} size={24} color="#4a4a4a" />
           </Pressable>
           <Pressable 
             onPress={() => console.warn('Hey')}
             style={[styles.roundButton, {top: 620, right: 10}]}>
             <Icon name={'menu'} size={24} color="#4a4a4a" />
           </Pressable>
           <Pressable 
             onPress={goPress}
             style={[styles.goButton, {top: 580, right: 10}]}>
            <Text style={styles.goText}>
              {
                isOnline? 'END' : 'GO'
              }
            </Text>
           </Pressable>
           <View style={styles.bottomContainer}>
              <TouchableOpacity activeOpacity={0.6}>
                <Icon name={'options'} size={20} color="#4a4a4a" />
              </TouchableOpacity>
              {
                isOnline ? 
                <Text style={styles.bottomText}>You're online</Text>
              : <Text style={styles.bottomText}>You're offline</Text>
              }
              <TouchableOpacity activeOpacity={0.6}>
                <Icon name={'menu'} size={20} color="#4a4a4a" />
              </TouchableOpacity>
           </View>
           <NewOrderPopup />
       </View>
    );
}

const styles = StyleSheet.create({
  bottomContainer: {
    height: 100,
    backgroundColor: '#fff',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  bottomText: {
    fontSize: 22,
    color: '#4a4a4a',
    padding: 10,
  },
  roundButton: {
    position: 'absolute',
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 25,
  },
  goButton: {
    position: 'absolute',
    backgroundColor: '#1495ff',
    padding: 10,
    borderRadius: 50,
    width: 75,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 110,
    left: Dimensions.get('window').width/2 - 37,
  },
  goText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold'
  },
  balanceText: {
    fontSize: 22,
    color: '#fff',
    backgroundColor: '#000',
  },
  balanceButton: {
    position: 'absolute',
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 50,
    width: 100,
    height: 50,
    top: 10,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 110,
    left: Dimensions.get('window').width/2 - 37,
  }

})
export default HomeScreen;