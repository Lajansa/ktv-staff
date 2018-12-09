import React, { Component } from 'react';
import { View } from 'react-native';

import SongList from './songList';

class SongListScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`,
  });
  
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