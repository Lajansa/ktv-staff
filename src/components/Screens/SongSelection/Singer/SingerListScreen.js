import React, { Component } from 'react';
import { View } from 'react-native';

import SingerList from './singerList';

class SingerListScreen extends Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <SingerList
          navigation={this.props.navigation}
        />
        </View>
      );
    }
  }

export default SingerListScreen;