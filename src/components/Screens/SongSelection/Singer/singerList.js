import React, { Component } from 'react';
import { List } from 'react-native-elements'

import db from '../../../../../db.json';
import SingerItem from './singerItem';

class SingerList extends Component {
    render() {
      const { categoryID } = this.props.navigation.state.params;
      const listItems = db[categoryID].singers.map((item, index) => 
                                    <SingerItem
                                      key={index}
                                      name={item.name}
                                      categoryID={categoryID}
                                      singerID={index}
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

  export default SingerList;