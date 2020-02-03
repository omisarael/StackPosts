import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import UsersScreen from "./Screens/Users";
import PostsScreen from "./Screens/Posts";
import DetalleScreen from "./Screens/Detail";

const AppStack = createStackNavigator({
  Users: {
    screen: UsersScreen,
  },
  PostsScreen: {
    screen: PostsScreen
  },
  DetalleOfPost: {
    screen: DetalleScreen
  },

}, {
  initialRouteName: 'Users'
});

export default createAppContainer(AppStack)
