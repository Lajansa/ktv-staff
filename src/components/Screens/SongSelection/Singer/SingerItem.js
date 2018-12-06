import React, { Component } from 'react';
import { ListItem } from 'react-native-elements';

import db from '../../../../../db.json';

class SingerItem extends Component {
    render() {
      return (
        <ListItem
          key={this.props.singerID}
          avatar={{uri: db[this.props.categoryID].singers[this.props.singerID].url}}
          containerStyle={{paddingLeft: 10, borderBottomColor: '#ddd'}}
          title={this.props.name}
          onPress={() => this.props.navigation.navigate('Song List', {categoryID: this.props.categoryID, singerID: this.props.singerID} )}
        />
      )
    }
  }

  export default SingerItem;