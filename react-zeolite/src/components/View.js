import React from 'react';

import { extractStyles } from '../utilities';

import styles from 'react-zeolite-styles/View';
import globalStyles from 'global-styles';


type Props = {
  tagName?: string,
  style?: any,
  children?: any,
  horizontal?: bool,
  flex?: string,
  padding?: string
}

/**
 * class View
**/

export default class View extends React.Component<Props> {

  render() {
    const {
      tagName,
      style,
      tagRef,
      children,
      accessibilityRole,
      horizontal,
      flex,
      padding,
      backgroundColor,
      ...otherProps
    } = this.props;

    var containerStyle = [
      styles.container,
      style,
      horizontal && {flexDirection: 'row'},
      flex && {flex: flex},
      padding === 'small' && globalStyles.paddingSmall,
      backgroundColor && globalStyles[backgroundColor + 'BackgroundColor'],
      // backgroundColor && (backgroundColor === 'primaryBlue' && globalStyles.primaryColorBlueBackground)
      //                 || (backgroundColor === 'primaryGreen' && globalStyles.primaryColorGreenBackground)
    ];

    const { inlineStyle, className } = extractStyles(containerStyle);
    const Tag = tagName || 'div';

    return (
      <Tag className={className} style={inlineStyle} ref={tagRef} {...otherProps}>
        {children}
      </Tag>
    );
  }

}
