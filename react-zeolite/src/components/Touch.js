import React from 'react';

import { View, Text } from 'react-native';

export default class Touch extends React.Component {

  render() {
    const {
      onPress,
      ...otherProps
    } = this.props;

    return (
      <View onClick={onPress} {...otherProps}>
        {this.props.children}
      </View>
    );
  }

}
