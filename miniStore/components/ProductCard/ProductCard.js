import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './ProductCard.style';

const ProductCard = ({ product }) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: product.imgURL }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>{product.price}</Text>
      {product.inStock ? (
        <View style={styles.actionsRow}>
          <TouchableOpacity style={styles.cartButton}>
            <Text style={styles.cartText}>Sepete Ekle</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.actionsRow}>
          <TouchableOpacity style={styles.notifyButton}>
            <Text style={styles.notifyText}>Gelince Haber Ver</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default ProductCard;
