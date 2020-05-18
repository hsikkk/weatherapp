import React from "react";
import {View, StyleSheet, Text, StatusBar} from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.text}>Getting the fucking weather</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingBottom: 100,
    backgroundColor: "#FDF6AA",
  },
  text: {
    fontSize: 50,
    color: "#2c2c2c",
  },
});
