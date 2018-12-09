import React, { Component } from 'react';
import { View } from 'react-native';
import { ListItem } from 'react-native-elements';

class QueueItem extends Component {
    render() {
      let item;
      if (this.props.index === 0) {
        item = <ListItem
                key={this.props.name}
                containerStyle={{paddingLeft: 10, borderBottomColor: '#ddd'}}
                title={this.props.name}
                subtitle={'Now playing'}
                subtitleStyle={{fontStyle: 'italic', fontSize: 12}}
                leftIcon={{name: 'play-arrow'}}
                rightIcon={{name: 'menu'}}
              />
      } else {
        item = <ListItem
                key={this.props.name}
                containerStyle={{paddingLeft: 10, borderBottomColor: '#ddd'}}
                title={this.props.name}
                rightIcon={{name: 'menu'}}
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

  