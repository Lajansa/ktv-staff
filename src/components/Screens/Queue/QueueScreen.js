import React, { Component } from 'react';
import { View } from 'react-native';

import QueueList from './queueList.js';

class QueueScreen extends Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <QueueList />
        </View>
      );
    }
  }

  export default QueueScreen;