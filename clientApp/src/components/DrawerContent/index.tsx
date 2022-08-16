import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import React from 'react';
import { Pressable, View, Text } from 'react-native';
import { Auth } from 'aws-amplify'

interface Props {
    email: string;
} 


const DrawerContent: React.FC<Props> = (props, { email }) => {
    let user = Auth.currentAuthenticatedUser();
    return (
        <DrawerContentScrollView {...props}>
            <View style={{ backgroundColor: '#212121', padding: 15 }}>
                <View style={{ 
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <View
                        style={{
                            backgroundColor: '#cacaca',
                            width: 40,
                            height: 40,
                            borderRadius: 25,
                            marginRight: 10
                        }}
                    />
                </View>
                <View>
                    <Text style={{ color: '#fff', fontSize: 24 }}>
                        Kayode Balogun
                        {/* {user.email} */}
                    </Text>
                    <Text style={{ color: 'lightgrey'}}>5.00 *</Text>
                </View>
                <View
                    style={{
                        borderTopWidth: 1,
                        borderBottomWidth: 1,
                        borderTopColor: '#919191',
                        borderBottomColor: '#919191',
                        paddingVertical: 5,
                        marginVertical: 10,
                    }}
                >
                    <Pressable>
                        <Text
                            style={{ color: '#dddddd', paddingVertical: 5 }}
                            onPress={() => {}}
                        >
                            Messages
                        </Text>
                    </Pressable>
                </View>
                <Pressable>
                    <Text
                        style={{ color: '#dddddd', paddingVertical: 5 }}
                        onPress={() => {}}
                    >
                        Do more with your account
                    </Text>
                </Pressable>
                <Pressable>
                    <Text
                        style={{ color: '#fff', paddingVertical: 5 }}
                        onPress={() => {}}
                    >
                        Make money driving
                    </Text>
                </Pressable>
            </View>
            <Pressable onPress={() => {Auth.signOut()}}>
                    <Text
                        style={{ color: '#fff', paddingVertical: 5, paddingLeft: 20 }}
                    >
                        Logout
                    </Text>
                </Pressable>
                <Pressable></Pressable>
        </DrawerContentScrollView>
    );
}

export default DrawerContent;