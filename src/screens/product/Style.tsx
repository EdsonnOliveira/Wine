import {
    StyleSheet,
    Dimensions
} from 'react-native';
import Colors from '../../styles/Colors';

var sTouch;
sTouch = 35;
if (Dimensions.get('window').width >= 500) {
    sTouch = 45;
}

export const StyledTop = StyleSheet.create({
    Main: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    Touch: {
        width: sTouch,
        height: sTouch,
    },
    ImgTouch: {
        width: sTouch,
        height: sTouch,
        flex: 1,
        resizeMode: 'contain'
    },
    Title: {
        color: Colors.Black,
        letterSpacing: 1.5,
        fontSize: 20,
        fontFamily: 'SemiBold',
    }
})

var hMain;
hMain = 550;
if (Dimensions.get('window').width >= 500) {
    hMain = 850
}

var fsTitle, fsYear, fsBrand;
fsTitle = 34;
fsYear = 22;
fsBrand = 10
if (Dimensions.get('window').width >= 500) {
    fsTitle = 60;
    fsYear = 48;
    fsBrand = 14
}

var hBoxInfo, hBoxValue,
    brBoxInfo, brBoxValue;
var sImageInfo;
var fsValueInfo, fsLegendInfo,
    fsSimbolValue, fsValue, fsValueSmall;
hBoxInfo = 170;
hBoxValue = 50;
brBoxInfo = 24;
brBoxValue = 14;
sImageInfo = 45;
fsValueInfo = 28;
fsLegendInfo = 12;
fsSimbolValue = 11;
fsValue = 24;
fsValueSmall = 16;
if (Dimensions.get('window').width <= 375) {
    hBoxInfo = 140
}

if (Dimensions.get('window').width >= 500) {
    hBoxInfo = 270;
    hBoxValue = 85;
    brBoxInfo = 44;
    brBoxValue = 28;
    sImageInfo = 85;
    fsValueInfo = 48;
    fsLegendInfo = 22;
    fsSimbolValue = 22;
    fsValue = 44;
    fsValueSmall = 26;
}

export const StyledMain = StyleSheet.create({
    Main: {
        width: '100%',
        height: hMain,
        marginTop: 10
    },
    Title: {
        fontFamily: 'Regular',
        color: Colors.Black,
        letterSpacing: 1.5,
        fontSize: fsTitle
    },
    Columns: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        paddingTop: 10,
    },
    BoxImage: {
        flex: 1.3,
        justifyContent: 'space-between'
    },
    BoxYear: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    Year: {
        fontSize: fsYear,
        fontFamily: 'Medium',
        color: Colors.Black,
        letterSpacing: 1.5,
        marginRight: 7
    },
    BoxBrand: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 20,

    },
    Brand: {
        fontFamily: 'Bold',
        color: Colors.White,
        letterSpacing: 1.5,
        fontSize: fsBrand,
        textTransform: 'uppercase'
    },
    Image: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    BoxInfos: {
        flex: 1,
        alignItems: 'center',
    },
    BoxInfo: {
        width: '95%',
        height: hBoxInfo,
        borderRadius: brBoxInfo,
        backgroundColor: '#FFF',
        shadowColor: "#000",
        shadowOffset: {
            width: -1,
            height: 3,
        },
        shadowOpacity: 0.20,
        shadowRadius: 7.68,
        elevation: 11,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    ImageInfo: {
        width: sImageInfo,
        height: sImageInfo,
        resizeMode: 'contain'
    },
    ValueInfo: {
        fontSize: fsValueInfo,
        color: Colors.Orange,
        fontFamily: 'Bold',
        letterSpacing: 1.5,
        marginTop: 10,
        marginBottom: 3
    },
    LegendInfo: {
        fontSize: fsLegendInfo,
        color: Colors.Black,
        fontFamily: 'SemiBold',
        letterSpacing: 1.5
    },
    BoxValue: {
        width: '100%',
        height: hBoxValue,
        borderRadius: brBoxValue,
        backgroundColor: Colors.Black,
        shadowColor: "#000",
        shadowOffset: {
            width: -1,
            height: 3,
        },
        shadowOpacity: 0.20,
        shadowRadius: 7.68,
        elevation: 11,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    SimbolValue: {
        color: Colors.White,
        fontFamily: 'Bold',
        fontSize: fsSimbolValue,
        letterSpacing: 1.5,
        marginRight: 3
    },
    Value: {
        color: Colors.White,
        fontFamily: 'ExtraBold',
        letterSpacing: 2.5,
        fontSize: fsValue
    },
    ValueSmall: {
        fontSize: fsValueSmall
    }
})

