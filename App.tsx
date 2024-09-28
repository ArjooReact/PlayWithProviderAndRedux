
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text
} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/homeRedux/Store';
//import store from './src/redux/homeRedux/Store';
import StackNavigator from './src/navigators/StackNavigator/StackNavigator';
import UserContextProvider from './src/ContextProvider/userContext/UserContextProvider';
import LoginContextProvider from './src/ContextProvider/userContext/LoginContextProvider';
import { PersistGate } from 'redux-persist/integration/react';
import {persistor} from './src/redux/homeRedux/Store'
import { useSelector } from 'react-redux'
function App(): React.JSX.Element {
  return (
    <Provider store={store}>
        <PersistGate loading={<Text style={{alignSelf:'center',marginTop:60}}>Loading....</Text>} persistor={persistor}> 
       <LoginContextProvider>
    <UserContextProvider> 
   
    <StackNavigator></StackNavigator>
   
    </UserContextProvider>
   </LoginContextProvider>
    </PersistGate> 
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
