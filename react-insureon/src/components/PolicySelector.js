import React from 'react';

import { View, Text, Image, Button, List, Spacer, Divider, Header, Card } from 'react-native';
import { QuoteCard } from 'react-insureon';

import styles from 'react-insureon-styles/PolicySelector';
import globalStyles from 'global-styles';

export default class PolicySelector extends React.Component {

  handleSelectQuote = (lineOfBusiness, quote) => {
    this.props.onSelectQuote(lineOfBusiness, quote);
  }

  render(props = this.props) {
    if (!props.linesOfBusiness) {
      return <Text>Loading...</Text>;
    }

    return (
      <View>
        <Text fontSize="xlarge">Select your Policies</Text>
        <Spacer />
        <Text>These quotes are estimates only. They are not a contract, binder, or agreement to extend coverage.</Text>

        {props.linesOfBusiness.map(lineOfBusiness => (
          <View key={lineOfBusiness.title}>
            <Spacer size="large" />
            <Header style={[{backgroundColor: 'hsl(0, 0%, 95%)', margin: '0 -10px'}]}>
              <View style={{padding: 10, paddingTop: 10, paddingBottom: 10, borderBottom: '1px solid hsl(0, 0%, 85%)'}}>
                <Text fontSize="large">
                  <Text fontWeight="bold">{lineOfBusiness.title.toUpperCase()}</Text> <Text fontStyle="italic">({lineOfBusiness.status})</Text>
                </Text>
              </View>
            </Header>
            <Spacer size="medium" />
            <List horizontal spacing="medium" itemStyle={styles.item}>
              {lineOfBusiness.quotes.map(quote => (
                <QuoteCard key={quote.carrierName} lineOfBusiness={lineOfBusiness} quote={quote} onSelectQuote={this.handleSelectQuote} />
              ))}
            </List>
          </View>
        ))}

        <View horizontal style={[{position: 'fixed', zIndex: 1, bottom: 0, marginLeft: -20, backgroundColor: 'hsl(0, 0%, 25%)', width: '100%', maxWidth: 1280, padding: '10px 20px', transform: 'translate(0, 100%)', transition: 'transform 0.125s ease-out', alignItems: 'center'},
                                 props.selectedQuotes.some(quote => quote != null) && {transform: null}]}>
          <Text flex="1" style={{color: 'white'}}>5%</Text>
          <Button title="Continue" />
        </View>
      </View>
    );
  }

}

/*
            <Stack spacing={0} style={styles.quotesContainer} itemContainerStyle={styles.quotesItemContainer}>
              {lineOfBusiness.quotes.map(quote => (
                <QuoteCard key={quote.carrierName} selected={quote == props.selectedQuotes.get(lineOfBusiness.title)} lineOfBusiness={lineOfBusiness.title} quote={quote} onSelectQuote={this.handleSelectQuote} />
              ))}
            </Stack>
*/
