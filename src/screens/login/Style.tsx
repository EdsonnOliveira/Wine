import { StyleSheet } from 'react-native';

const Style = StyleSheet.create({
    Main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain'
    },
    Input: {
        width: '100%',
        height: 85,
        paddingHorizontal: 20,
        marginBottom: 20
    }
})

export default Style;