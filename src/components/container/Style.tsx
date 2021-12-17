import { StyleSheet, Dimensions } from 'react-native';

var margin = 15
if (Dimensions.get('window').width >= 500) {
    margin = 40
}

const Style = StyleSheet.create({
    SafeArea: {
        flex: 1,
        height: Dimensions.get('window').height - 80,
        margin: margin,
        marginTop: 30,
        marginBottom: 70,
        position: 'relative',
    },
    Scroll: {
        height: 1,
    }
})

export default Style;