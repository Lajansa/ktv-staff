import React, { Component } from 'react';
import { ListItem } from 'react-native-elements'

import db from '../../../../../db.json';

class CategoryItem extends Component {
  render() {
    return (
      <ListItem
        avatar={{uri: db[this.props.categoryID].url}}
        containerStyle={{paddingLeft: 10, borderBottomColor: '#ddd'}}
        key={this.props.name}
        title={this.props.name}
        onPress={() => this.props.navigation.navigate('Singer List', { categoryID: this.props.categoryID })}
      />
    )
  }
}

export default CategoryItem;