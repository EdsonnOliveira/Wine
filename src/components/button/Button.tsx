import React from 'react';

import {
    TouchableOpacity as Touch,
    Text,
} from 'react-native';

import {
    StyledButton,
    StyleButtonText
} from './Style';

interface ButtonProps {
    title: any;
    color: any;
    backgroundColor: any;

    onPress: any;
}

export function Button({title, color, backgroundColor,
                         onPress}:ButtonProps) {
    return (
        <Touch style={
                [
                    StyledButton.Button,
                    {
                        backgroundColor: backgroundColor,
                    }
                ]
            }
        >
            <Text style={
                    [
                        StyledButton.Text,
                        {
                            color: color
                        }
                    ]
                }
            >{ title }</Text>
        </Touch>
    )
}

interface ButtonTextProps {
    title?: any;
    color: any;
    backgroundColor?: any;

    onPress: any;

    textDecoration?: any;
}

export function ButtonText({title, color, backgroundColor,
                            onPress,
                            textDecoration}:ButtonTextProps) {
    return (
        <Touch style={
                [
                    StyleButtonText.Button,
                    {
                        backgroundColor: backgroundColor,
                        paddingVertical: backgroundColor != null ? 10 : 0,
                        paddingHorizontal: backgroundColor != null ? 20 : 0,
                    }
                ]
            }
            onPress={onPress}
            activeOpacity={0.7}
        >
            <Text style={[StyleButtonText.Text, {color: color, textDecorationLine: textDecoration}]}>{ title }</Text>
        </Touch>
    )
}