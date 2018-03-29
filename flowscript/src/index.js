// @flow

// import React from 'react';
// import ReactDOM from 'react-dom';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import One from './components/one';
//import Two from './two';
import Three from './components/three';


class App extends React.Component<> {

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div>
        <One />
        <Three />
      </div>
    );
  }

}

const root = document.getElementById('root');

if (root instanceof Element) {
  ReactDOM.render(<App />, root);
}
