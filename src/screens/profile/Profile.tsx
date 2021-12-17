import React from 'react';

import {
    View,
    TouchableOpacity as Touch,
    Image,
    FlatList,
    Text,
} from 'react-native';
import {
    Title
} from '../../components/header/Header';
import Container from '../../components/container/Container';
import { useNavigation } from '@react-navigation/core';

import iconUsers from '../../img/custom/iconConfiguration.png';
import Notification from '../../img/custom/Notification.png';

import Style from './Style';

export default function Profile() {
    const nav = useNavigation<any>();

    const data = [
        {
            id: 0,
            image: iconUsers,
            name: 'Usuários',
        },
        {
            id: 1,
            image: iconUsers,
            name: 'Sair'
        }
    ]

    return (
        <Container>
            <View style={Style.Top}>
                <Title value='Configurações' />
                <Touch style={Style.ButtonNotification} onPress={() => nav.navigate('Notification')}>
                    <Image source={Notification} style={Style.ImageNotification} />
                </Touch>
            </View>
            <FlatList
                data={data}
                contentContainerStyle={Style.List}
                renderItem={
                    ({item}) => (
                        <Touch style={Style.Item} activeOpacity={0.7}>
                            <Image source={ item.image } style={Style.ImageItem} />
                            <Text style={Style.TextItem}>{ item.name }</Text>
                        </Touch>
                    )
                }
            />
        </Container>
    )
}