import { StyleSheet, Dimensions } from 'react-native';

export const StyledButton = StyleSheet.create({
    Button: {
        flex: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Text: {
        fontSize: 19,
        fontFamily: 'SemiBold',
        letterSpacing: 1.5
    }
})

var TextSize = 20;
if (Dimensions.get('window').width >= 500) {
    TextSize = 34;
}

export const StyleButtonText = StyleSheet.create({
    Button: {
        borderRadius: 10,
    },
    Text: {
        fontFamily: 'Medium',
        fontSize: TextSize,
        letterSpacing: 1.5,
        fontWeight: '500'
    }
})