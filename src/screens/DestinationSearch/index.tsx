import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TextInput, StyleSheet, View } from 'react-native';
import { DescriptionRow, GooglePlaceData, GooglePlaceDetail, GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { RootStackParamList } from '../../navigation';
import { HomeNavParamList } from '../../navigation/HomeNav';
import PlaceRow from './PlaceRow';



const homePlace = {
    description: 'Home',
    geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }
};

const workPlace = {
    description: 'Work',
    geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }
};

type Props = NativeStackScreenProps<HomeNavParamList, 'DestinationSearch'>;

const DestinationSearch = ({ navigation }: Props): JSX.Element => {
    const [originPlace, setOriginPlace] = useState<any>(null);
    const [destinationPlace, setDestinationPlace] = useState(null);

    useEffect(() => {
        nextStack();
    }, [originPlace, destinationPlace])


    const nextStack = () => {
        if (originPlace && destinationPlace) {
            navigation.navigate('SearchResults', {
                originPlace,
                destinationPlace
            })
        }
    }


    
  return (
      <SafeAreaView>
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
                      right: 10
                  },
                  listView: styles.listView,
                  separator: styles.separator
              }}
            />
            <GooglePlacesAutocomplete
                placeholder='Where to?'
                onPress={(data: GooglePlaceData, details: GooglePlaceDetail | null = null) => {
                        setOriginPlace({ data, details })
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
                            top: 55,
                            left: 10,
                            right: 10

                        },
                        separator: styles.separator
                    }}
                />
          <View style={styles.circle} />
          <View style={styles.line} />
          <View style={styles.square} />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        height: '100%'
    },
    textInput: {
        height: 50,
        backgroundColor: '#eee',
        marginVertical: 5,
        marginLeft: 20,
    },
    separator: {
        backgroundColor: '#efefef',
        height: 1
    },
    listView: {
        position: 'absolute',
        top: 100
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
        height: 50,
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
        top: 80,
        left: 15
    }
})

export default DestinationSearch;