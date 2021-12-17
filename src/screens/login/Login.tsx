import React from 'react';

import Logo from '../../img/Logo.png';
import {
    SafeAreaView as Main,
    ScrollView as Scroll,
    View,
    Image
} from 'react-native';
import { Input } from '../../components/input/Input';
import { Button } from '../../components/button/Button';

import Bg from '../../img/BG.jpg';

import Style from './Style';
import Colors from '../../styles/Colors';

export default function Login() {
    return (
        <Main style={Style.Main}>
             <Scroll keyboardShouldPersistTaps='handled'>
                <View style={{alignItems: 'center', marginTop: 50}}>
                    <Image source={Logo} style={Style.Logo} />
                </View>
                <View style={Style.Input}>
                    <Input title='Usuário' placeholder='Seu usuário' />
                </View>
                <View style={Style.Input}>
                    <Input title='Senha' placeholder='Sua senha' secureTextEntry={true} />
                </View>
                <View style={[Style.Input, {height: 55}]}>
                    <Button title='ENTRAR' color={Colors.White} backgroundColor={Colors.Red} />
                </View>
            </Scroll>
        </Main>
    )
}