import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

interface Props {
  origin: any;
  destination: any;
}



const RouteMap: React.FC<Props> = ({ origin, destination }) => {

    const GOOGLE_MAPS_APIKEY = 'AIzaSyD6nVVBjHCJDJHpzcH46Ra-8SBxSCBFhzo'

    // const origin = {
    //     latitude: 28.450627,
    //     longitude: -16.263045,
    // }
  
  const originLocation = {
    longitude: origin.details.geometry.location.lng,
    latitude: origin.details.geometry.location.lat
  }

  const destinationLocation = {
    longitude: destination.details.geometry.location.lng,
    latitude:  destination.details.geometry.location.lat,
  }

    // const destination = {
    //     latitude: 28.450627,
    //     longitude: -14.263045,
    // }

    return <View>
      <MapView
        style={{width: '100%', height: '100%' }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        initialRegion={{
          latitude: 28.450627,
          longitude: -16.263045,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0121
        }}
        >
            <MapViewDirections
                origin={originLocation}
                destination={destinationLocation}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={3}
                strokeColor="black"
            />
            <Marker 
              coordinate={origin}
              title={"Origin"}
            />
            <Marker 
              coordinate={destination}
              title={"Destination"}
            />
      </MapView>
  </View>;
}

export default RouteMap;