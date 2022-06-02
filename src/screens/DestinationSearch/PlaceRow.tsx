import { Entypo } from '@expo/vector-icons';
import React, { useState }  from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GooglePlaceData } from 'react-native-google-places-autocomplete';

// import { Container } from './styles';

interface Props {
    data: any
}


const PlaceRow: React.FC<Props> = ({ data }) => {
    return <View style={styles.row}>
        <View style={styles.container}>
            {data.description === 'Home'
                ? <Entypo name="home" size={20} color="#fff" />
                : <Entypo name="location-pin" size={20} color="#fff" />
            }
        </View>
        <Text style={styles.locationText}>{data.description || data.vicinity}</Text>
  </View>;
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    container: {
        backgroundColor: '#a2a2a2',
        padding: 5,
        borderRadius: 50,
        marginRight: 15,
    },
    locationText: {

    }
})

export default PlaceRow;