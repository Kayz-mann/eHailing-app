import React, { useEffect, useState } from 'react';
import { Pressable, View, Text, StyleSheet, ScrollView } from 'react-native';

import typesData from '../../../assets/data/types';
import CarOptionsRow from '../CarOptionsRow';

const CarOptions: React.FC = () => {
    // const [data, setData] = useState()
    const confirm = async () => {
        
    }


    return (
        <ScrollView>
          <View style={{ alignItems: 'center', width: '100%', marginTop: 10 }}>
                {typesData.map((type) => {
                    <CarOptionsRow
                        key={type.id}
                        type={type.type}
                        price={type.price}
                        duration={type.duration}
                    />
                })}
         </View>
        <Pressable
            onPress={confirm}
            style={styles.button}
        >
            <Text style={styles.text}>
                Confirm Uber
            </Text>
        </Pressable>
  </ScrollView>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 343,
        height: 43,
        backgroundColor: '#000',
        padding: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        alignItems: 'center',
    }
})

export default CarOptions;


