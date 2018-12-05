import React, { Component } from 'react';
import { Button, View } from 'react-native';

import db from '../../../../../db.json';

class SingerItem extends Component {
    render() {
      const { categoryID } = this.props.navigation.state.params;
      const listItems = db[categoryID].singers.map((item, index) => 
                                    <Button
                                      key={index}
                                      title={item.name}
                                      onPress={() => this.props.navigation.navigate('Song List', {categoryID: categoryID, singerID: index} )}
                                    />
                                );
      
      return (
        <View>
          {listItems}
        </View>
      )
    }
  }

  export default SingerItem;