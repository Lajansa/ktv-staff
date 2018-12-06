import React, { Component } from 'react';
import { ListItem } from 'react-native-elements';

class QueueItem extends Component {
    render() {
      return (
        <ListItem
          key={this.props.name}
          containerStyle={{paddingLeft: 10, borderBottomColor: '#ddd'}}
          title={this.props.name}
          rightIcon={{name: 'menu'}}
        />
      )
    }
  }

  export default QueueItem;

  