import React, { Component } from 'react';
import { View } from 'react-native';

import db from '../../../../../db.json';
import CategoryItem from './categoryItem';

class CategoryList extends Component {
    render() {
      const listItems = db.map((item, index) => 
                                    <CategoryItem
                                      key={index}
                                      name={item.name}
                                      categoryID={index}
                                      navigation={this.props.navigation}
                                    />
                                );
      
      return (
        <View>
          {listItems}
        </View>
      )
    }
  }

  export default CategoryList;