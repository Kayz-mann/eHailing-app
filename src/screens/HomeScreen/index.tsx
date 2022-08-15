import React from 'react';
import { View, Text } from 'react-native';
import CovidMessage from '../../components/CovidMessage/Index';
import HomeMap from '../../components/HomeMap';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import HomeSearch from '../../components/HomeSearch';
import { HomeNavParamList } from '../../navigation/HomeNav';
import CarOptions from '../../components/CarOptions';
import StackHeader from '../../components/StackHeader';
import navigation from '../../navigation';
import { DrawerActions } from '@react-navigation/native';

// import { Container } from './styles';

type Props = NativeStackScreenProps<HomeNavParamList, 'HomeScreen'>;

const HomeScreen = ({ navigation }: Props): JSX.Element => {
    return (
        <View>
            <View style={{ position: 'absolute', marginTop: 40, zIndex: 999 }}>
            <StackHeader
                burger={() => navigation.dispatch(DrawerActions.openDrawer())}
                />
            </View>
            <HomeMap />
            <CovidMessage />
            <HomeSearch onPress={() => navigation.navigate('DestinationSearch')} />
        </View>
    )
}
export default HomeScreen;