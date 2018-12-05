import React, { Component } from 'react';
import { Button, View } from 'react-native';

import db from '../../../../../db.json';

class CategoryItem extends Component {
    render() {
      const listItems = db.map((item, index) => 
                                    <Button
                                      key={index}
                                      title={item.name}
                                      onPress={() => this.props.navigation.navigate('Singer List', {categoryID: index} )}
                                    />
                                );
      
      return (
        <View>
          {listItems}
        </View>
      )
    }
  }

  export default CategoryItem;