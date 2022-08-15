import React from 'react';
import { Dimensions, View, Text } from 'react-native';
import CarOptions from '../../components/CarOptions';
import RouteMap from '../../components/RouteMap';
import { useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeNavParamList } from '../../navigation/HomeNav';


type Props = NativeStackScreenProps<HomeNavParamList, 'SearchResults'>;

const SearchResults = ({ navigation }: Props): JSX.Element => {
  const route = useRoute<any>();
  const { originPlace, destinationPlace } = route.params
  
  return (
    <View style={{ display: 'flex' }} >
    <View style={{ height: Dimensions.get('window').height - 400,}}>
       <RouteMap origin={originPlace} destination={destinationPlace} />
    </View>
     <View style={{ height: 500, alignItems: 'center' }}>
      <CarOptions />
     </View> 
  </View>
  )
}

export default SearchResults;