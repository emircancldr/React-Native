import React from "react";
import { SafeAreaView,View,Text,FlatList,StyleSheet } from 'react-native';
import news_data from './news_data.json'; 
import NewsCard from "./components/NewsCard";
import Banner from './components/Banner/Banner';
import news_banner_data from './news_banner_data.json';


const App = () => {

const renderNews = ({item}) => <NewsCard news={item} />;
const keyExtractor = (item) => item.id;

  return (
    <SafeAreaView style={styles.container} >
      <FlatList
        data={news_data}
        ListHeaderComponent={<Banner data={news_banner_data} />}
        renderItem={renderNews}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f1ececff',
  },
});
export default App;
