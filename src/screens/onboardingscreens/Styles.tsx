import { StyleSheet } from "react-native";
import { appBgColour } from "../../constants";
import { heightPercentageToDP } from "../../components/ResponsiveScreen";

export const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : appBgColour,
        padding : '10%'
    },
    button : {
        backgroundColor : '#FFFFFF',
        height : '9%',
        width : '100%',
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius : heightPercentageToDP('7%')
    }
}) 