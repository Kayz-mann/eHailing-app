import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { FC } from 'react'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen';
import BurgerMenuIcon from '../../svg/BurgerMenuIcon';


const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
        height: hp(7),
        justifyContent: 'center',
        width: wp(100),
      },

    burgerContainer: {
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 10,
    }
})

interface Props {
    burger?: () => void;
    icon?: React.ReactNode;

}

const StackHeader: FC<Props> = ({ burger }) => {
  return (
    <View>
          {burger && (
              <TouchableOpacity onPress={burger} style={styles.burgerContainer}>
                  <BurgerMenuIcon />
              </TouchableOpacity>
      )}
    </View>
  )
}

export default StackHeader