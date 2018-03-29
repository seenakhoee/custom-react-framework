// @flow

import React from 'react';

type Props = {
  /** description of prop foo */
  title: string
}

/**
 * Desc for App
**/
export default class App extends React.Component<Props> {

  props: Props
 
  render() {
    return (
      <div>{this.props.title}</div>
    );
  }

}
