import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import SingleResultScreen from "./src/screens/SingleResultScreen";
import {ReviewProvider} from "./src/context/ReviewContext";
import AddReviewScreen from "./src/screens/AddReviewScreen";

const navigator = createStackNavigator({
    Search: SearchScreen,
    SingleResults: SingleResultScreen,
    AddReview: AddReviewScreen
}, {
        initialRouteName: "Search",
        defaultNavigationOptions: {
             title: "Restaurant Search"
        },
    });

const App = createAppContainer(navigator);

export default () => {
    return (
        <ReviewProvider>
            <App />
        </ReviewProvider>
    );
}

