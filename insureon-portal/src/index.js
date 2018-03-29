import React from 'react';
import ReactDOM from 'react-dom';

import UserPortal from './components/UserPortal';

import Test from 'test-test';

/**
 * This is MyClass.
 * @reactProps {!number} prop1 - this is prop1
 * @reactProps {string} prop2 - this is prop2
 */
export default class Foo extends React.Component {

}

ReactDOM.render(
  <UserPortal />,
  document.getElementById('root')
);
