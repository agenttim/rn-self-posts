import {createAppContainer, ThemeColors} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {MainScreen} from "../screens/MainScreen";
import {PostScreen} from "../screens/PostScreen";
import {THEME} from "../theme";
import {Platform} from "react-native";
import {BookedScreen} from "../screens/BookedScreen";
//import {createBottomTabNavigator} from "react-navigation-tabs";
import {Ionicons} from "@expo/vector-icons";
import {Post} from "../components/Post";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


let PostNavigator = createStackNavigator({
        Main: MainScreen,
        Post: {
            screen: PostScreen
        }
    },
    {
        initialRouteName: 'Main',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff'
            },
            headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR
        }
    }
)

const BookedNavigator = createStackNavigator({
        Booked: BookedScreen,
        Post: PostScreen
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff'
            },
            headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR
        }
    }
)

const BottomNavigator = createBottomTabNavigator({
        Post: {
            screen: PostNavigator,
            navigationOptions: {
                tabBarIcon: <Ionicons name='ios-albums' size={25}/>
            }
        },
        Booked: {
            screen: BookedNavigator,
            navigationOptions: {
                tabBarIcon: <Ionicons name='ios-star' size={25}/>
            }
        }
    }
)

export const AppNavigation = createAppContainer(BottomNavigator)
//export const AppNavigation = createAppContainer(PostNavigator)

