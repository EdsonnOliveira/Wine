import { Dimensions, StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';

var fsTitleInput;
fsTitleInput = 18;
if (Dimensions.get('window').width <= 375) {
    fsTitleInput = 17
}

export const StyledInput = StyleSheet.create({
    Main: {
        flex: 1,
    },
    Title: {
        fontSize: fsTitleInput,
        fontFamily: 'SemiBold',
        color: Colors.Black,
        marginBottom: 5
    },
    Container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: Colors.Black,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 3,
    },
    Legend: {
        flex: 0.2,
        letterSpacing: 1.5,
        fontSize: 20,
        fontFamily: 'Medium',
        marginRight: 5
    },
    Input: {
        width: '100%',
        height: '100%',
        fontFamily: 'Medium',
        color: Colors.Black,
        letterSpacing: 1.5,
        fontSize: 20
    }
})

var fsTitleInputColors;
fsTitleInputColors = 18;
if (Dimensions.get('window').width <= 375) {
    fsTitleInputColors = 17
}

export const StyledInputColors = StyleSheet.create({
    Main: {
        flex: 1,
    },
    Title: {
        fontSize: fsTitleInputColors,
        fontFamily: 'SemiBold',
        marginBottom: 5,
    },
    Container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    Item: {
        width: 30,
        height: 30,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: Colors.Black,
        marginRight: 7
    }
})

var fsTitleTextArea;
fsTitleTextArea = 18;
if (Dimensions.get('window').width <= 375) {
    fsTitleTextArea = 17
}

export const StyledTextArea = StyleSheet.create({
    Main: {
        flex: 1,
    },
    Title: {
        fontSize: fsTitleTextArea,
        fontFamily: 'SemiBold',
        marginBottom: 5,
    },
    Container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: Colors.Black,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 3,
    },
    Input: {
        width: '100%',
        height: '100%',
        fontFamily: 'Medium',
        color: Colors.Black,
        letterSpacing: 1.5,
        fontSize: 20,
        backgroundColor: '#0FF'
    }
})