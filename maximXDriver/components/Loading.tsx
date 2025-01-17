import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import React from "react";

const Loading = () => {
  return (
    <>
      <View className="absolute top-0 left-0 w-full h-full bg-black/20 " />
      <View
        className="items-center justify-center"
        style={[StyleSheet.absoluteFill]}
      >
        <ActivityIndicator color={"#2E2D59"} animating size="large" />
      </View>
    </>
  );
};

export default Loading;
