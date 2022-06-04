import React from 'react';
import { View } from 'react-native';
import CovidMessage from '../../components/CovidMessage/Index';
import HomeMap from '../../components/HomeMap';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation';
import HomeSearch from '../../components/HomeSearch';
import { HomeNavParamList } from '../../navigation/HomeNav';

// import { Container } from './styles';

type Props = NativeStackScreenProps<HomeNavParamList, 'HomeScreen'>;

const HomeScreen = ({ navigation }: Props): JSX.Element => {
    return (
        <View>
            <HomeMap />
            <CovidMessage />
            <HomeSearch onPress={() => navigation.navigate('DestinationSearch')} />
        </View>
    )
}
export default HomeScreen;