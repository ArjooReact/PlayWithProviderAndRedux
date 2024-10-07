
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text
} from 'react-native';
import { Provider } from 'react-redux';
//import { store } from './src/redux/homeRedux/Store';
import { store } from './src/redux/store/store';

//import store from './src/redux/homeRedux/Store';
import StackNavigator from './src/navigators/StackNavigator/StackNavigator';
import UserContextProvider from './src/ContextProvider/userContext/UserContextProvider';
function App(): React.JSX.Element {
  
  return (
    <Provider store={store}>
    <UserContextProvider>
    <StackNavigator></StackNavigator>
   </UserContextProvider>
   </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
