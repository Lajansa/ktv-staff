import React, { Component } from 'react';
import { View } from 'react-native';

import SingerList from './singerList';

class SingerListScreen extends Component {
    render() {
      return (
        <View>
        <SingerList
          navigation={this.props.navigation}
        />
        </View>
      );
    }
  }

export default SingerListScreen;