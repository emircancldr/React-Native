import React from 'react';
import {
  View,
  FlatList,
} from 'react-native';
import TodoItem from '../TodoItem';
import { styles } from './styles';

const TodoList = ({ todos, onToggle, onDelete }) => {
  const renderItem = ({ item }) => (
    <TodoItem
      todo={item}
      onToggle={onToggle}
      onDelete={onDelete}
    />
  );

  const keyExtractor = (item) => item.id.toString();

  return (
    <FlatList
      data={todos}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      style={styles.list}
      contentContainerStyle={styles.listContent}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default TodoList;
