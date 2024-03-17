import {Button, Text, View} from "react-native";
import {GlobalStyles} from "../../globalStyles/GlobalStyles.ts";

const MyActivitiesScreen = ({navigation}) => {
    return (
        <View style={GlobalStyles.screen_wrapper}>
            <Text>Activity Screen !</Text>
            <Button
                onPress={()=> navigation.navigate("ActivityDetail")}
                title={"Activity Detail"}
            />
        </View>
    )
}
export default MyActivitiesScreen;
