import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './SongCard.styles';

const SongCard = props => {
  const { song } = props;
  return (
    <View style={styles.container}>
      <Image source={{ uri: song.imageUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{song.title}</Text>
        <View style={styles.artistContainer}>
          <Text style={styles.artist}>{song.artist}</Text>
          <Text style={styles.year}>{song.year}</Text>
        </View>
      </View>
      {song.isSoldOut === false ? <Text>*</Text> : (
        <View style={styles.soldOutBox}>
          <Text style={styles.soldOutText}>TÜKENDİ</Text>
        </View>
      )}
    </View>
  );
};

export default SongCard;


