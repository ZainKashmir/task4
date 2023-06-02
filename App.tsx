import {SectionList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import store from './store/store';
import {Provider} from 'react-redux';
import MoviesComponent from './components/MoviesComponent';
import LoadingOverlay from './components/LoadingOverlay';

export default function App() {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <LoadingOverlay />
      </View>
    </Provider>
  );
}
