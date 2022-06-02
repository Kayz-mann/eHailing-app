import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';




const RouteMap: React.FC = () => {

    const GOOGLE_MAPS_APIKEY = 'AIzaSyD6nVVBjHCJDJHpzcH46Ra-8SBxSCBFhzo'

    const origin = {
        latitude: 28.450627,
        longitude: -16.263045,
    }

    const destination = {
        latitude: 28.450627,
        longitude: -14.263045,
    }

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
                origin={origin}
                destination={destination}
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