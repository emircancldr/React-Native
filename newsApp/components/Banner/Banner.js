import React from 'react';
import { View,
        ScrollView,
        Image,
         Text 
        } from 'react-native';
import styles from './Banner.style';

const Banner = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>NEWS</Text>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        {data.map(item => (
          <Image key={item.id} source={{ uri: item.imageUrl }} style={styles.image} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Banner;
