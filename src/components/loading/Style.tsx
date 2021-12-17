import { StyleSheet } from 'react-native';

import Colors from '../../styles/Colors';

const Style = StyleSheet.create({
    Main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Logo: {
        width: 250 - 100,
        height: 164 - 80,
        position: 'absolute',
        top: 80
    },
    Title: {
        textAlign: 'center',
        fontFamily: 'Medium',
        letterSpacing: 1,
        color: Colors.Black,
        fontSize: 20,
        marginTop: 20
    }
})

export default Style;