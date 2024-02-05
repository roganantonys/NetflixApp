import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useEffect, useState } from "react";

const TreandingComponent = () => {
  const [movies, setMovies] = useState([]);
  console.log(movies);
  const API_KEY = "71314c117eed3ff57967b88f077cafc0";
  useEffect(() => {
    const movieData = async () => {
      await fetch(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
      )
        .then((response) => response.json())
        .then((data) => setMovies(data.results));
    };
    movieData();
  }, []);

  return (
    <View style={{marginTop:20}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {movies.slice(0, 10).map((movie, id) => (
          <Pressable style={{flexDirection:"row",alignItems:"center"}}>
            <Text
              style={{
                color: "white",
                fontSize: 85,
                fontWeight: "bold",
                position: "absolute",
                zIndex: 4,
                top:40,
                right:0,
                marginTop:20
              }}>
              {id + 1}
            </Text>
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

export default TreandingComponent;

const styles = StyleSheet.create({});
