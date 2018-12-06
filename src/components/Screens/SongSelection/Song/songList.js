import React, { Component } from 'react';
import { List } from 'react-native-elements'

import db from '../../../../../db.json';
import SongItem from './songItem';

class SongList extends Component {
    render() {
        const { categoryID, singerID } = this.props.navigation.state.params;
        const songList = db[categoryID].singers[singerID].songs;
        const listItems = songList.map((song, index) => 
                                    <SongItem
                                        key={index}
                                        name={song.name}
                                        categoryID={categoryID}
                                        singerID={singerID}
                                        songID={index}
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

export default SongList;
