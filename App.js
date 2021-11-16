import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './Shared/Header';
// Screens
import ProductContainer from './Screens/Products/ProductContainer';

export default function App() {
  return (

    <View>
      <Header />
      <ProductContainer />
    </View>

  );
}