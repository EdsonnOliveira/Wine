import React from 'react';

import {
    SafeAreaView as SafeArea,
    Image,
    View,
    ActivityIndicator,
    Text
} from 'react-native';

import Logo from '../../assets/LOGO.png';

import Style from './Style';
import Colors from '../../styles/Colors';

export default function Loading() {
    return (
        <SafeArea style={Style.Main}>
            <Image source={Logo} style={Style.Logo} />
            <View>
                <ActivityIndicator size='large' color={Colors.Red} />
                <Text style={Style.Title}>Carregando Aplicação, aguarde.</Text>
            </View>
        </SafeArea>
    )
}