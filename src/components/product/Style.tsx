import { StyleSheet, Dimensions } from 'react-native';

import Colors from '../../styles/Colors';

var wMain, hMain, wImage, hImage;
var brBackground;
wMain = 122;
hMain = 270;
brBackground = 40;
wImage = 76;
hImage = 174;
if (Dimensions.get('window').width <= 375) {
    wMain = wMain - 17;
    hMain = hMain - 17;
    brBackground = 35;
    wImage = wImage - 35;
    hImage = hImage - 35;
}

export const StyledProduct = StyleSheet.create({
    Main: {
        width: wMain,
        height: hMain,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    Background: {
        width: '100%',
        height: '65%',
        backgroundColor: Colors.Red,
        borderRadius: brBackground,
        alignItems: 'center',
        padding: 15,
        position: 'relative'
    },
    Stock: {
        width: 40,
        height: 17,
        backgroundColor: '#FFF',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    TextStock: {
        fontSize: 12,
        color: Colors.Black,
        fontFamily: 'SemiBold',
        fontWeight: '700'
    },
    Name: {
        fontFamily: 'Regular',
        color: '#FFF',
        fontWeight: '600',
        fontSize: 14,
        textAlign: 'center',
    },
    Image: {
        width: wImage,
        height: hImage,
        position: 'absolute',
        bottom: 0
    }
})

var wMainPromo, hMainPromo, wImagePromo, hImagePromo;
var brBackgroundPromo;
wMainPromo = 330;
hMainPromo = 190;
brBackgroundPromo = 34;
wImagePromo = 126;
hImagePromo = 224;
if (Dimensions.get('window').width <= 375) {
    wMainPromo = wMainPromo - 17;
    hMainPromo = hMainPromo - 17;
    wImagePromo = wImagePromo - 35;
    hImagePromo = hImagePromo - 35;
}

export const StyledPromo = StyleSheet.create({
    Main: {
        width: wMainPromo,
        height: hMainPromo,
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginRight: 15
    },
    Background: {
        width: '100%',
        height: '95%',
        borderRadius: brBackgroundPromo,
        alignItems: 'center',
        padding: 15,
        position: 'relative'
    },
    Info: {
        width: 200,
        top: 20,
        left: 20,
        position: 'absolute',
    },
    BoxPercetage: {
        width: 100,
        height: 27,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
        marginBottom: 5
    },
    Percetage: {
        fontFamily: 'SemiBold',
        letterSpacing: 1.5,
    },
    Title: {
        fontFamily: 'Bold',
        fontSize: 28,
        letterSpacing: 1.5
    },
    Description: {
        fontFamily: 'Light',
        fontSize: 11,
        letterSpacing: 1.5,
        marginTop: 5
    },
    Image: {
        width: wImagePromo,
        height: hImagePromo,
        position: 'absolute',
        resizeMode: 'contain',
        right: 0,
        bottom: 15,
        zIndex: 99
    }
})