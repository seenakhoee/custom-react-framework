// @flow

import React from 'react';

type Props = {
  /** description of prop foo */
  title: string
}

/**
 * Desc for button
**/
export default class Button extends React.Component<Props> {

  props: Props
 
  render() {
    return (
      <button>{this.props.title}</button>
    );
  }

}
