import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, Text } from 'react-native-elements'

import QueueItem from './queueItem';

class QueueList extends Component {
    render() {
        const listItems = this.props.queueList.length == 0 ? 
                          <Text style={{ textAlign: 'center', lineHeight: 250, height: 250 }}>No songs yet!</Text> :
                            this.props.queueList.map((song, index) => 
                                    <QueueItem
                                        key={index}
                                        name={song.name}
                                        queueIndex={index}
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

const mapStateToProps = (state) => ({
    queueList: state.queueList
})

export default connect(mapStateToProps)(QueueList);