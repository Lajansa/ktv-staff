import React, { Component } from 'react';
import { View } from 'react-native';

import CategoryItem from './CategoryItem.js';

class CategoryListScreen extends Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <CategoryItem
          navigation={this.props.navigation}
        />
        </View>
      );
    }
  }

  export default CategoryListScreen;