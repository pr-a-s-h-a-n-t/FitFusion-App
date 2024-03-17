import {StyleSheet} from "react-native";
import {
    responsiveHeight as hp,
    responsiveWidth as wp,
    responsiveFontSize as fp
} from "react-native-responsive-dimensions";


export const GlobalStyles = StyleSheet.create({
    flex_box:{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    screen_wrapper:{
        flex: 1,
        padding: wp(2.5),
    }
})
