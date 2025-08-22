import React, { useState } from 'react';
import {SafeAreaView,StyleSheet,View, Alert} from 'react-native';
import TodoHeader from './components/TodoHeader';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';



const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    Alert.alert(
      'Görevi Sil',
      'Bu görevi silmek istediğinizden emin misiniz?',
      [
        {
          text: 'İptal',
          style: 'cancel',
        },
        {
          text: 'Sil',
          style: 'destructive',
          onPress: () => {
            setTodos(todos.filter((todo) => todo.id !== id));
          },
        },
      ]
    );
  };

  const activeCount = todos.filter((todo) => !todo.completed).length;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TodoHeader activeCount={activeCount} />
        <TodoList
          todos={todos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
        <TodoInput onAddTodo={addTodo} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  content: {
    flex: 1,
  },
});

export default App;
