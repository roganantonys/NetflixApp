import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header.js";
import TreandingComponent from "../components/TreandingComponent.js";

import MovieRows from "../components/MovieRows.js";

const Homescreen = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "black" ,marginTop:"50"}}>
      <Header />
      <TreandingComponent />
      <MovieRows />
    </ScrollView>
  );
};

export default Homescreen;

const styles = StyleSheet.create({});
