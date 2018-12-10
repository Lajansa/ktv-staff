import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Header } from 'react-native-elements';

import QueueList from './queueList.js';
import Shuffle from './shuffle.js';
import Next from './next.js';

class QueueScreen extends Component {
  static navigationOptions = {
    title: 'Queue',
  };

  render() {
    return (
      <View>
        <Header
          leftComponent={<Shuffle />}
          rightComponent={<Next />}
          outerContainerStyles={{ height: 50, backgroundColor: 'lightgrey' }}
        />
        <ScrollView>
          <QueueList />
        </ScrollView>
      </View>
    );
  }
}

export default QueueScreen;