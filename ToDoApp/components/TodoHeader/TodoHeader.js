import React from 'react';
import {View,Text} from 'react-native';
import { styles } from './styles';

const TodoHeader = ({ activeCount }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Yapılacaklar</Text>
      <Text style={styles.count}>{activeCount}</Text>
    </View>
  );
};

export default TodoHeader;
