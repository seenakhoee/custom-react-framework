import React from 'react';

import { View, Text, Touch } from 'react-native';

import styles from 'react-zeolite-styles/Button';
import globalStyles from 'global-styles';

type Props = {
  /** Callback function */
  onPress?: () => void,
  /** Container style */
  style?: any
}

/**
 * A component you can click to perform an action.
 */

export default class Button extends React.Component<Props> {

  handleClick = event => {
    this.props.onPress(event);
  }

  render() {
    const {
      title,
      onPress,
      ...otherProps
    } = this.props;

    const containerStyle = [
      styles.container
    ];

    const titleStyle = [
      styles.title
    ];

    return (
      <Touch tagName="button" onPress={onPress} style={containerStyle} {...otherProps}>
        <Text fontWeight="bold" style={[titleStyle, {color: 'white', textAlign: 'center'}]}>{title}</Text>
      </Touch>
    );
  }

}
