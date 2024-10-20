import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from '../src/store';
import SplashScreen from 'react-native-splash-screen';
import AppNav from './navigation/AppNavigator';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <AppNav />
    </Provider>
  );
};

export default App;