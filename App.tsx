import React from 'react';
import RootNavigation from "./src/navigation/RootNavigation.js";
import {Pressable, Text, View} from "react-native";

const App = (): React.JSX.Element => {
    return (
        <>
            <RootNavigation/>
            <View
                style={{
                    height: 50,
                    backgroundColor: "#f3dbdb",
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    maxHeight: 80,
                }}
            >
                <Pressable onPress={() => console.log("WorkoutScreen")}>
                    <Text style={{borderWidth: 1, borderColor: "grey", padding: 10, borderRadius: 8}}>Home</Text>
                </Pressable>
                <Pressable onPress={() => console.log("MyActivityScreen")}>
                    <Text style={{borderWidth: 1, borderColor: "grey", padding: 10, borderRadius: 8}}>Activity</Text>
                </Pressable>
                <Pressable onPress={() => console.log("ProfileScreen")}>
                    <Text style={{borderWidth: 1, borderColor: "grey", padding: 10, borderRadius: 8}}>Profile</Text>
                </Pressable>
            </View>
        </>
    );
}

export default App;
