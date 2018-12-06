import React, { Component } from 'react';
import { View } from 'react-native';

import SongList from './songList';

class SongListScreen extends Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <SongList
            navigation={this.props.navigation}
          />
        </View>
      );
    }
  }

export default SongListScreen;