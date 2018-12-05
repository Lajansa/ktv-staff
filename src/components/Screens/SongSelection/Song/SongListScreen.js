import React, { Component } from 'react';
import { View } from 'react-native';

import SongItem from './SongItem';

class SongListScreen extends Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <SongItem
            navigation={this.props.navigation}
          />
        </View>
      );
    }
  }

export default SongListScreen;