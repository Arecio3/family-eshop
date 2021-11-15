import React from 'react'
import { 
    StyleSheet,
    View,
    Dimensions,
    Image,
    Text,
    Button
} from 'react-native'

let { width } = Dimensions.get('window');

const ProductCard = (props) => {
    const { name, price, image, countInStock } = props;

    return (
        <View style={styles.container}>
            <Image styles={styles.image}/>
            <View styles={styles.card}/>
            {/* Title */}
            <Text style={styles.title}>
                {/* Calc Max Size */}
                {name.length > 15 ? name.substring(0, 15 - 3)
                 + '...' : name
                }
            </Text>
            {/* Price */}
            <Text styles={styles.price}>${price}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        width: width / 2 - 20,
        height: width / 1.7, 
        padding: 10,
        borderRadius: 10,
        marginTop: 55,
        marginBottom : 5,
        marginLeft: 10,
        alignItems: 'center',
        elevation: 8,
        backgroundColor: 'white',
    },
    image: {
        width: width / 2 - 20 - 10,
        height: width / 2 - 20 - 30,
        backgroundColor: 'transparent',
        position: 'absolute',
        top: -45,
    },
    card: {
        marginBottom: 10,
        height: width / 2 - 20 - 90,
        backgroundColor: 'transparent',
        width: width / 2 - 20 - 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center'
    },
    price: {
        fontSize: 20,
        color: 'orange',
        marginTop: 10
    }
})

export default ProductCard;