import React from "react";
import {styles} from "./LoginupStyles.ts";
import {Button, Text, View} from "react-native";
import {GlobalStyles} from "../../../globalStyles/GlobalStyles.ts";

const Login =  ({navigation})=>{
    return(
        <View style={GlobalStyles.screen_wrapper}>
            <Text style={styles.text}>Login...</Text>
            <Button
                onPress={()=> navigation.navigate("SignUp")}
                title={"Signup"}
            />
        </View>
    )
}

export default Login;
