// @flow

import React from 'react';

import { View, Text, List, Spacer, Divider, Header } from 'react-native';
//import { View, Text, List, Spacer, Divider, Header } from '../../../react-zeolite/src/components';
import { PolicySelector } from 'react-insureon';

import styles from '../styles/UserPortal';

import Immutable from 'immutable';


type Props = {}

type State = {
  linesOfBusiness: any,
  selectedQuotes: any
}

type LineOfBusiness = {
  title:  string,
  status: string,
  quotes: any
}

type Quote = {
  carrierName: string,
  carrierLogo: string,
  carrierRating: string,
  quoteNumber: number,
  quotePermium: number,
  items: any
}


/**
 * General component description.
 */
export default class UserPortal extends React.Component<Props, State> {

  props: Props
  state: State

  constructor(props: Props) {
    super(props);

    this.state = {
      linesOfBusiness: null,
      selectedQuotes: Immutable.Map()
    };
  }

  componentDidMount() {
    fetch('data.js')
      .then(data => data.json())
      .then(linesOfBusiness => {
        this.setState(state => ({
          linesOfBusiness: linesOfBusiness
        }));
      });
  }

  handleSelectQuote = (lineOfBusiness: LineOfBusiness, quote: Quote) => {
    console.log('>>>', lineOfBusiness.title);

    this.setState(state => ({
      selectedQuotes: state.selectedQuotes.update(lineOfBusiness, value => value != quote ? quote : null)
    }), () => console.log(this.state.selectedQuotes.count()));
  }

  render() {
    const props: Props = this.props;

    console.log('UserPortal#render()');

    return (
      <View style={[styles.container]}>
        <View style={{border: '1px solid red'}}>
          <Text fontSize="large">Large Text</Text>
        </View>

        <Spacer />

        <View style={{outline: '1px solid red'}}>
          <Text fontSize="medium">Medium Text</Text>
        </View>

        <Spacer />

        <View style={{outline: '1px solid red'}}>
          <Text>Small Text</Text>
        </View>

        <Spacer />

        <View style={{outline: '1px solid red'}}>
          <Text fontSize="xsmall">Extra Small Text</Text>
        </View>

        <Spacer />

        <Text fontWeight="bold">
          I am bold
          <Text style={[styles.red, {color: 'red'}]}>
            and red
          </Text>
        </Text>

        <Spacer />
        <Divider />
        <Spacer />

        <View flex="1" style={styles.main}>
          <PolicySelector linesOfBusiness={this.state.linesOfBusiness} selectedQuotes={this.state.selectedQuotes} onSelectQuote={this.handleSelectQuote} />
        </View>

        <View style={{height: 1000}} />

        <View style={{backgroundColor: 'hsl(0, 0%, 25%)', padding: 20, color: 'white'}}>
          Footer
        </View>
      </View>
    );
  }
  
}
