import React, {useState} from 'react';
import { Dimensions, View, Text, Alert } from 'react-native';
import CarOptions from '../../components/CarOptions';
import RouteMap from '../../components/RouteMap';
import { useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeNavParamList } from '../../navigation/HomeNav';
import { API, Auth, graphqlOperation, input } from 'aws-amplify';
import { createOrder } from '../../graphql/mutations'


type Props = NativeStackScreenProps<HomeNavParamList, 'SearchResults'>;

const SearchResults = ({ navigation }: Props): JSX.Element => {
  const typeState = useState();
  const route = useRoute<any>();
  const { originPlace, destinationPlace } = route.params;
  const onSubmit = async () => {
    const [type] = typeState;
    if (!type){
      return;
    }
    try {
      const userInfo = await Auth.currentAuthenticatedUser();
      const date = new Date();
      const input ={
        type,
        originLatitude: originPlace.details.geometry.location.lat,
        originLongitude: originPlace.details.geometry.location.lng,
        destinationLatitude: destinationPlace.details.geometry.location.lat,
        destinationLongitude: destinationPlace.details.geometry.location.lng,
        userId: userInfo.attributes.sub ,
        carId: "1",
        createdAt: date.toISOString(),
      }
    const response = await API.graphql(
      graphqlOperation(
        createOrder, {
          input: input
        }
      )
    )
    console.log(response)
      Alert.alert(
        "Message created",
        // button: [{
        //   text: "Go home",
        //   onPress: () => navigation.navigate('HomeScreen')   }]
      )
    } catch (e: any) {
      console.error(e)
    }
  }
  
  return (
    <View style={{ display: 'flex' }} >
    <View style={{ height: Dimensions.get('window').height - 400,}}>
       <RouteMap origin={originPlace} destination={destinationPlace} />
    </View>
     <View style={{ height: 500, alignItems: 'center' }}>
      <CarOptions typeState={typeState} onSubmit={onSubmit} />
     </View> 
  </View>
  )
}

export default SearchResults;