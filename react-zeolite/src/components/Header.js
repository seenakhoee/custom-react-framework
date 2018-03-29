import React from 'react';

import { View } from 'react-native';

//import styles from 'react-zeolite-styles/Text';
//import globalStyles from 'global-styles';

type Props = {
  style?: any,
  children?: any
}

type State = {
  fixed: bool
}

export default class Header extends React.Component<Props, State> {

  constructor(props) {
    super(props);

    this.state = {
      fixed: false
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    document.addEventListener('scroll', this.handleScroll);

    this.handleResize();
  }

  handleScroll = event => {
    if (!this.state.fixed && this.offsetTop - window.pageYOffset < 0) {
      this.setState(state => ({
        fixed: true
      }));
    } else if (this.state.fixed && this.offsetTop - window.pageYOffset >= 0) {
      this.setState(state => ({
        fixed: false
      }));
    }
  }

  handleResize = event => {
    const clientRect = this.container.getBoundingClientRect();
    ///UIManager.measure(this.container, (frameX, frameX, frameWidth, frameHeight, pageX, pageY) => {

    this.offsetTop = clientRect.top + window.pageYOffset;
    this.offsetWidth = clientRect.width;
    this.offsetHeight = clientRect.height;
  }

  render(props = this.props) {
    const containerStyle = {
      width: this.state.fixed ? this.offsetWidth : null,
      height: this.state.fixed ? this.offsetHeight : null
    };

    const style = {
      width: this.state.fixed ? this.offsetWidth : null,
      position: this.state.fixed ? 'fixed' : null,
      top: this.state.fixed ? 0 : null,
      zIndex: 1
    };

    return (
      <View style={containerStyle}>
        <div ref={element => this.container = element} style={style}>
          <View style={props.style}>
            {this.props.children}
          </View>
        </div>
      </View>
    );
  }

}
