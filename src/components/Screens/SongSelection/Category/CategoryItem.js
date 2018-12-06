import React, { Component } from 'react';
import { Button, View } from 'react-native';

class CategoryItem extends Component {
    render() {
      return (
        <View>
          <Button
            key={this.props.categoryID}
            title={this.props.name}
            onPress={() => this.props.navigation.navigate('Singer List', {categoryID: this.props.categoryID} )}
          />
        </View>
      )
    }
  }

  export default CategoryItem;