export const StyledList = StyleSheet.create({
    Main: {
        marginBottom: 15
    },
    Item: {
        height: 60,
        borderRadius: 12,
        backgroundColor: Colors.Grey,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15
    },
    Icon: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },
    BoxText: {
        flex: 1,
        height: '100%',
        marginLeft: 8,
        justifyContent: 'center',
    },
    Title: {
        color: Colors.Black,
        fontFamily: 'Bold',
        letterSpacing: 1.5,
        fontSize: 10
    },
    Value: {
        color: Colors.Orange,
        fontFamily: 'Bold',
        letterSpacing: 1.5,
        fontSize: 15,
        marginTop: -2
    }
})

var mwItem, pdItem, sIcon, fsText;
mwItem = 185;
pdItem = 15;
sIcon = 25;
fsText = 13;
if (Dimensions.get('window').width <= 375) {
    mwItem = 165;
    pdItem = 10;
    sIcon = 20;
    fsText = 12;
}

export const StyledMovement = StyleSheet.create({
    Main: {
        marginTop: 10,
        marginBottom: 40
    },
    Item: {
        flex: 1,
        maxWidth: mwItem,
        height: 60,
        padding: pdItem,
        borderRadius: 12,
        backgroundColor: Colors.Grey,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    Icon: {
        width: sIcon,
        height: sIcon,
        resizeMode: 'contain',
        marginRight: 10
    },
    BoxText: {
        flex: 1,
        height: '75%'
    },
    Title: {
        color: Colors.Black,
        fontFamily: 'SemiBold',
        fontSize: fsText,
        letterSpacing: 1.5
    },
    Quantity: {
        color: Colors.Black,
        fontFamily: 'Regular',
        fontSize: fsText,
        letterSpacing: 1.5
    },
    BoxDate: {
        height: '75%',
    },
    Date: {
        color: Colors.Black,
        fontFamily: 'Regular',
        fontSize: fsText,
        letterSpacing: 1.5
    }
})

export const StyledEdit = StyleSheet.create({
    Row: {
        width: '100%',
        height: 75,
        marginBottom: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    Column2: {
        width: '48%',
        height: '100%',
    },
    Column1: {
        width: '100%',
        height: 50,
        marginBottom: 50
    },
})

export const StyledModal = StyleSheet.create({
    Main: {
        justifyContent: 'flex-end',
        margin:0,
    },
    Container: {
        width: '100%',
        maxHeight: 600,
        paddingHorizontal: 22,
        paddingTop: 22,
        backgroundColor: '#FFF',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        alignItems: 'center',
    },
    BoxTitle: {
        alignItems: 'center',
    },
    ImageClassification: {
        width: 60,
        height: 60,
        resizeMode: 'contain'
    },
    ValueClassification: {
        fontFamily: 'Bold',
        color: Colors.Orange,
        fontSize: 38,
        letterSpacing: 1.5,
        marginVertical: 7
    },
    TextClassification: {
        fontFamily: 'SemiBold',
        fontSize: 22,
        color: Colors.Black,
        letterSpacing: 1.5
    },
    Classification: {
        alignItems: 'center',
        marginVertical: 10
    },
    Stars: {
        flexDirection: 'row',
        marginBottom: 13
    },
    IconStar: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        marginHorizontal: 2.5
    },
    TextStars: {
        fontFamily: 'Regular',
        fontSize: 14,
        color: Colors.GreyBlack,
    },
    Comments: {
        width: '100%',
    },
    ListComments: {
        height: 300,
    },
    BoxTitleComments: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    TitleComments: {
        fontFamily: 'Medium',
        fontSize: 18,
        color: Colors.Black,
        letterSpacing: 1.5
    },
    IconComments: {
        width: 25,
        height: 25,
        resizeMode: 'contain'
    },
    Comment: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        marginTop: 14
    },
    Icon: {
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        textTransform: 'uppercase'
    },
    TextIcon: {
        fontSize: 24,
        fontFamily: 'SemiBold',
        color: Colors.White
    },
    BoxTextComment: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        marginLeft: 10
    },
    UserComment: {
        fontFamily: 'SemiBold',
        color: Colors.Black,
        letterSpacing: 1.5,
    },
    TextComment: {
        fontFamily: 'Regular',
        letterSpacing: 1.5,
        fontSize: 12,
        color: Colors.Black,
    },
    DateComment: {
        fontFamily: 'Regular',
        fontSize: 12,
        color: Colors.GreyBlack,
        letterSpacing: 1.5
    },
    BoxComment: {
        width: '100%',
        height: 130,
        marginTop: 10,
        marginBottom: 25
    },
    BoxButtonComment: {
        width: '100%',
        height: 55,
        marginTop: 10
    }
})