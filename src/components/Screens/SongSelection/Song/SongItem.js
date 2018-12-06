import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux'

import db from '../../../../../db.json';

class SongItem extends Component {
    render() {
      const song = db[this.props.categoryID].singers[this.props.singerID].songs[this.props.songID];
      return (
        <View key={this.props.index}>
          <Text>{this.props.name} <Icon 
                                    name='plus'
                                    onPress={() => this.props.addSong(song)}
                                  />
          </Text>
        </View>
      )
    }
  }

const mapDispatchToProps = dispatch => ({
    addSong: (song) => dispatch({ type: 'ADD_SONG', songName: song.name }),
})

export default connect(null, mapDispatchToProps)(SongItem);
