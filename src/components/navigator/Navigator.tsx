import React from 'react';

import {
    View,
    TouchableOpacity as Option,
    Text,
    Dimensions,
} from 'react-native';

import {
    AntDesign,
    Ionicons,
    Entypo,
    MaterialCommunityIcons
} from '@expo/vector-icons';

import Style from './Style';
import Colors from '../../styles/Colors';

import { useNavigation } from '@react-navigation/core';
import { useRoute } from '@react-navigation/native';

export default function Navigator() {
    const nav = useNavigation<any>();
    const route = useRoute<any>();

    const [option, setOption] = React.useState<number>(1);
    const [action, setAction] = React.useState<Boolean>(false);

    React.useEffect(() => {
        switch (route.name) {
            case 'Home':
                setOption(1);
                break;
            case 'Store':
                setOption(3)
                break;
            default:
                setOption(9)
        }
    }, [route.name])

    return (
        <>
            <View style={[Style.Movements, {display: action ? 'flex' : 'none'}]}>
                <Option style={[Style.Movement, {backgroundColor: '#F9182B', marginRight: 40}]} onPress={() => nav.navigate('Product', {type: 5})}>
                    <Entypo name='minus' size={Dimensions.get('window').width >= 500 ? 44 : 34} color={Colors.White} />
                </Option>
                <Option style={[Style.Movement, {backgroundColor: '#18F990',}]} onPress={() => nav.navigate('Product', {type: 4})}>
                    <Ionicons name='add' size={Dimensions.get('window').width >= 500 ? 44 : 34} color={Colors.White} />
                </Option>
            </View>
            <View style={Style.Navigator}>
                <Option style={Style.Option} activeOpacity={0.8} onPress={() => nav.navigate('Home')}>
                    <AntDesign name='home' size={34} color={option == 1 ? Colors.Red : Colors.Black} />
                    <Text style={
                            [
                                Style.Text,
                                {
                                    color: option == 1 ? Colors.Red : Colors.Black,
                                    fontFamily: option == 1 ? 'Bold' : 'SemiBold'
                                }
                            ]
                        }
                    >Início</Text>
                </Option>
                <Option style={Style.Action} activeOpacity={0.8} onPress={() => setAction(!action)}>
                    <View style={{transform: action ? [{rotateZ: '45deg'}] : [{rotateZ: '0deg'}]}}>
                        <Ionicons name='add' size={Dimensions.get('window').width >= 500 ? 60 : 44} color={Colors.White} />
                    </View>
                </Option>
                <Option style={Style.Option} activeOpacity={0.8} onPress={() => nav.navigate('Store')}>
                    <MaterialCommunityIcons name='store-outline' size={34} color={option == 3 ? Colors.Red : Colors.Black} />
                    <Text style={
                            [
                                Style.Text,
                                {
                                    color: option == 3 ? Colors.Red : Colors.Black,
                                    fontFamily: option == 3 ? 'Bold' : 'SemiBold'
                                }
                            ]
                        }
                    >Promoções</Text>
                </Option>
            </View>
        </>
    )
}