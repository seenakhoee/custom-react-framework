// @flow

import * as React from 'react';

type Props = {
  title: string
} 

type State = {
  id: number,
  nextId: number
}

export default class Test extends React.Component<Props, State> {

  props: Props
  state: State

  constructor(props: Props) {
    super(props);

    this.state = {
      id: 0,
      nextId: 1
    }
  }

  handleClick = (event: any) => {
    this.setState(state => ({
      id: state.nextId,
      nextId: state.nextId + 1
    }));
  }

  render() {
    return (
      <div>
        <span>{this.state.id}</span>&nbsp;
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }

}
