import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';

const Style = StyleSheet.create({
    Main: {
        flex: 1,
    },
    Bg: {
        width: '100%',
        height: '100%'
    },
    Modal: {
        justifyContent: 'flex-end',
        margin: 0
    },
    BoxModal: {
        width: '100%',
        height: 250,
        backgroundColor: '#FFF',
        paddingHorizontal: 22,
        paddingTop: 22,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        alignItems: 'center'
    },
    Title: {
        fontFamily: 'Bold',
        fontSize: 20,
        letterSpacing: 1.5,
        color: Colors.Black,
    },
    BoxSocial: {
        flexDirection: 'row',
        marginVertical: 12
    },
    ButtonSocial: {
        width: 40,
        height: 40,
        borderRadius: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.1,
        elevation: 3,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal:7
    },
    Icon: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },
    Or: {
        fontFamily: 'Medium',
        letterSpacing: 1.5,
        color: Colors.Black
    },
    BoxButton: {
        width: 230,
        height: 45,
        marginVertical: 12,
    },
})

export default Style;