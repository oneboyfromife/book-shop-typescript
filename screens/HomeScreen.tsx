import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";
import { StatusBar } from "expo-status-bar";
import { bookData } from "../book-data.json";

const HomeScreen = () => {
  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 10,
      }}
    >
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Text
          style={{
            marginTop: 30,
            color: "gray",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Book Shop
        </Text>
      </View>
      <SearchBar />

      <FlatList
        data={bookData}
        keyExtractor={({ id }, index) => id}
        numColumns={2}
        renderItem={({ item }) => (
          <ProductCard
            key={item.id}
            year={item.published}
            title={item.title}
            author={item.author}
            imgUrl={item.imgUrl}
          />
        )}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default HomeScreen;
