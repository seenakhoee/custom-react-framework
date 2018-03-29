```jsx
var initialState = {value: 'Input Text'};
var handleChangeText = event => {
  const value = event.target.value;
  setState(state => ({
    value: value
  }));
};
<View padding="small" style={{backgroundColor: 'hsl(0, 0%, 95%)'}}>
  <TextInput placeholder={'Hint Text'} value={''} /><Spacer />
  <TextInput placeholder={'Hint Text'} focused value={state.value} onChangeText={handleChangeText} /><Spacer />
  <TextInput placeholder={'Hint Text'} invalid value={'Invalid Input Text'} /><Spacer />
  <TextInput placeholder={'Hint Text'} disabled value={'Disabled Input Text'} />
</View>
```

<!--
```jsx
var initialState = {value: ''};
var handleChangeText = event => {
  const value = event.target.value;
  setState(state => ({
    value: value
  }));
};
<View>
  <Text>&#8203;{state.value.toUpperCase()}</Text>
  <Spacer />
  <TextInput type="email" placeholder={'Hint Text'} value={state.value} onChangeText={handleChangeText} />
  <Spacer />
  <TextInput placeholder={'Hint Text'} focused value={state.value} onChangeText={handleChangeText} />
  <Spacer />
  <TextInput placeholder={'Hint Text'} invalid value={state.value} onChangeText={handleChangeText} />
</View>
```
-->
