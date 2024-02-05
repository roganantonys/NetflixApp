import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { useState,useEffect } from "react";

const MovieRow = ({ title, url }) => {
  const API_KEY = "71314c117eed3ff57967b88f077cafc0";
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const movieData = async () => {
      await fetch(url)
        .then((response) => response.json())
        .then((data) => setMovies(data.results));
    };
    movieData();
  }, []);
  return (
    <View style={{marginTop:10}}>
      <Text style={{ fontSize: 19, fontWeight: "bold", color: "white" }}>
        {title}
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {movies.map((movie, id) => (
          <Pressable>
            <Image
              style={{
                width: 105,
                height: 152,
                borderRadius: 6,
                resizeMode: "cover",
                marginHorizontal: 4,
              }}
              source={{
                uri: `https://image.tmdb.org/t/p/original/${movie?.poster_path}`,
              }}
            />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default MovieRow;

const styles = StyleSheet.create({});
