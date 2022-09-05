import React from 'react';
import { StyleSheet, View, Text, Image, Pressable, Dimensions } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


interface Props {
    newOrder: any;
    onDecline: () => void;
    onAccept: () => void;
    duration: string;
    distance: string;

}

const NewOrderPopup: React.FC<Props> = ({ onAccept, onDecline, newOrder, distance, duration }) => {

    return (
        <View style={styles.layout}>
            <View style={styles.root}>
                <Pressable style={styles.declineButton} onPress={onDecline}>
                    <Text style={styles.declineText}>Decline</Text>
                </Pressable>
                <Pressable onPress={onAccept} style={styles.popupContainer}>
                    <View style={styles.row}>
                        <Text style={styles.carType}>{newOrder.type}</Text>
                        <View style={styles.userBg}>
                            <FontAwesome name="user" color="lightgrey" size={30} />
                        </View>
                        <Text style={styles.carType}>
                            <AntDesign style={{ marginRight: 5 }} name="star" size={18} color="lightgrey" />
                            {newOrder.user.rating}
                        </Text>
                    </View>
                    <Text style={styles.minutes}>{duration}min</Text>
                    <Text style={styles.distance}>{distance}mi</Text>
                </Pressable>
            </View>
        </View>
    );
}

const wp = Dimensions.get('window').width;
const hp = Dimensions.get('window').height;

const styles = StyleSheet.create({
    layout: {
        backgroundColor: '#00000099',
        padding: 20,
        height: hp,
        width: wp,
        position: 'absolute',
    },
    root: {
        position: 'absolute',
        width: wp,
        justifyContent: 'center',
        alignItems: 'center'
    },
    popupContainer: {
        backgroundColor: '#000',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: 250,
        width: wp - 40,
        top: 400,

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
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: 40,
        width: 100,
        top: 80,
        left: -120,
    },
    declineText: {
        color: '#fff',
        fontWeight: 'bold',
    }
})

export default NewOrderPopup;