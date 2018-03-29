import React from 'react';

import { View, Text } from 'react-native';

import { extractStyles } from '../utilities';

//import styles from 'react-zeolite-styles/Text';
//import globalStyles from 'global-styles';

export default class Image extends React.Component {

  render(props = this.props) {
    const {
      style,
      source,
      resizeMode,
      width,
      height
    } = this.props;

    const containerStyle = [
      style,
      width && {width: width},
      {objectFit: 'contain'}
    ];

    return (
      <View tagName="img" src={source} style={containerStyle} />
    );

    // var style = props.style instanceof Array ? props.style.slice(0) : [props.style];

    // if (props.flex) {
    //   style.push({flex: props.flex});
    // }

    // var { inlineStyle, className } = extractStyles(style);

    // return (
    //   <img src={props.source} className={className} style={inlineStyle} />
    // );
  }

}
