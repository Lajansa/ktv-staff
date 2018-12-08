import React, { Component } from 'react';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import VideoContainer from './VideoContainer';
import QueueScreen from './src/components/screens/queue/queueScreen';
import CategoryListScreen from './src/components/screens/songSelection/category/categoryListScreen';
import SingerListScreen from './src/components/screens/songSelection/singer/singerListScreen';
import SongListScreen from './src/components/screens/songSelection/song/songListScreen';


const SongSelectionStack = createStackNavigator({
  "Category List": CategoryListScreen,
  "Singer List": SingerListScreen,
  "Song List": SongListScreen,
})

const QueueStack = createStackNavigator({
  "Queue": QueueScreen,
})

const TabNavigator = createBottomTabNavigator({
  "Song Selection": SongSelectionStack,
  Queue: QueueStack,
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

const AppContainer = createAppContainer(TabNavigator);

const initialState = {
  queueList: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_SONG':
      return { queueList: [...state.queueList, { name: action.songName }] };
  }
  return state;
}

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <VideoContainer />
        <AppContainer />
      </Provider>
    )
  }
}

export default App;
