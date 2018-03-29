import React from 'react';

import { View } from 'react-native';

//import styles from 'react-zeolite-styles/View';

type Props = {
  style?: any
}

/**
 * A thin line used to sparate components.
**/

export default class Divider extends React.Component<Props> {

  render(props = this.props) {
    return (
      <View style={[{backgroundColor: 'hsl(0, 0%, 90%)', height: 1, margin: '0 10px'}, props.style]} />
    );
  }

}
