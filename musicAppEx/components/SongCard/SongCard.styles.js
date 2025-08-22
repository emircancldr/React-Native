import React from 'react';
import {StyleSheet,View, Text, Image} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    margin: 1,
    backgroundColor: '#f4f7f6ff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 58,
    marginRight: 16,

  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  artistContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  artist: {
    fontSize: 16,
    color: '#555',
    marginRight: 8,
  },
  year: {
    fontSize: 14,
    color: '#888',
  },
  soldOutBox: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  soldOutText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 12,
  },
});