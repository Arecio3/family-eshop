import React, { useState, useEffect } from 'react'
import { View, StyleSheet, ActivityIndicator, Text, FlatList } from 'react-native'
import data from '../../data/products.json';
import ProductList from './ProductList';

const ProductContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(data)
        return () => {
         setProducts([])
        }
    },[])

    return (
        <View>
            <Text>Welcome to the Store</Text>
            <View style={{marginTop: 100}}>
            <FlatList 
                numColumns={2}
                data={products}
                renderItem={({item}) => <ProductList 
                key={item.id}
                item={item}
                />}
                keyExtractor={item => item.name}
            />
            </View>
          
        </View>
    )
}

export default ProductContainer