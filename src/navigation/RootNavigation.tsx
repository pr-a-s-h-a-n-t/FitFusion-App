import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WorkoutScreen from "../screens/workout/WorkoutScreen.jsx";
import SettingsScreen from "../screens/settings/SettingsScreen.tsx";
import ActivityDetail from "../screens/activity/MyActivityDetailScreen.tsx";
import MyActivitiesScreen from "../screens/activity/MyActivityScreen.tsx";
import Signup from "../screens/auth/signup/Signup.tsx";
import Login from "../screens/auth/login/Login.tsx";
import {useState} from "react";


const RootNavigation = () => {

    const [isLoggedIn, setisLoggedIn] = useState(true);
    const Tab = createBottomTabNavigator();
    const AuthStack = createNativeStackNavigator();
    const WorkoutScreenStack = createNativeStackNavigator();
    const MyActivityScreenStack = createNativeStackNavigator();
    const SettingsScreenStack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            {isLoggedIn ? (
                    <Tab.Navigator>
                        <Tab.Screen name="Home">
                            {() => (
                                <WorkoutScreenStack.Navigator>
                                    <WorkoutScreenStack.Screen
                                        name="WorkoutScreen"
                                        component={WorkoutScreen}
                                    />
                                </WorkoutScreenStack.Navigator>
                            )}
                        </Tab.Screen>
                        <Tab.Screen name="MyActivity">
                            {() => (
                                <MyActivityScreenStack.Navigator>
                                    <MyActivityScreenStack.Screen
                                        name="MyActivitiesScreen"
                                        component={MyActivitiesScreen}

                                    />
                                    <MyActivityScreenStack.Screen
                                        name="ActivityDetail"
                                        component={ActivityDetail}
                                    />
                                </MyActivityScreenStack.Navigator>
                            )}
                        </Tab.Screen>
                        <Tab.Screen name="Settings">
                            {() => (
                                <SettingsScreenStack.Navigator>
                                    <SettingsScreenStack.Screen
                                        name="SettingsScreen"
                                        component={SettingsScreen}
                                        options={{title: ""}}
                                    />
                                </SettingsScreenStack.Navigator>
                            )}
                        </Tab.Screen>
                    </Tab.Navigator>
                )
                :
                <AuthStack.Navigator>
                    <AuthStack.Group screenOptions={{headerShown: false}}>
                        <AuthStack.Screen name="SignIn" component={Login}/>
                        <AuthStack.Screen name="SignUp" component={Signup}/>
                    </AuthStack.Group>
                </AuthStack.Navigator>
            }
        </NavigationContainer>
    );
};

export default RootNavigation;


// A better approach(MAKE USE OF NAVIGATION TAB):-
// This approach utilizes tab navigation with three tabs: Home, Activity, and Settings.
// Each tab contains multiple screens, and the navigation state is preserved within each tab.
// Additionally, a profile icon is present on the header of all screens, regardless of the active tab.

