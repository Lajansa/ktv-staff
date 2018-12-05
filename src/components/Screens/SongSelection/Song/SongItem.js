import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import db from '../../../../../db.json';

class SongItem extends Component {
    render() {
      const { categoryID, singerID } = this.props.navigation.state.params;
      const listItems = db[categoryID].singers[singerID].songs.map((item, index) => 
                                  <View key={index}>
                                    <Text>{item.name} <Icon 
                                                        name='plus'
                                                        onPress={() => addSongToQueue(db[categoryID].singers[singerID].songs[index])}
                                                      />
                                    </Text>
                                  </View>
                                );
      
      return (
        <View>
          {listItems}
        </View>
      )
    }
  }

  export default SongItem;
