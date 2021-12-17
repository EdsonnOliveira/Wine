import React from 'react';

import {
    TouchableOpacity as Button,
    View,
    Text,
    Image
} from 'react-native';

import {
    StyledProduct,
    StyledPromo
} from './Style';
import Colors from '../../styles/Colors';

import { useNavigation } from '@react-navigation/core';

interface ProductProps {
    title: String;
    stock: Number;
    image: any;
    backgroundColor: any;
    code: Number;
}

export function Product({title, stock, image, backgroundColor, code}:ProductProps) {
    const nav = useNavigation<any>();

    return (
        <Button style={StyledProduct.Main} activeOpacity={0.7} onPress={() => nav.navigate('Product', {code: code, type: 1})}>
            <View style={
                    [
                        StyledProduct.Background,
                        {
                            backgroundColor: backgroundColor != null ? backgroundColor : Colors.Red
                        }
                    ]
                }
            >
                <View style={StyledProduct.Stock}>
                    <Text style={StyledProduct.TextStock}>{ stock }</Text>
                </View>
                <Text style={StyledProduct.Name}>{ title }</Text>
            </View>
            <Image source={image} style={StyledProduct.Image} />
        </Button>
    )
}

interface PromoProps {
    title: String;
    description: String;
    color: any;
    image: any;
    backgroundColor: any;
    code: any;
    
    percentage: Number;
    colorPercetage: any;
    backgroundColorPercetage: any;
}

export function Promo({title, description, color, image, backgroundColor, code,
                       percentage, colorPercetage, backgroundColorPercetage}:PromoProps) {
    const nav = useNavigation<any>();

    return (
        <Button style={StyledPromo.Main} activeOpacity={0.7} onPress={() => nav.navigate('Product', {type: 1, code: code})}>
            <View style={
                    [
                        StyledPromo.Background,
                        {
                            backgroundColor: backgroundColor != null ? backgroundColor : Colors.Red
                        }
                    ]
                }
            >
                <View style={StyledPromo.Info}>
                    <View style={
                            [
                                StyledPromo.BoxPercetage,
                                {
                                    backgroundColor: backgroundColorPercetage != null ? backgroundColorPercetage : Colors.Orange
                                }
                            ]
                        }
                    >
                        <Text style={
                                [
                                    StyledPromo.Percetage,
                                    {
                                        color: colorPercetage != null ? colorPercetage : Colors.White
                                    }
                                ]
                            }
                        >{ percentage }% OFF</Text>
                    </View>
                    <Text style={[StyledPromo.Title, {color: color}]}>{ String(title).substr(0, 1).toUpperCase() + String(title).substr(1, 99) }</Text>
                    <Text style={[StyledPromo.Description, {color: color}]}>{ String(description).substr(0, 1).toUpperCase() + String(description).substr(1, 99) }</Text>
                </View>
                <Image source={{uri: image}} style={StyledPromo.Image} />
            </View>
        </Button>
    )
}