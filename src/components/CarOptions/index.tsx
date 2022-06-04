import React from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';

import typesData from '../../../assets/data/types';
import CarOptionsRow from '../CarOptionsRow';

const CarOptions: React.FC = () => {
    const confirm = () => {
        
    }

    return <View>
        {typesData.map((item) => {
            <CarOptionsRow
                key={item.id}
                type={item.type}
                price={item.price}
                duration={item.duration}
            />
        })}
        <Pressable
            onPress={confirm}
            style={styles.button}
        >
            <Text style={styles.text}>
                Confirm Uber
            </Text>
        </Pressable>
  </View>;
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        backgroundColor: '#000',
        padding: 10,
        margin: 10,
        alignItems: 'center'
    },
    text: {
        color: '#fff',
        fontWeight: 'bold'
    }
})

export default CarOptions;