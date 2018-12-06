import React, { Component } from 'react';
import { Button, View } from 'react-native';

class SingerItem extends Component {
    render() {
      
      return (
        <View>
          <Button
            key={this.props.singerID}
            title={this.props.name}
            onPress={() => this.props.navigation.navigate('Song List', {categoryID: this.props.categoryID, singerID: this.props.singerID} )}
          />
        </View>
      )
    }
  }

  export default SingerItem;