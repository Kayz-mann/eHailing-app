/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */

import React from 'react';
import {View} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

interface Props {
    origin: any;
    destination: any;
}

const origin = { latitude: 37.3318456, longitude: -122.0296002 }
const destination = { latitude: 37.7718456, longitude: -122.5296002}
  
  
  const GOOGLE_MAPS_APIKEY = 'AIzaSyD6nVVBjHCJDJHpzcH46Ra-8SBxSCBFhzo';

// const HomeScreen = (): JSX.Element => {
    const HomeScreen: React.FC<Props> = ({origin, destination}) => {
    return (
        <View>
          <MapView
            // eslint-disable-next-line react-native/no-inline-styles
            style={{ width: '100%', height: '100%'}}
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
       </View>
    );
}
export default HomeScreen;