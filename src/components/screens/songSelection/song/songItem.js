import React, { Component } from 'react';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';

import db from '../../../../../db.json';

class SongItem extends Component {
    constructor(props) {
      super(props);
      this.state = {
        selected: false
      }
    }
    
    // componentDidUpdate(prevProps) {
    //   const song = db[this.props.categoryID].singers[this.props.singerID].songs[this.props.songID];
    //   if (this.props.previousPlayingSong != null && this.props.previousPlayingSong.videoId === song.videoId) {
    //     if (prevProps.selected){
    //       this.setState({selected: false});
    //     }
    //   }
    // }

    render() {
      const song = db[this.props.categoryID].singers[this.props.singerID].songs[this.props.songID];
      const iconName = this.state.selected ? 'check' : 'add';
      return (
        <ListItem
          key={this.props.index}
          containerStyle={{paddingLeft: 10, borderBottomColor: '#ddd'}}
          title={this.props.name}
          rightIcon={{name: iconName}}
          onPressRightIcon={() => {
            this.setState({selected: true});
            if (!this.state.selected) this.props.addSong(song);
          }}
        />
      )
    }
  }

const mapStateToProps = (state) => ({
    previousPlayingSong: state.previousPlayingSong
})


const mapDispatchToProps = dispatch => ({
    addSong: (song) => dispatch({ type: 'ADD_SONG', songName: song.name, videoId: song.videoId }),
})

export default connect(mapStateToProps, mapDispatchToProps)(SongItem);
