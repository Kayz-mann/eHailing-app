/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */

import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, Pressable } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Icon from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import NewOrderPopup from '../components/NewOrderPopup';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { getCar, listOrders } from '../src/graphql/queries';
import { updateCar } from '../src/graphql/mutation';


interface Props {
  origin: any;
  destination: any;
}

// const origin = { latitude: 28.3318456, longitude: -16.0296002 }
// const destination = { latitude: 37.7718456, longitude: -122.5296002}


const GOOGLE_MAPS_APIKEY = 'AIzaSyD6nVVBjHCJDJHpzcH46Ra-8SBxSCBFhzo';

// const HomeScreen = (): JSX.Element => {
const HomeScreen: React.FC<Props> = ({ origin, destination }) => {
  const [car, setCar] = useState<any>(null);
  const [isOnline, setIsOnline] = useState<boolean>(false);
  const [driverPosition, setDriverPosition] = useState<any>(null);
  const [order, setOrder] = useState<any>(null);
  const [newOrder, setNewOrder] = useState<any>([
  //   {
  //   id: '1',
  //   type: 'BMW',
  //   originLatitiude: '37.3318056',
  //   originLongitude: '-16.263845',
  //   destinationLatitude: '28.450927',
  //   destinationLongitude: '32.45554',
  //   user: {
  //     rating: 4.8,
  //     name: 'Kay'
  //   }
  // },
  // {
  //   id: '2',
  //   type: 'UberXL',
  //   originLatitiude: '37.3318056',
  //   originLongitude: '-16.263845',
  //   destinationLatitude: '28.450927',
  //   destinationLongitude: '32.45554',
  //   user: {
  //     rating: 4.2,
  //     name: 'Kay'
  //   }
  // }
]);

  // fetch the car daa from the backend
  const fetchCar = async () => {
    try {
      const userData = await Auth.currentAuthenticatedUser();
      const carData: any = await API.graphql(
        graphqlOperation(getCar, { id: userData.attributes.sub }))
      setCar(carData.data.getCar);
      console.log(carData)
    } catch (e) {
      console.log(e);
    }
  }

  const fetchOrders = async () => {
    try{
      const ordersData: any = await API.graphql(
        graphqlOperation(
          listOrders,
        )
      );
      console.log(ordersData);
      setNewOrder(ordersData.data.listOrders.items);
    }catch(e){
      console.log(e);
    }
  }

  const onAccept = () => {
    setOrder(newOrder);
    setNewOrder(newOrder.slice(1));//accept function and perform task
  }

  const onDecline = () => {
    
    // remove first element from array onDecline function
    setNewOrder(newOrder.slice(1));
  }

  const goPress = async () => {
    // setIsOnline(!isOnline);
    // update car and setActive
    try {
      const userData = await Auth.currentAuthenticatedUser();
      const input = {
        id: userData.attributes.sub,
        isActive: !userData.isActive,
      }
      const updatedCarData: any = await API.graphql(
        graphqlOperation(updateCar, { input })
      )
      setCar(updatedCarData.data.updateCar)
      console.log(updatedCarData);
    } catch (e){
      console.log(e);
    }
  }


  const onLocationChange = async ({ event }: any) => {
    setDriverPosition(event.nativeEvent.coordinate);
    const { latitude,longitude, heading } = event.nativeEvent.coordinate;
    try{
      const userData = await Auth.currentAuthenticatedUser();
      const input = {
        id: userData.attributes.sub,
        latitude,
        longitude,
        heading,
      }
      const updatedCarData: any = await API.graphql(
        graphqlOperation(updateCar, { input })
      )
      setCar(updatedCarData.data.updateCar);

    }catch (e){
      console.log(e);
    }
  }

  const onDirectionFound = ({ event }: any) => {
    if (order) {
      setOrder({
        ...order,
        distance: event.distance,
        duration: event.duration,
        pickedUp: order.pickedUp || event.distance < 0.2,
        isFinished: order.pickedUp && event.distance < 0.2,
      })

    }
  }

  const getDestination = () => {
    if (order && order.pickedUp) {
      return {
        latitude: Number(order.destinationLatitude),
        longitude: Number(order.destinationLongitude)
      }
    }
    return {
      latitude: Number(order.originLatitude),
      longitude: Number(order.originLongitude)
    }
  }

  useEffect(() => {
    fetchCar();
    fetchOrders();
  }, []);



  const renderBottomTitle = () => {
    if (order && order.isFinished) {
      return (
        <View style={{ alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'red', justifyContent: 'center', width: 200, padding: 10 }}>
            <Text style={{ color: '#fff', fontWeight: 'bold' }}>COMPLETE{order.type.toUpperCase()}min</Text>
          </View>

          <Text style={styles.bottomText}> {order.user.username}</Text>
        </View>
      )
    }
    if (order && order.pickedUp) {
      return (
        <View style={{ alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>{order.duration ? order.duration.toFixed(1) : ''}min</Text>
            <View style={{ backgroundColor: '#d41212', marginHorizontal: 10, width: 30, height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}>
              <FontAwesome name={'user'} color="#fff" size={20} />
            </View>
            <Text>{order.distance ? order.distance.toFixed(1) : ''}mi</Text>
          </View>

          <Text style={styles.bottomText}>Dropping off {order.user.username}</Text>
        </View>
      )
    }
    if (order) {
      console.log(order);
      return (
        <View style={{ alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>{order.duration ? order.duration : ''}min</Text>
            <View style={{ backgroundColor: '#1e9203', marginHorizontal: 10, width: 30, height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}>
              <FontAwesome name={'user'} color="#fff" size={20} />
            </View>
            <Text>{order.distance ? order.distance.toFixed(1) : ''}mi</Text>
          </View>

          <Text style={styles.bottomText}>Picking up {order.user.username}</Text>
        </View>
      )
    }
    if (car?.isActive) {
      return (
        <Text style={styles.bottomText}>You're online</Text>
      )
    }
    return <Text style={styles.bottomText}>You're offline</Text>
  }

  return (
    <View style={{ flex: 1, }}>
      <MapView
        // eslint-disable-next-line react-native/no-inline-styles
        style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height - 120 }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        onMapLoaded={onDirectionFound}
        onUserLocationChange={onLocationChange}
        initialRegion={{
          latitude: 28.450627,
          longitude: -16.263045,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0121,
        }}
      >
        {order && (
          <MapViewDirections
            // origin={driverPosition}
            origin={
              {
                latitude: car?.latitude,
                longitude: car?.longitude,
              }
            }
            onReady={onDirectionFound}
            destination={getDestination()}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={5}
            strokeColor="black"
          />
        )}
      </MapView>
      <Pressable
        onPress={() => console.warn('Hey')}
        style={[styles.balanceButton, { top: 10, right: 20, flexDirection: 'row' }]}>
        <Text style={{ color: '#4a4a4a', fontWeight: 'bold' }}>$</Text>
        <Text style={{ color: '#fff', marginLeft: 5, fontWeight: 'bold' }}>0.00</Text>
      </Pressable>
      <Pressable
        onPress={() => console.warn('Hey')}
        style={[styles.roundButton, { top: 10, left: 10 }]}>
        <Icon name={'menu'} size={24} color="#4a4a4a" />
      </Pressable>
      <Pressable
        onPress={() => console.warn('Hey')}
        style={[styles.roundButton, { top: 10, right: 10 }]}>
        <Icon name={'menu'} size={24} color="#4a4a4a" />
      </Pressable>
      <Pressable
        onPress={() => console.warn('Hey')}
        style={[styles.roundButton, { top: 620, left: 10 }]}>
        <Icon name={'menu'} size={24} color="#4a4a4a" />
      </Pressable>
      <Pressable
        onPress={() => console.warn('Hey')}
        style={[styles.roundButton, { top: 620, right: 10 }]}>
        <Icon name={'menu'} size={24} color="#4a4a4a" />
      </Pressable>
      <Pressable
        onPress={goPress}
        style={[styles.goButton, { top: 580, right: 10 }]}>
        <Text style={styles.goText}>
          {
            car?.isActive ? 'END' : 'GO'
          }
        </Text>
      </Pressable>
      <View style={styles.bottomContainer}>
        <TouchableOpacity activeOpacity={0.6}>
          <Icon name={'menu'} size={20} color="#4a4a4a" />
        </TouchableOpacity>
        {renderBottomTitle()}
        <TouchableOpacity activeOpacity={0.6}>
          <Icon name={'menu'} size={20} color="#4a4a4a" />
        </TouchableOpacity>
      </View>
      {
        newOrder.length > 0 && !order && (
          <NewOrderPopup
            newOrder={newOrder[0]}
            distance={'2'}
            duration={'0.5'}
            onDecline={onDecline}
            onAccept={() => onAccept()}
          />
        )
      }
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
    left: Dimensions.get('window').width / 2 - 37,
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
    left: Dimensions.get('window').width / 2 - 37,
  }

})
export default HomeScreen;