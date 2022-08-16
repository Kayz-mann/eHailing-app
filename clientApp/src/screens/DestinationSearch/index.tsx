import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TextInput, StyleSheet, View } from 'react-native';
import { DescriptionRow, GooglePlaceData, GooglePlaceDetail, GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import { HomeNavParamList } from '../../navigation/HomeNav';
import PlaceRow from './PlaceRow';





type Props = NativeStackScreenProps<HomeNavParamList, 'DestinationSearch'>;

const DestinationSearch = ({ navigation }: Props): JSX.Element => {
    const [originPlace, setOriginPlace] = useState<any>(null);
    const [destinationPlace, setDestinationPlace] = useState<any>(null);

    const homePlace = {
        description: 'Home',
        geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }
    };
    
    const workPlace = {
        description: 'Work',
        geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }
    };




    const nextStack = () => {
        if (originPlace && destinationPlace) {
            navigation.navigate('SearchResults', {
                originPlace,
                destinationPlace
            })
        }
    }

    useEffect(() => {
        nextStack();
    }, [originPlace, destinationPlace])


    
  return (
      <View style={{ marginTop: 50 }}>
            <GooglePlacesAutocomplete
                placeholder='Where from?'
                onPress={(data: GooglePlaceData, details: GooglePlaceDetail | null = null) => {
                        setOriginPlace({ data, details})
                        // 'details' is provided when fetchDetails = true
                        console.log(data, details);
                    }}
                fetchDetails
                query={{
                        key: 'AIzaSyD6nVVBjHCJDJHpzcH46Ra-8SBxSCBFhzo',
                        language: 'en',
              }}
              suppressDefaultStyles
              enablePoweredByContainer={false}
              currentLocation={true}
              currentLocationLabel="Current Location"
              styles={{
                  textInput: styles.textInput,
                  container: {
                      position: 'absolute',
                      top: 10,
                      left: 10,
                      right: 10,
                      height: 30
                  },
                  listView: styles.listView,
                  separator: styles.separator
              }}
            />
            <GooglePlacesAutocomplete
                placeholder='Where to?'
                onPress={(data: GooglePlaceData, details: GooglePlaceDetail|null = null) => {
                        setDestinationPlace({ data, details })
                        // 'details' is provided when fetchDetails = true
                        //setOriginPlace({data, details})
                        console.log(data, details);
                    }}
                fetchDetails
                query={{
                        key: 'AIzaSyD6nVVBjHCJDJHpzcH46Ra-8SBxSCBFhzo',
                        language: 'en',
                    }}
                    renderRow={(data: GooglePlaceData) => <PlaceRow data={data} />}
                    renderDescription={(data: DescriptionRow) => data.description }  //||vicinity
                    predefinedPlaces={[homePlace, workPlace]}
                    suppressDefaultStyles
                    enablePoweredByContainer={false}
                    styles={{
                        textInput: styles.textInput,
                        container: {
                            position: 'absolute',
                            top: 65,
                            left: 10,
                            right: 10,


                        },
                        separator: styles.separator
                    }}
                />
          <View style={styles.circle} />
          <View style={styles.line} />
          <View style={styles.square} />
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        // height: '100%'
    },
    textInput: {
        height: 50,
        backgroundColor: '#eee',
        marginVertical: 5,
        marginLeft: 20,
        paddingHorizontal: 8,
    },
    separator: {
        backgroundColor: '#cecece',
        marginVertical: 13,
        height: 1
    },
    listView: {
        position: 'absolute',
        top: 100,
        paddingTop: 40,
        height: 200,
    },
    circle: {
        width: 5,
        height: 5,
        backgroundColor: '#000',
        position: 'absolute',
        top: 20,
        left: 15,
        borderRadius: 5,
    },
    line: {
        width: 1,
        height: 75,
        backgroundColor: '#919191',
        position: 'absolute',
        top: 25,
        left: 17
    },
    square: {
        width: 5,
        height: 5,
        backgroundColor: '#000',
        position: 'absolute',
        top: 100,
        left: 15
    }
})

export default DestinationSearch;