import { StyleSheet, Dimensions } from 'react-native';

import Colors from '../../styles/Colors';

var TextSize = 28;
if (Dimensions.get('window').width >= 500)
    TextSize = 44

export const Style = StyleSheet.create({
    Main: {
        width: '100%',
        marginBottom: 20,
        flexDirection: 'column'
    },
    User: {
        width: '100%',
        height: 50,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    BoxImage: {
        width: 50,
        height: 50,
        justifyContent: 'center',
    },
    Title: {
        fontSize: TextSize,
        letterSpacing: 1,
        fontFamily: 'Medium',
        color: Colors.Black,
    },
})

var TitleSize = 34;
var SubTitleSize = 24;
if (Dimensions.get('window').width >= 500) {
    TitleSize = 60;
    SubTitleSize = 40;
}

export const StyleText = StyleSheet.create({
    Title: {
        fontSize: TitleSize,
        fontFamily: 'Bold',
        color: Colors.Black,
        letterSpacing: 1,
    },
    SubTitle: {
        fontSize: SubTitleSize,
        fontFamily: 'SemiBold',
        color: Colors.Black,
        letterSpacing: 1,
    }
})