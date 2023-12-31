import React from 'react';
import {Text, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function Content() {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#cccccc',
      }}>
      <Text>text 1</Text>
      <Text>text 2</Text>
      <Text>text 3</Text>
      <Text>text 4</Text>
      <Text>text 5</Text>
      <Text>text 6</Text>
      <Text>text 7</Text>
      <Text>text 8</Text>
      <Text>text 9</Text>
      <Text>text 10</Text>
      <Text>text 11</Text>
      <Text>text 12</Text>
      <Text>text 13</Text>
      <Text>text 14</Text>
      <Text>text 15</Text>
    </View>
  );
}

function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Content />
    </GestureHandlerRootView>
  );
}

export default App;
