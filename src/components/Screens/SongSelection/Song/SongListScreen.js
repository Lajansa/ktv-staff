import React, { Component } from 'react';
import { View } from 'react-native';

import SongList from './songList';

class SongListScreen extends Component {
    render() {
      return (
        <View>
          <SongList
            navigation={this.props.navigation}
          />
        </View>
      );
    }
  }

export default SongListScreen;