import { StyleSheet, Dimensions } from 'react-native'

import Colors from '../../styles/Colors';

var mbMovements, sMovement;
var sAction, mtAction;

mbMovements = 120
sMovement = 60;
if (Dimensions.get('window').width >= 500) {
    mbMovements = 170
    sMovement = 80
}

sAction = 85;
mtAction = -70;
if (Dimensions.get('window').width >= 500) {
    sAction = 105;
    mtAction = -90;
}

const Style = StyleSheet.create({
    Movements: {
        width: '100%',
        height: 70,
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        bottom: mbMovements,
        zIndex: 99999,
    },
    Movement: {
        width: sMovement,
        height: sMovement,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Navigator: {
        height: 80,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: Colors.White,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.20,
        shadowRadius: 17.68,
        elevation: 11,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 99999,
    },
    Option: {
        flex: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Text: {
        letterSpacing: 1,
        marginTop: 5,
        fontSize: 12
    },
    Action: {
        width: sAction,
        height: sAction,
        backgroundColor: Colors.Red,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: mtAction,
        shadowColor: "#000",
        shadowOffset: {
            width: -1,
            height: 3,
        },
        shadowOpacity: 0.20,
        shadowRadius: 7.68,
        elevation: 11,
    },
})

export default Style;