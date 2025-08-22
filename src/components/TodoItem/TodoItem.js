import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { styles } from './styles';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  const handlePress = () => {
    onToggle(todo.id);
  };

  const handleDelete = () => {
    onDelete(todo.id);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.todoItem, todo.completed && styles.todoItemCompleted]}
        onPress={handlePress}
        activeOpacity={0.7}
      >
        <Text 
          style={[
            styles.todoText, 
            todo.completed && styles.todoTextCompleted
          ]} 
          numberOfLines={2}
        >
          {todo.text}
        </Text>
        
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={handleDelete}
          activeOpacity={0.7}
        >
          <Text style={styles.deleteIcon}>🗑️</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;
