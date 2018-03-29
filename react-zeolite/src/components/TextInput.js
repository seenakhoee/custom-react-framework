import React from 'react';

import { View } from 'react-zeolite';

import styles from 'react-zeolite-styles/TextInput';
import globalStyles from 'global-styles';


export default class  TextInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      focused: props.focused,
      invalid: props.invalid,
      disabled: props.disabled
    };
  }

  componentDidMount() {
    console.log(window);

    if (!window.TextInput && this.props.focused) {
      this.input.focus();
      this.input.select();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // if (this.props.focused) {
    //   this.input.focus();
    //   this.input.select();
    // }
  }

  handleFocus = event => {
    this.setState(state => ({
      focused: true
    }));
  }

  handleBlur = event => {
    this.setState(state => ({
      focused: false
    }));
  }

  render() {
    const {
      value,
      placeholder,
      focused,
      invalid,
      disabled,
      onChangeText,
      ...otherProps
    } = this.props;

    const containerStyle = [
      styles.container,
      globalStyles.fontDefault,
      this.state.focused && styles.focused,
      this.state.invalid && styles.invalid,
      this.state.disabled && styles.disabled
    ];

    return (
      <View tagName="input" style={containerStyle} placeholder={placeholder} value={value} disabled={this.state.disabled} tagRef={element => this.input = element}
            onChange={onChangeText} onFocus={this.handleFocus} onBlur={this.handleBlur} {...otherProps} />
    );
  }

}