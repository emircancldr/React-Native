import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 6,
  },
  todoItem: {
    backgroundColor: '#90EE90',
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  todoItemCompleted: {
    backgroundColor: '#7e7f7fff',
  },
  todoText: {
    fontSize: 16,
    color: '#1a1a2e',
    fontWeight: '500',
    lineHeight: 22,
    flex: 1,
    textAlign: 'left',
  },
  todoTextCompleted: {
    textDecorationLine: 'line-through',
    color: '#ffffff',
  },
  deleteButton: {
    padding: 8,
    marginLeft: 10,
  },
  deleteIcon: {
    fontSize: 20,
  },
});
