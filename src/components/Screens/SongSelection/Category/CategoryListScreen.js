import React, { Component } from 'react';
import { View } from 'react-native';

import CategoryList from './categoryList.js';

class CategoryListScreen extends Component {
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