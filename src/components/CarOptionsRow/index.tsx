import React from 'react';
// import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, Image, Text } from 'react-native';


interface Props {
    type: string;
    price: number;
    duration: number;
}


const CarOptionsRow: React.FC<Props> = ({ price, type, duration }) => {
    const getImage = () => {
        if (type === 'UberX') {
            return require('../../../assets/images/UberX.jpeg')
        }
        if (type === 'Comfort') {
            return require('../../../assets/images/Comfort.jpeg')
        }
        return require('../../../assets/images/top-UberXL.png')
    }
    
    return (
        <View style={styles.container}>
        <Image
            style={styles.image}
            source={getImage()}
        />
        <View style={styles.middleContainer}>
            <Text style={styles.title}>
                {type}
            </Text>
            {/* <Ionicons name="person" size={12} /> */}
            <Text style={styles.title}>
                3
            </Text>
            <Text style={styles.time}>
                8:03PM drop off
            </Text>
        </View>
        <View style={styles.rightContainer}>
            {/* <Ionicons name="pricetag" size={19} color="#42d742" /> */}
            <Text style={styles.price}>ext. ${price}</Text>
        </View>
  </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20
    },
    image: {
        height: 70,
        width: 50,
        resizeMode: 'contain',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },
    middleContainer: {
        flex: 1,
        paddingHorizontal: 10,
        marginBottom: 5
    },
    time: {
        color: '#5d5d5d'
    },
    rightContainer: {
        width: 100,
        justifyContent: 'flex-end',
        flexDirection:'row'
    },
    price: {
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 5
    }
})

export default CarOptionsRow;