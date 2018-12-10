import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';

class Next extends Component {
    render() {
        return (
            <View>
                <Icon
                    name='skip-next'
                    onPress={() => {
                        this.props.playNextSong()
                    }}
                />
                <Text style={{ fontSize: 10 }}>Skip Next</Text>
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    playNextSong: () => dispatch({ type: 'PLAY_NEXT_SONG' }),
})

export default connect(null, mapDispatchToProps)(Next);