import React from 'react';
import { Dimensions, View } from 'react-native';
import CarOptions from '../../components/CarOptions';
import RouteMap from '../../components/RouteMap';


// import { Container } from './styles';

const SearchResults: React.FC = () => {
  return <View style={{ display: 'flex', justifyContent: 'space-between' }} >
    <View style={{ height: Dimensions.get('window').height - 400}}>
       <RouteMap />
      </View>
    <View style={{ height: 400 }}>
      <CarOptions />
    </View>
  </View>;
}

export default SearchResults;