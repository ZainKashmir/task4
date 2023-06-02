import {View, Text, FlatList, StyleSheet, Animated} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import React, {useEffect, useState, useRef} from 'react';
import {fetchMovies} from '../utils/http';
import {setMovies} from '../store/reducer/moviesSlice';

export default function MoviesComponent() {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies.data);
  useEffect(() => {
    const getMovies = async () => {
      try {
        const allmovies = await fetchMovies();
        dispatch(setMovies(allmovies));
      } catch (error) {
        console.log(error, 'error ');
      }
    };
    getMovies();
  }, []);

  const renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <Text style={styles.Text}>Title: {item.title}</Text>
        <Text style={styles.Text}>Release Year: {item.releaseYear}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={movies.movies}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
    backgroundColor: '#ffb6c1',
  },
  Text: {
    fontSize: 20,
    color: 'black',
  },
  item: {
    backgroundColor: 'transparent',
    borderColor: '#3333',
    borderWidth: 2,
    padding: 60,
    marginVertical: 15,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
});
