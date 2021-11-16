import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Dimensions,
} from "react-native";
import data from "../../data/products.json";
import ProductList from "./ProductList";
import { Header } from "react-native-elements";
import SearchBar from '../../Shared/SearchBar';

let { height } = Dimensions.get("window");

const ProductContainer = () => {
  const [products, setProducts] = useState([]);



  useEffect(() => {
    setProducts(data);
    return () => {
      setProducts([]);
    };
  }, []);

  return (
    <>
      <Header
        placement="left"
        leftComponent={{ icon: "menu", color: "#000" }}
        centerComponent={{ text: "Value-Mart", style: { color: "#000" } }}
        rightComponent={{ icon: "home", color: "#000" }}
        containerStyle={{
            backgroundColor: '#fff'
        }}
      >
      </Header>
      <SearchBar />
      <View styles={styles.listContainer}>
        <View style={styles.container}>
          <FlatList
            numColumns={2}
            data={products}
            renderItem={({ item }) => <ProductList key={item.id} item={item} />}
            keyExtractor={(item) => item.name}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
  },
  listContainer: {
    height: height,
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProductContainer;
