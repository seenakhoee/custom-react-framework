import React from 'react';
import ReactDOM from 'react-dom';

import { View } from 'react-primitives';


export class App extends React.Component {

  render() {
    return (
      <div>hi</div>
    );
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

