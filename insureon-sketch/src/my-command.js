import React from 'react';
import Sketch, { Text, View, Artboard } from 'react-sketchapp';
import { Spacer, Divider } from 'react-zeolite';
import chroma from 'chroma-js';

// take a hex and give us a nice text color to put over it
const textColor = (hex) => {
  const vsWhite = chroma.contrast(hex, 'white');

  if (vsWhite > 4) {
    return '#FFF';
  }

  return chroma(hex)
    .darken(3)
    .hex();
};

const Swatch = ({ name, hex }) => (
  <View name={`Swatch ${name}`} style={{height: 96, width: 96, margin: 5, backgroundColor: hex, padding: 10}}>
    <Text name="Swatch Name" style={{ color: textColor(hex), fontWeight: 'bold' }}>
      {name}
    </Text>
    <Text name="Swatch Hex" style={{color: textColor(hex)}}>
      {hex}
    </Text>
  </View>
);

const App = ({colors}) => (
  <Artboard name="Insureon Styles" style={{padding: 10}}>
    <Text style={{fontSize: 20, marginBottom: -6}}>Colors</Text>
    <Divider style={{marginTop: 10, marginBottom: 10}} />
    <View style={{flexDirection: 'row', flexWrap: 'wrap', margin: -5}}>
      {Object.keys(colors).map(color => (
        <Swatch name={color} hex={colors[color]} key={color} />
      ))}
    </View>
    <View style={{height: 20}} />
    <Text style={{fontSize: 20, marginBottom: -6}}>Type</Text>
    <Divider style={{marginTop: 10, marginBottom: 10}} />
    <View>
      <Text style={{fontSize: 30}}>Large Heading</Text>
      <Text style={{fontSize: 20}}>Medium Heading</Text>
      <Text style={{fontSize: 15}}>Small Heading</Text>
    </View>
  </Artboard>
);

const colorList = {
  Haus: '#F3F4F4',
  Night: '#333',
  Sur: '#96DBE4',
  'Sur Dark': '#24828F',
  Peach: '#EFADA0',
  'Peach Dark': '#E37059',
  Pear: '#93DAAB',
  'Pear Dark': '#2E854B',
};

export default context => {
  context.document.showMessage("It's alive 🙌");

  Sketch.render(<App colors={colorList} />, context.document.currentPage());
}
