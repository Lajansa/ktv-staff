import React, { Component } from 'react';
import { View } from 'react-native';

import SingerItem from './SingerItem';

class SingerListScreen extends Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <SingerItem
          navigation={this.props.navigation}
        />
        </View>
      );
    }
  }

export default SingerListScreen;