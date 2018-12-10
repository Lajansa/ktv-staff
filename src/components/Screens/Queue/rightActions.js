import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';

class RightActions extends Component {

  render() {
    return (
      <View style={{display: 'flex', flexDirection: 'row'}}>
          <Icon
            name='arrow-upward'
            onPress={() => {
                this.props.prioritiseSong(this.props.queueIndex);
            }}
          />
          <Icon
            name='delete'
            onPress={() => {
                this.props.deleteSong(this.props.queueIndex);
            }}
          />
          <Icon
            name='menu'
            onPress={() => {
                
            }}
          />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
    prioritiseSong: (queueIndex) => dispatch({ type: 'PRIORITISE', queueIndex: queueIndex}),
    deleteSong: (queueIndex) => dispatch({ type: 'DELETE', queueIndex: queueIndex}),
})

export default connect(null, mapDispatchToProps)(RightActions);