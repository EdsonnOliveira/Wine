import React from 'react';

import {
    Text,
    View,
    TextInput,
    FlatList,
    TouchableOpacity as Touch
} from 'react-native';

import {
    StyledInput,
    StyledInputColors,
    StyledTextArea
} from './Style';

import Colors from '../../styles/Colors';

interface InputProps {
    title?: String;
    legend?: String;

    textAlign?: any;

    placeholder?: any;
    keyboardType?: any;
    value?: any;
    secureTextEntry?: any;
}

export function Input({title, legend, textAlign, placeholder, keyboardType, value, secureTextEntry}:InputProps) {
    return (
        <View style={StyledInput.Main}>
            { title && <Text style={StyledInput.Title}>{ title }</Text> }
            <View style={StyledInput.Container}>
                <Text style={StyledInput.Legend}>{ legend }</Text>
                <TextInput style={
                                    [
                                        StyledInput.Input,
                                        {
                                            textAlign: textAlign
                                        }
                                    ]
                                }
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    value={value}
                    secureTextEntry={secureTextEntry}
                />
            </View>
        </View>
    )
}

interface InputColorsProps {
    title?: String;
}

export function InputColors({title}:InputColorsProps) {
    const data = [
        {
            id: 0,
            color: Colors.Red
        },
        {
            id: 1,
            color: Colors.Black
        },
        {
            id: 2,
            color: Colors.White
        },
        {
            id: 3,
            color: Colors.Orange
        },
        {
            id: 4,
            color: Colors.Blue
        }
    ]

    return (
        <View style={StyledInputColors.Main}>
            { title && <Text style={StyledInputColors.Title}>{ title }</Text> }
            <View style={StyledInputColors.Container}>
                <FlatList
                    data={data}
                    renderItem={
                        ({item}) => (
                            <Touch style={
                                    [
                                        StyledInputColors.Item,
                                        {
                                            backgroundColor: item.color,
                                        }
                                    ]
                                }
                                activeOpacity={0.7}
                            >

                            </Touch>
                        )
                    }
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

interface TextAreaProps {
    title: String;

    textAlign?: any;

    placeholder?: any;
    value?: any;
}

export function TextArea({title, textAlign, placeholder, value}:TextAreaProps) {
    return (
        <View style={StyledTextArea.Main}>
            { title && <Text style={StyledTextArea.Title}>{ title }</Text> }
            <View style={StyledTextArea.Container}>
                <TextInput style={
                                    [
                                        StyledTextArea.Input,
                                        {
                                            textAlign: textAlign,
                                            lineHeight: -50
                                        }
                                    ]
                                }
                    placeholder={placeholder}
                    value={value}
                />
            </View>
        </View>
    )
}