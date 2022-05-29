import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TextInput, StyleSheet } from 'react-native';
import { GooglePlaceData, GooglePlaceDetail, GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';



// import { Container } from './styles';

const DestinationSearch: React.FC = () => {
    const [fromText, setFromText] = useState<string>('');
    const [destinationText, setDestinationText] = useState<string>('');
    const [originPlace, setOriginPlace] = useState<any>(null);
    const [destinationPlace, setDestinationPlace] = useState(null);

    useEffect(() => {
        if (originPlace && destinationPlace) {
            console.warn('Redirect to results');
        }
    }, [originPlace, destinationPlace])
    
  return (
      <SafeAreaView>
          <TextInput
              placeholder="From"
              style={styles.textInput}
              value={fromText}
              onChangeText={setFromText}
          />
          <TextInput
              placeholder="Where to?"
              value={destinationText}
              onChangeText={setDestinationText}
              style={styles.textInput}   
          />
            <GooglePlacesAutocomplete
                placeholder='Search'
                onPress={(data: GooglePlaceData, details: GooglePlaceDetail | null = null) => {
                        setOriginPlace({data, details})
                        // 'details' is provided when fetchDetails = true
                        console.log(data, details);
                    }}
                fetchDetails
                query={{
                        key: 'AIzaSyD6nVVBjHCJDJHpzcH46Ra-8SBxSCBFhzo',
                        language: 'en',
                }}
            />
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
        marginVertical: 5
    }
})

export default DestinationSearch;