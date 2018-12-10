import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';

class Shuffle extends Component {
    render() {
        return (
            <View>
                <Icon
                    name='shuffle'
                    onPress={() => {
                        this.props.shuffle()
                    }}
                />
                <Text style={{ fontSize: 10 }}>Shuffle</Text>
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    shuffle: () => dispatch({ type: 'SHUFFLE' }),
})

export default connect(null, mapDispatchToProps)(Shuffle);