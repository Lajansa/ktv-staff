import React, { Component } from 'react';
import { View } from 'react-native';

import CategoryList from './categoryList.js';

class CategoryListScreen extends Component {
  static navigationOptions = {
    title: 'Categories',
  };

  render() {
    return (
      <View>
        <CategoryList
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}

export default CategoryListScreen;