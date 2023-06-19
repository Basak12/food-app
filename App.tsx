import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import { StyleSheet, Text, View } from 'react-native';
import SearchScreen from "./src/screens/SearchScreen";

const navigator = createStackNavigator({
    Search: SearchScreen
}, {
        initialRouteName: "Search",
        defaultNavigationOptions: {
             title: "Business Search"
        }
    });

export default createAppContainer(navigator);

