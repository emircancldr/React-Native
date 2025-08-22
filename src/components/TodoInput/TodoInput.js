import React, { useState } from 'react';
import {View,TextInput,TouchableOpacity,Text,KeyboardAvoidingView,Platform} from 'react-native';
import { styles } from './styles';

const TodoInput = ({ onAddTodo }) => {
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    if (text.trim().length > 0) {
      onAddTodo(text.trim());
      setText('');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Yapılacak..."
          placeholderTextColor="#999"
          value={text}
          onChangeText={setText}
          onSubmitEditing={handleAddTodo}
          returnKeyType="done"
          autoCorrect={false}
          autoCapitalize="sentences"
          blurOnSubmit={false}
        />
        <TouchableOpacity
          style={[styles.addButton, text.trim().length === 0 && styles.addButtonDisabled]}
          onPress={handleAddTodo}
          disabled={text.trim().length === 0}
          activeOpacity={0.7}
        >
          <Text style={styles.addButtonText}>Kaydet</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default TodoInput;
