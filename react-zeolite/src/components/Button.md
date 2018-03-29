```jsx
const handlePress = event => {
  console.log('Don\'t taze me bro!');
};
<View>
  <View horizontal padding="small">
    <Button title="Primary Button" onPress={handlePress} /><Spacer />
    <Button disabled title="Disabled Button" onPress={handlePress} />
  </View>
  <View horizontal padding="small" backgroundColor="primaryDark">
    <Button title="Primary Button" onPress={handlePress} /><Spacer />
    <Button disabled title="Disabled Button" onPress={handlePress} />
  </View>
</View>
```
