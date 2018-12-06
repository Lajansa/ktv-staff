import React, { Component } from 'react';
import { View } from 'react-native';

import CategoryList from './categoryList.js';

class CategoryListScreen extends Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <CategoryList
          navigation={this.props.navigation}
        />
        </View>
      );
    }
  }

  export default CategoryListScreen;