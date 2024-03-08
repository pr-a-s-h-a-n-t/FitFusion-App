import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screens} from "../constant/constant";

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {
                    screens?.map((screen, index) => {
                        return (
                            <Stack.Screen
                                key={index}
                                name={screen?.name}
                                component={screen?.component}
                                options={{title: screen?.title}}
                            />
                        )
                    })
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigation;
