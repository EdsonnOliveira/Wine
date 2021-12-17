import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';

const Style = StyleSheet.create({
    Top: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 15
    },
    ButtonNotification: {
        width: 30,
        height: 30,
    },
    ImageNotification: {
        width: 30,
        height: 30,
        resizeMode: 'contain'
    },
    List: {
        flex: 1,
    },
    Item: {
        width: '100%',
        height: 70,
        backgroundColor: Colors.Grey,
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 18,
        marginBottom: 14
    },
    ImageItem: {
        width: 35,
        height: 35,
        marginRight: 10
    },
    TextItem: {
        fontFamily: 'Medium',
        color: Colors.Black,
        letterSpacing: 1.5,
        fontSize: 22
    },
})

export default Style;