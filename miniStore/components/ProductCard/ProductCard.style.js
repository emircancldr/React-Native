import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


export default StyleSheet.create({
  card: {
    width: 170, // Sabit genişlik
    padding: 13,
    margin: 8,
    backgroundColor: "#eee5e5ff",
    borderRadius: 5,
    elevation: 2,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 196,
    borderRadius: 10,
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  price: {
    fontSize: 22,
    color: "#000000ff",
    marginTop: 4,
  },
    actionsRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginTop: 10,
    },
    cartButton: {
        backgroundColor: "#4CAF50",
        padding: 10,
        borderRadius: 5,
        textAlign: "center",
        justifyContent: "center",
    },
    cartText: {
        color: "#fff",
        fontWeight: "bold",
        
    },
    notifyButton: {
        backgroundColor: "#2196F3",
        padding: 10,
        borderRadius: 5,
        
    },
    notifyText: {
        color: "#fff",
        fontWeight: "bold",
    },
    
});


