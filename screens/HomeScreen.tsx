import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import SearchBar from "../components/SearchBar";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <SearchBar />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
