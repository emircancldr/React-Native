import React from "react";
import { SafeAreaView, Text, StyleSheet, FlatList, TextInput, View } from "react-native";
import ProductCard from "./components/ProductCard";
import product_data from "./product_data.json";


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>MİNİ STORE</Text>
      <TextInput
        style={styles.search}
        placeholder="Ara..."
        placeholderTextColor="#c200f7ff"
      />
      <FlatList
        data={product_data}
        renderItem={({ item }) => <ProductCard product={item} />}
        numColumns={2}
        contentContainerStyle={{ padding: 9 }}
        keyExtractor={(item) => item.id.toString()}

        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2ff",
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#8d3afc",
    marginVertical: 10,
    marginLeft: 4,
  },
  search: {
    backgroundColor: "#d7c9c9ff",
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginBottom: 12,
    marginHorizontal: 2,
  },
});

export default App;
