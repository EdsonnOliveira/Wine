import React from 'react';

import {
    View,
    Image,
    Text,
    TouchableOpacity as Touch
} from 'react-native';
import Modal from 'react-native-modal';
import { Button, ButtonText } from '../../components/button/Button';
import { useNavigation } from '@react-navigation/core';

import Bg from '../../img/BG.jpg';
import Apple from '../../img/custom/Apple.png';
import Google from '../../img/custom/Google.png';
import Facebook from '../../img/custom/Facebook.png';

import Style from './Style';
import Colors from '../../styles/Colors';

export default function Introduction() {
    const nav = useNavigation<any>();

    return (
        <View style={Style.Main}>
            <Image source={Bg} style={Style.Bg} />
            <Modal
                style={Style.Modal}
                isVisible={true}
            >
                <View style={Style.BoxModal}>
                    <Text style={Style.Title}>Entre com</Text>
                    <View style={Style.BoxSocial}>
                        <Touch style={Style.ButtonSocial} activeOpacity={0.8}>
                            <Image source={Apple} style={Style.Icon} />
                        </Touch>
                        <Touch style={Style.ButtonSocial} activeOpacity={0.8}>
                            <Image source={Google} style={Style.Icon} />
                        </Touch>
                        <Touch style={Style.ButtonSocial} activeOpacity={0.8}>
                            <Image source={Facebook} style={Style.Icon} />
                        </Touch>
                    </View>
                    <Text style={Style.Or}>ou</Text>
                    <View style={Style.BoxButton}>
                        <Button title='CADASTRE-SE' color={Colors.White} backgroundColor={Colors.Red} />
                    </View>
                    <ButtonText title='Fazer login' color={Colors.Black} textDecoration='underline' onPress={() => nav.navigate('Login')} />
                </View>
            </Modal>
        </View>
    )
}