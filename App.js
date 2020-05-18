import React from "react";
import Loading from "./Loading";
import * as Location from "expo-location";
import {Alert} from "react-native";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "010a0a33aa96dab9717ff7a044038f36";

export default class extends React.Component {
  state = {
    isLoading: true,
  };

  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: {temp},
        weather,
      },
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );

    this.setState({isLoading: false, temp: temp, condition: weather[0].main});
  };

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: {latitude, longitude},
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("ㅠㅠ", "위치를 찾을 수 없습니다.");
    }
  };

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const {isLoading, temp, condition} = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={Math.round(temp)} condition={condition} />
    );
  }
}
