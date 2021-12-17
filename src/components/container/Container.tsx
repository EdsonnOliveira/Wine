import React from 'react';

import {
    SafeAreaView as SafeArea,
    ScrollView as Scroll,
} from 'react-native';

import Navigator from '../navigator/Navigator';

import Style from './Style';

export default function Container(props: any) {
    return (
        <>
            <SafeArea style={Style.SafeArea}>
                <Scroll style={Style.Scroll} showsVerticalScrollIndicator={false}>
                    { props.children }
                </Scroll>
            </SafeArea>
            <Navigator/>
        </>
    )
}