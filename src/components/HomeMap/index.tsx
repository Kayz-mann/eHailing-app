import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { DrawerActions } from '@react-navigation/native';

import cars from '../../../assets/data/cars';
import StackHeader from '../StackHeader';



const HomeMap: React.FC = ({navigation}: any) => {
  const getImage = (type: string) => {
    if (type === 'UberX') {
        return require('../../../assets/images/top-UberX.png')
    }
    if (type === 'Comfort') {
        return require('../../../assets/images/top-Comfort.png')
    }
    return require('../../../assets/images/top-UberXL.png')
}
  return (
    <View>
    <MapView
      style={{width: '100%', height: 400 }}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
        latitude: 28.450627,
        longitude: -16.263045,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121
      }}
    >
    {cars.map((item) => (
      <Marker
        key={item.id}
        coordinate={{ latitude: item.latitude, longitude: item.longitude }}
      >
        <Image
          style={{
            width: 70,
            height: 70,
            resizeMode: 'contain',
            transform: [{
              rotate: `${item.heading}deg`
            }]
          }}
          source={getImage(item.type)}
        />
      </Marker>
    ))}
    {/* <FlatList
      data={cars}
      keyExtractor={(item: any) => item.id.toString()}
      renderItem={({ item }) => (
        <Marker
        coordinate={{ latitude: item.latitude, longitude: item.longitude }}
      >
        <Image
          style={{ width: 70, height: 70, resizeMode: 'contain' }}
          source={getImage(item.type)}
        />
      </Marker>
      )}
    /> */}
    </MapView>
</View>
    )
}

export default HomeMap;