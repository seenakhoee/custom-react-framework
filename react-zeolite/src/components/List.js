import React from 'react';

import { View, Divider } from 'react-native';

//import { extractStyles } from '../utilities';

//import viewStyles from 'react-zeolite-styles/View';

type Props = {
  horizontal?: bool,
  spacing?: "small" | "large",
  itemStyle?: any
}

/**
 * A list of components with optional divider.
 */

export default class List extends React.Component<Props> {

  render() {
    const {
      style,
      children,
      horizontal,
      divider,
      spacing,
      itemStyle,
      ...otherProps
    } = this.props;

    const containerStyle = [
      style,
      {margin: 0, padding: 0},
      horizontal && {flexDirection: 'row', flexWrap: 'wrap'},
      spacing && {marginLeft: -20, marginTop: -20},
    ];

    const itemContainerStyle = [
      itemStyle,
      spacing && {paddingLeft: 20, paddingTop: 20},
    ];

    return (
      <View tagName="ul" style={containerStyle} {...otherProps}>
        {React.Children.map(children, child => (
          <View tagName="li" style={itemContainerStyle}>
            {divider && <Divider />}
            {child}
          </View>
        ))}
      </View>
    );

  }

  // xrender(props = this.props) {
  //   var style = props.style instanceof Array ? props.style.slice(0) : [props.style];

  //   style.push(viewStyles.container);

  //   if (props.horizontal) {
  //     style.push({flexDirection: 'row', flexWrap: 'wrap'});
  //   }

  //   if (props.spacing) {
  //     style.push({marginLeft: -20, marginTop: -20});
  //   }

  //   var { inlineStyle, className } = extractStyles(style);


  //   var itemStyle = props.itemStyle instanceof Array ? props.itemStyle.slice(0) : [props.itemStyle];

  //   itemStyle.push(viewStyles.container);

  //   if (props.spacing) {
  //     itemStyle.push({paddingLeft: 20, paddingTop: 20});
  //   }

  //   var { inlineStyle: itemInlineStyle, className: itemClassName } = extractStyles(itemStyle);
  
  //   return (
  //     <ul style={inlineStyle} className={className}>
  //       {React.Children.map(props.children, child => (
  //         <li style={itemInlineStyle} className={itemClassName}>{child}</li>
  //       ))}
  //     </ul>
  //   );
  // }

}
