// @flow

import React from 'react';

import { extractStyles } from '../utilities';

import { View } from 'react-native';

import styles from 'react-zeolite-styles/Text';
import globalStyles from 'global-styles';


type Styles = Object | string | Array<Styles>

type Props = {
  style?: any, // Styles breaks docs
  children: any, // React.Node,
  /** "xsmall", "medium", "large", "xlarge" */
  fontSize?: "xsmall" | "medium" | "large" | "xlarge",
  /** "bold", "semibold" */
  fontWeight?: "bold" | "semibold",
  fontStyle?: string,
  textParent?: bool
}

/**
 * class Text
**/

export default class Text extends React.Component<Props> {

  render() {
    const {
      style,
      children,
      fontSize,
      fontWeight,
      fontStyle,
      fontColor,
      textParent,
      ...otherProps
    } = this.props;

    const containerStyle = [
      style,
      globalStyles.fontDefault,
      globalStyles.fontSizeDefault,
      fontColor && globalStyles[fontColor + 'TextColor'],
      fontSize === 'xlarge'  ? globalStyles.fontSizeExtraLarge :
      fontSize === 'large'  ? globalStyles.fontSizeLarge :
      fontSize === 'medium' ? globalStyles.fontSizeMedium :
      fontSize === 'xsmall' ? globalStyles.fontSizeExtraSmall :
                              null,
      fontWeight === 'bold' && globalStyles.fontWeightBold,
      fontStyle === 'italic' && globalStyles.fontStyleItalic
    ];

    const textParentStyle = [
      !textParent && styles.container,
      textParent && styles.textParent
    ];

    return (
      <View tagName="span" style={[textParentStyle, containerStyle]} {...otherProps}>
        {React.Children.map(children, child => {
          if (typeof child === 'string') {
            return child;
          } else {
            return React.cloneElement(child, {
              style: [containerStyle, child.props.style],
              textParent: true
            });
          }
        })}
      </View>
    );


  //   var { inlineStyle, className } = extractStyles(containerStyle);

  //   var { inlineStyle: textParentInlineStyle, className: textParentClassName } = extractStyles([containerStyle, props.textParent && styles.textParent]);

  //   if (props.textParent) {
  //     return (
  //       <span className={textParentClassName} style={textParentInlineStyle}>
  //         {React.Children.map(props.children, child => {
  //           if (typeof child === 'string') {
  //             return child;
  //           } else {
  //             const { inlineStyle: childInlineStyle, className: childClassName } = extractStyles(child.props.style);

  //             return React.cloneElement(child, {
  //               style: [Object.assign({}, childInlineStyle, inlineStyle),
  //                       childClassName.split(' ').concat(className.split(' ')).join(' ')],
  //               textParent: true
  //             });
  //           }
  //         })}
  //       </span>
  //     );
  //   }

  //   return (
  //     <div className={className} style={inlineStyle}>
  //       {React.Children.map(props.children, child => {
  //         if (typeof child === 'string') {
  //           return child;
  //         } else {
  //           const { inlineStyle: childInlineStyle, className: childClassName } = extractStyles(child.props.style);

  //           return React.cloneElement(child, {
  //             style: [Object.assign({}, childInlineStyle, inlineStyle),
  //                     childClassName.split(' ').concat(className.split(' ')).join(' ')],
  //             textParent: true
  //           });
  //         }
  //       })}
  //     </div>
  //   );
  }

}
