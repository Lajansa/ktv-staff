import React, { Component } from 'react';
import { View } from 'react-native';
import { ListItem } from 'react-native-elements';

import RightActions from './rightActions';

class QueueItem extends Component {
    render() {
      let item;
      if (this.props.queueIndex === 0) {
        item = <ListItem
                key={this.props.name}
                containerStyle={{paddingLeft: 10, borderBottomColor: '#ddd'}}
                title={this.props.name}
                subtitle={'Now playing'}
                subtitleStyle={{fontStyle: 'italic', fontSize: 12}}
                leftIcon={{name: 'play-arrow'}}
                hideChevron={true}
              />
      } else {
        item = <ListItem
                key={this.props.name}
                containerStyle={{paddingLeft: 10, borderBottomColor: '#ddd'}}
                title={this.props.name}
                rightIcon={<RightActions queueIndex={this.props.queueIndex}/>}
              />
      }

      return (
        <View>
          {item}
        </View>
      )
    }
  }

  export default QueueItem;

  