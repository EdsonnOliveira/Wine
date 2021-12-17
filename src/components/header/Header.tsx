import React from 'react';

import {
    SafeAreaView as SafeArea,
    View,
    TouchableOpacity as Button,
    Text,
    Image
} from 'react-native';
import { useNavigation } from '@react-navigation/core';

import UserImage from '../../img/custom/User.png';
import NotificationImage from '../../img/custom/Notification.png';

import {
    Style,
    StyleText
} from './Style';

interface HeaderProps {
    title?: any;
}

export function Header({title}: HeaderProps) {
    const nav = useNavigation<any>();

    return (
        <SafeArea style={Style.Main}>
            <View style={Style.User}>
                <Button style={Style.BoxImage} activeOpacity={0.7} onPress={() => nav.navigate('Profile')}>
                    <Image source={UserImage} style={{width: '100%', height: '100%'}} />
                </Button>
                <Button style={[Style.BoxImage, {alignItems: 'center'}]}  activeOpacity={0.7} onPress={() => nav.navigate('Notification')}>
                    <Image source={NotificationImage} style={{width: 30, height: 30}} />
                </Button>
            </View>
            <Text style={Style.Title}>
                <Text style={{fontFamily: 'Bold'}}>Olá, </Text>
                <Text>Edson!</Text>
            </Text>
        </SafeArea>
    )
}

interface TitleProps {
    value: String;
}

export function Title({value}: TitleProps) {
    return <Text style={StyleText.Title}>{ value }</Text>
}

interface SubTitleProps {
    value: String;
}

export function SubTitle({value}: SubTitleProps) {
    return <Text style={StyleText.SubTitle}>{ value }</Text>
}