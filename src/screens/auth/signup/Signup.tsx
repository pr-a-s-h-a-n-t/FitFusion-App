import React from "react";
import {styles} from "./SignupStyles.ts";
import {Button, Text, View} from "react-native";
import {GlobalStyles} from "../../../globalStyles/GlobalStyles.ts";

const Signup =  ({navigation})=>{

    const handleSomething = ()=>{
        try {
            navigation.navigate("WorkoutScreen")
        }catch (err){
            console.log("err", err)
        }
    }
    return(
        <View style={GlobalStyles.screen_wrapper}>
            <Text style={styles.text}>Please Signup...</Text>
            <Button
                onPress={handleSomething}
                title={"WorkoutScreen"}
            />
        </View>
    )
}

export default Signup;
