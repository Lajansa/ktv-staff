import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class QueueItem extends Component {
    render() {
      return (
        <View>
          <Text>{this.props.name} <Icon name='bars' /></Text>
        </View>
      )
    }
  }

  export default QueueItem;