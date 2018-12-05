import React, { Component } from 'react';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import QueueScreen from './src/components/Screens/Queue/QueueScreen';
import CategoryListScreen from './src/components/Screens/SongSelection/Category/CategoryListScreen';
import SingerListScreen from './src/components/Screens/SongSelection/Singer/SingerListScreen';
import SongListScreen from './src/components/Screens/SongSelection/Song/SongListScreen';


const SongSelectionStack = createStackNavigator({
  "Category List": CategoryListScreen,
  "Singer List": SingerListScreen,
  "Song List": SongListScreen,
})

const TabNavigator = createBottomTabNavigator({
  "Song Selection": SongSelectionStack,
  Queue: QueueScreen,
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Song Selection') {
          iconName = 'music';
        } else if (routeName === 'Queue') {
          iconName = 'list-ul';
        }

        return <Icon name={iconName} size={20} color={tintColor} />;
      },
    }),
  }
);

export default createAppContainer(TabNavigator);
