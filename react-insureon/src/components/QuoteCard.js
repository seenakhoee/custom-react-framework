import React from 'react';

import { View, Text, Image, Button, List, Spacer, Divider, Card } from 'react-native';

import styles from 'react-insureon-styles/QuoteCard';
import globalStyles from 'global-styles';


const quotePremiumStringOptions = {
  style: 'currency',
  currency: 'USD'
};

const itemLimitStringOptions = {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0
};

export default class QuoteCard extends React.Component {

  handleSelectQuote = event => {
    this.props.onSelectQuote(this.props.lineOfBusiness, this.props.quote);
  }

  render(props = this.props) {
    return (
      <Card style={styles.container}>
        <View horizontal padding="small">
          <View>
            <Image style={styles.headerImage} source={props.quote.carrierLogo} style={{width: 40, height: 40}} />
            <Spacer fontSize="xsmall" />
            <Text fontSize="xsmall">Rating: <Text fontWeight="bold">A+</Text></Text>
          </View>
          <View flex="1" style={{justifyContent: 'space-between', alignItems: 'flex-end'}}>
            <Text fontSize="large">{props.quote.carrierName}</Text>
            <Text fontSize="medium" fontWeight="bold">{(props.quote.quotePremium / 100).toLocaleString('en-US', quotePremiumStringOptions)}</Text>
          </View>
        </View>
        <Divider />
        <View horizontal padding="small" style={{alignItems: 'center'}}>
          <Text fontWeight="bold" flex="1">Quote #: {props.quote.quoteNumber.toString()}</Text>
          <Button title="Select" onPress={this.handleSelectQuote} />
        </View>
        <List itemStyle={styles.item}>
          {props.quote.items.map((item, index) => (
            <View key={item.itemName} horizontal xpadding="small" style={{alignItems: 'center', padding: '7px 10px', minHeight: 45}}>
              <Text fontSize="xsmall" flex="1">{item.itemName}</Text>
              <Text style={{padding: '0 10px'}}>&#9432;</Text>
              <Text fontSize="xsmall" style={{width: 80, textAlign: 'right'}}>{(item.itemLimit / 100).toLocaleString('en-US', itemLimitStringOptions)}</Text>
            </View>
          ))}
        </List>
        <Divider />
        <View>
          <Text padding="small" style={{textAlign: 'center'}}>View Detailed Proposal</Text>
        </View>
      </Card>
    );
  }

}

/*
      <List style={styles.container} dividerStyle={styles.containerDivider}>
        <View horizontal style={styles.header} accessibilityRole="header">
          <View>
            <Image style={styles.headerImage} source={props.quote.carrierLogo} />
            <Stack>
              <View horizontal>
                <Text>Rating: </Text>&nbsp;
                <Text style={styles.headerCarrierRating}>{props.quote.carrierRating}</Text>
              </View>
            </Stack>
          </View>
          <View style={styles.headerBinder}>
            <Text style={styles.headerBinderTitle}>{props.quote.carrierName}</Text>
            <Text style={styles.headerBinderCost}>${props.quote.quotePermium / 100}</Text>
          </View>
        </View>
        <View>
          <View horizontal style={styles.quote}>
            <Text style={styles.quoteNumber}>Quote #: {props.quote.quoteNumber}</Text>
            <Button title="Select" style={this.props.selected && styles.selectedButton} onPress={this.handleSelectQuote} />
          </View>
          <List itemContainerStyle={styles.listItemContainer} dividerStyle={styles.listDivider}>
            {props.quote.items.map((item, index) => (
              <View horizontal key={index} style={styles.listItem}>
                <Text style={styles.listItemName}>{item.itemName}</Text>
                <Text style={styles.listItemInfoIcon}>&#9432;</Text>
                <Text style={styles.listItemLimit}>${(item.itemLimit / 100).toLocaleString()}</Text>
              </View>
            ))}
          </List>
        </View>
        <View>
          <Link style={styles.footerLink}>View Detailed Proposal</Link>
        </View>
      </List>
*/
