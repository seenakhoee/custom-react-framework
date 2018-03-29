import React from 'react';

import { View } from 'react-native';

import globalStyles from 'global-styles';

export default class Spacer extends React.Component {

  render(props = this.props) {
    // var style = props.style instanceof Array ? props.style.slice(0) : [props.style];

    // if (props.size === 'xsmall') {
    //   style.push({height: 5});
    // } else {
    //   style.push({height: 10});
    // }

    const style = [
      props.size === 'large' ? globalStyles.spacingLarge :
      props.size === 'medium' ? globalStyles.spacingMedium :
      props.size === 'xsmall' ? globalStyles.spacingExtraSmall :
                                globalStyles.spacingSmall
    ];

    return (
      <View  style={style} />
    );
  }

}