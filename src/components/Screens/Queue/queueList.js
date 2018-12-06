import React, { Component } from 'react';
import QueueItem from './queueItem';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class QueueList extends Component {
    render() {
        const listItems = this.props.queueList.length == 0 ? 
                          <Text>Add songs from Song Selection Tab(:</Text> :
                            this.props.queueList.map((song, index) => 
                                    <QueueItem
                                        key={index}
                                        name={song.name}
                                    />
                                );
                            
        return (
            <View>
                {listItems}
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    queueList: state.queueList
})

export default connect(mapStateToProps)(QueueList);