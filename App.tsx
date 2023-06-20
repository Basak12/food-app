import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import { StyleSheet, Text, View } from 'react-native';
import SearchScreen from "./src/screens/SearchScreen";
import SingleResultScreen from "./src/screens/SingleResultScreen";

const navigator = createStackNavigator({
    Search: SearchScreen,
    SingleResults: SingleResultScreen
}, {
        initialRouteName: "Search",
        defaultNavigationOptions: {
             title: "Restaurant Search"
        },
    });

export default createAppContainer(navigator);

