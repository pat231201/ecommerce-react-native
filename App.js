import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store';
import StackNavigator from './src/navigation/StackNavigator';
import {UserContext} from './src/UserContext';
import {ModalPortal} from 'react-native-modals';
const App = () => {
  return (
    <Provider store={store}>
      <UserContext>
        <StackNavigator />
        <ModalPortal />
      </UserContext>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
