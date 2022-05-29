import React from 'react';
import { View } from 'react-native';
import CovidMessage from '../../components/CovidMessage/Index';
import HomeMap from '../../components/HomeMap';
import HomeSearch from '../../components/HomeSearch';

// import { Container } from './styles';

const HomeScreen: React.FC = () => {
    return (
        <View>
            <HomeMap />
            <CovidMessage />
            <HomeSearch />
        </View>
    )
}
export default HomeScreen;