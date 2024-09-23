import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from '../src/store';
import SplashScreen from 'react-native-splash-screen';
import { AuthProvider } from './context/AuthContext';
import AppNav from './navigation/AppNav';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <AuthProvider>
        <AppNav />
      </AuthProvider>
    </Provider>

  );
};

export default App;