import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

// import { Container } from './styles';

const HomeSearch: React.FC = () => {
    return (
        <View>
            <View style={styles.inputBox}>
                <Text style={styles.inputText}>Where To?</Text>
                <View style={styles.timeContainer}>
                    <AntDesign name={'clockcircle'} size={16} color="#535353" />
                    <Text>Now</Text>
                    <MaterialIcons name="keyboard-arrow-down" size={16} color="black" />
                </View>
                <View style={styles.row}>
                    <View style={styles.iconContainer}>
                        <AntDesign name={'clockcircle'} size={20} color="#fff" />
                    </View>
                    <Text>Spin Nightclub</Text>
                </View>
            </View>
      </View>
  );
}

const styles = StyleSheet.create({
    inputBox: {
        backgroundColor: '#b0b0b0',
        margin: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    inputText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#6e6e6e'
    },
    timeContainer: {
        flexDirection: 'row',
        width: 70,
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 30
    },
    row: {
       flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
       borderColor: '#dbdbdb',
    },
    iconContainer: {
        backgroundColor: '#b3b3b3',
        padding: 10,
        borderRadius: 25,
    },
    destinationText: {
        marginLeft: 10,
        fontWeight: '500',
        fontSize: 15
    }
})

export default HomeSearch;