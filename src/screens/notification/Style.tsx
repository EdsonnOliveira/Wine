import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';

const Style = StyleSheet.create({
    Group: {
        width: '100%',
        marginBottom: 10,
    },
    Title: {
        fontFamily: 'SemiBold',
        fontSize: 20,
        color: Colors.Black,
        letterSpacing: 1.5,
        marginBottom: 10
    },
    Notification: {
        width: '100%',
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 13
    },
    BoxImage: {
        width: 55,
        height: 55,
        backgroundColor: Colors.Grey,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    Wine: {
        width: 30,
        height: 45,
        resizeMode: 'contain'
    },
    Description: {
        fontFamily: 'Regular',
        color: Colors.Black,
        letterSpacing: 1.5,
        fontSize: 17,
    },
    DescriptionBold: {
        fontFamily: 'SemiBold',
    }
})

export default Style;