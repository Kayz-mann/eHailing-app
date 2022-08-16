import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

interface Props {
  origin: any;
  destination: any;
}


const GOOGLE_MAPS_APIKEY = 'AIzaSyD6nVVBjHCJDJHpzcH46Ra-8SBxSCBFhzo';

const RouteMap: React.FC<Props> = ({origin, destination}) => {

  
  const originLocation = {
    latitude: parseFloat(origin.details.geometry.location.lat),
    longitude: parseFloat(origin.details.geometry.location.lng)
  }

  const destinationLocation = {
    latitude: parseFloat(destination.details.geometry.location.lat),
    longitude: parseFloat(destination.details.geometry.location.lng)
  }


    return (
      <View>
      <MapView
        style={styles.map}
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
                strokeWidth={5}
                strokeColor="black"
            />
            <Marker 
            coordinate={originLocation}
              title={"Origin"}
            />
            <Marker 
            coordinate={destinationLocation}
              title={"Destination"}
            />
      </MapView>
  </View>
    )
}

const styles = StyleSheet.create({
  map: {
    // ...StyleSheet.absoluteFillObject,
    // width: Dimensions.get('window').width,
    // minHeight: 500,
    // flex:1,
    width: '100%', height: '100%'
  }
})

export default RouteMap;