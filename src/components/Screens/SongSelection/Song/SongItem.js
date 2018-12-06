import React, { Component } from 'react';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';

import db from '../../../../../db.json';

class SongItem extends Component {
    render() {
      const song = db[this.props.categoryID].singers[this.props.singerID].songs[this.props.songID];
      return (
        <ListItem
          key={this.props.index}
          containerStyle={{paddingLeft: 10, borderBottomColor: '#ddd'}}
          title={this.props.name}
          rightIcon={{name: 'add'}}
          onPressRightIcon={() => this.props.addSong(song)}
        />
      )
    }
  }

const mapDispatchToProps = dispatch => ({
    addSong: (song) => dispatch({ type: 'ADD_SONG', songName: song.name }),
})

export default connect(null, mapDispatchToProps)(SongItem);
