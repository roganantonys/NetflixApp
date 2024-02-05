import { StyleSheet, Text, View } from "react-native";
import React from "react";

import MovieUrl from "../data/MovieUrl.js";
import MovieRow from "./MovieRow.js";
const MovieRows = () => {
  const data = MovieUrl;
  return (
    <View>
      {data.map((movie) => (
        <MovieRow title={movie.name} url={movie.url} />
      ))}
    </View>
  );
};

export default MovieRows;

const styles = StyleSheet.create({});
