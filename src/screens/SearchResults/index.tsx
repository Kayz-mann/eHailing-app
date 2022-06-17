import React from 'react';
import { Dimensions, View } from 'react-native';
import CarOptions from '../../components/CarOptions';
import RouteMap from '../../components/RouteMap';
import { useRoute } from '@react-navigation/native';


// import { Container } from './styles';

const SearchResults: React.FC = () => {
  const route = useRoute<any>();
  const { origin, destination } = route.params
  
  return <View style={{ display: 'flex', justifyContent: 'space-between' }} >
    <View style={{ height: Dimensions.get('window').height - 400}}>
       <RouteMap origin={origin} destination={destination} />
      </View>
    <View style={{ height: 400 }}>
      <CarOptions />
    </View>
  </View>;
}

export default SearchResults;