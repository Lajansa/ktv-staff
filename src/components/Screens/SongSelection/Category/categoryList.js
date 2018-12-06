import React, { Component } from 'react';
import { List } from 'react-native-elements'

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
        <List 
            containerStyle={{borderTopColor: '#fff', marginTop: 0}}>
            {listItems}
        </List>
      )
    }
  }

  export default CategoryList;