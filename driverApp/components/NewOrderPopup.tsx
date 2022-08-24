import React from 'react';
import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// import { Container } from './styles';

const NewOrderPopup: React.FC = () => {
    const onDecline = () => {
        console.warn('on decline order')
    }

    const onAccept = () => {
        console.warn('on accept order')
    }
    return (
        <View style={styles.root}>
            <Pressable style={styles.declineButton} onPress={onDecline}>
                <Text style={styles.declineText}>Decline</Text>
            </Pressable>
            <Pressable onPress={onAccept} style={styles.popupContainer}>
                <View style={styles.row}>
                    <Text style={styles.carType}>UberX</Text>
                    <View style={styles.userBg}>
                        <FontAwesome name="user" color="lightgrey" size={30} />
                    </View>
                    <Text style={styles.carType}>
                        <AntDesign name="star" size={18} color="lightgrey" />
                        5
                    </Text>
                </View>
                <Text style={styles.minutes}>2 min</Text>
                <Text style={styles.distance}>0.2 mi</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        position: 'absolute',
        backgroundColor: '#000',
        bottom: 0,
        padding: 20,
        height: '100%',
        // justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center'
    },
    popupContainer: {
        backgroundColor: '#000',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: 250,
        width: 350,
        top: 320,
       
    },
    minutes: {
        color: 'lightgrey',
        fontSize: 25,
        
    },
    distance: {
        color: 'lightgrey',
        fontSize: 25
    },
    carType: {
        color: 'lightgrey',
        fontSize: 18,
        marginHorizontal: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userBg: {
        backgroundColor: '#008bff',
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 60
    },
    declineButton: {
        backgroundColor: '#000',
        padding: 20,
        borderRadius: 50,
        width: 100,
        alignItems: 'center',
        marginTop: 80,
        color: '#000',
        left: -120
    },
    declineText: {
        color: '#fff',
        fontWeight: 'bold',
    }
})

export default NewOrderPopup;