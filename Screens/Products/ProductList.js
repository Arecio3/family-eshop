import React from 'react';
import { TouchableOpacity, View, Dimensions } from 'react-native';
import ProductCard from './ProductCard';

// Grabs device window width
let { width } = Dimensions.get('window');

const ProductList = (props) => {
    const { item } = props;
    return (
        // Allows you to touch anywhere
        <TouchableOpacity style={{ width: '50%' }}>
            <View style={{ width: width / 2, backgroundColor: 'gainsboro' }}>
            <ProductCard {...item}/>
            </View>
        </TouchableOpacity>
    )
}

export default ProductList;