import React from "react";
import {StyleSheet, Text, View, StatusBar} from "react-native";
import PropTypes from "prop-types";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";

const weatherOptions = {
  Haze: {
    iconName: "weather-hail",
    colors: ["#4DA0B0", "#D39D38"],
    title: "Haze",
    subtitle: "Haze",
  },
  Thunderstorm: {
    iconName: "weather-tornado",
    colors: ["#870000", "#190A05"],
    title: "Thunderstorm",
    subtitle: "Thunderstorm",
  },
  Drizzle: {
    iconName: "cloud-drizzle",
    colors: ["#5D4157", "#A8CABA"],
    title: "Drizzle",
    subtitle: "Drizzle",
  },
  Rain: {
    iconName: "weather-rainy",
    colors: ["#616161", "#9BC5C3"],
    title: "Rain",
    subtitle: "Rain",
  },
  Snow: {
    iconName: "cloud-snow",
    colors: ["#EFEFBB", "#D4D3DD"],
    title: "Snow",
    subtitle: "Snow",
  },
  Clear: {
    iconName: "weather-sunny",
    colors: ["#7474BF", "#348AC7"],
    title: "Clear",
    subtitle: "Clear",
  },
  Clouds: {
    iconName: "weather-cloudy",
    colors: ["#283048", "#859398"],
    title: "Clouds",
    subtitle: "Clouds",
  },
};

export default function Weather({temp, condition}) {
  return (
    <LinearGradient
      style={styles.container}
      colors={
        weatherOptions[condition]
          ? weatherOptions[condition].colors
          : ["#2BC0E4", "#EAECC6"]
      }>
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={
            weatherOptions[condition]
              ? weatherOptions[condition].iconName
              : "cloud-question"
          }
          size={96}
          color="white"
        />
        <Text style={styles.temp}>{temp}℃</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          {weatherOptions[condition]
            ? weatherOptions[condition].title
            : condition}
        </Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition] ? weatherOptions[condition].title : "??"}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
  },
  temp: {
    marginTop: 15,
    fontSize: 46,
    color: "white",
  },
  title: {
    fontSize: 43,
    color: "white",
    marginBottom: 10,
    fontWeight: "300",
  },
  subtitle: {
    fontSize: 25,
    fontWeight: "600",
    color: "white",
  },

  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    paddingHorizontal: 40,
  },
});
