import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import QueueList from './queueList.js';

class QueueScreen extends Component {
  static navigationOptions = {
    title: 'Queue',
  };

  render() {
    return (
      <ScrollView>
        <QueueList />
      </ScrollView>
    );
  }
}

export default QueueScreen;