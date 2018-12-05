import React, { Component } from 'react';
import { View } from 'react-native';

import QueueItem from './QueueItem.js';

class QueueScreen extends Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <QueueItem />
        </View>
      );
    }
  }

  export default QueueScreen;