import React, { Component } from 'react';
import { createBottomTabNavigator, createStackNavigator, createAppContainer, Header } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Platform } from 'react-native';

import VideoContainer from './VideoContainer';
import QueueScreen from './src/components/screens/queue/queueScreen';
import CategoryListScreen from './src/components/screens/songSelection/category/categoryListScreen';
import SingerListScreen from './src/components/screens/songSelection/singer/singerListScreen';
import SongListScreen from './src/components/screens/songSelection/song/songListScreen';


const SongSelectionStack = createStackNavigator(
  {
    "Category List": CategoryListScreen,
    "Singer List": SingerListScreen,
    "Song List": SongListScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        marginTop: Platform.OS === "android" ? 0 : -(Header.HEIGHT / 2),
      }
    }
  }
)

const QueueStack = createStackNavigator(
  {
    "Queue": QueueScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        marginTop: Platform.OS === "android" ? 0 : -(Header.HEIGHT / 2),
      }
    }
  }
)

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
  queueList: [],
  // previousPlayingSong: null,
  currentPlayingSong: null,
}

const shuffle = (array) => {
  var currentIndex = array.length
  var tempValue;
  var randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    tempValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = tempValue;
  }
  return array;
}

const prioritiseSong = (array, queueIndex) => {
  const numIndex = parseInt(queueIndex)
  return [array[0],
  array[numIndex],
        ...array.slice(1, numIndex),
        ...array.slice(numIndex + 1)
       ];
}

const deleteSong = (array, queueIndex) => {
  const numIndex = parseInt(queueIndex)
  return [...array.slice(0, numIndex),
          ...array.slice(numIndex + 1)
         ];
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SONG':
      return {
        queueList: [...state.queueList, { name: action.songName, videoId: action.videoId }],
        // previousPlayingSong: state.currentPlayingSong,
        currentPlayingSong: state.currentPlayingSong == null ? { name: action.songName, videoId: action.videoId } : state.currentPlayingSong,
      }
    case 'PLAY_NEXT_SONG':
      return {
        queueList: state.queueList.slice(1),
        // previousPlayingSong: state.currentPlayingSong,
        currentPlayingSong: state.queueList.slice(1).length === 0 ? null : state.queueList[1]
      }
    case 'SHUFFLE':
      return {
        queueList: state.queueList.length < 3 ? state.queueList : [state.queueList[0]].concat(shuffle(state.queueList.slice(1))),
        // previousPlayingSong: state.currentPlayingSong,
        currentPlayingSong: state.currentPlayingSong
      }
    case 'PRIORITISE':
      return {
        ...state,
        queueList: prioritiseSong(state.queueList, action.queueIndex),
        // previousPlayingSong: state.currentPlayingSong,
      }
    case 'DELETE':
      return {
        ...state,
        queueList: deleteSong(state.queueList, action.queueIndex),
        // previousPlayingSong: state.currentPlayingSong,
      }
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
