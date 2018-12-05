import React, { Component } from 'react';
import { Text, View } from 'react-native';

import db from '../../../../db.json';

class QueueItem extends Component {
    render() {
      const listItems = db[categoryID].singers[singerID].songs.map((item, index) => 
                                  <View key={index}>
                                    <Text>{item.name} <Icon name='bars' /></Text>
                                  </View>
                                );
      
      return (
        <View>
          {listItems}
        </View>
      )
    }
  }

  export default QueueItem;