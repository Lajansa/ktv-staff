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
                this.props.prioritise(this.props.queueIndex);
            }}
          />
          <Icon
            name='delete'
            onPress={() => {
                
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
    prioritise: (queueIndex) => dispatch({ type: 'PRIORITISE', queueIndex: queueIndex}),
})

export default connect(null, mapDispatchToProps)(RightActions);