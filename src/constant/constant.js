import WorkoutScreen from "../screens/workout/WorkoutScreen";
import MyActivityScreen from "../screens/activity/MyActivityScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";

export const screens = [
    {
        name: "WorkoutScreen",
        component: WorkoutScreen,
        title: `Welcome <Prashant>`,
    },
    {
        name: "MyActivityScreen",
        component: MyActivityScreen,
        title: `My Activity`,
    },
    {
        name: "ProfileScreen",
        component: ProfileScreen,
        title: `Profile`,
    },
]
