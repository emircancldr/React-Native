import React, {useState, useEffect} from 'react';
import { SafeAreaView, StyleSheet, FlatList } from 'react-native';
import music_data from './music-data.json';
import SongCard from './components/SongCard/SongCard';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const [list, setList] = useState(music_data);
  const [searchText, setSearchText] = useState('');

  const renderSong = ({item}) => <SongCard song={item} />;

  const handleSearch = (text) => {
    filteredList = music_data.filter(song =>{
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    })
  };

  

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        keyExtractor={item => item.id}
        data={list}
        renderItem={renderSong}
        style={{ flex: 1 }}
      />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
