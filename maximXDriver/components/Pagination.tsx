import { View, Text, StyleSheet, Animated, Dimensions } from "react-native";
import React from "react";
import { ItemDataType } from "./Slider";

const Pagination = ({
  data,
  index,
}: {
  data: ItemDataType[];
  index: number;
}) => {
  return (
    <View className=" flex flex-row w-full items-center justify-center">
      {data.map((_, idx) => {
        return (
          <Animated.View
            key={idx}
            className={`w-3 h-3 rounded-md  mr-1 ${idx == index ? "bg-black" : "bg-gray-400"}`}
          ></Animated.View>
        );
      })}
    </View>
  );
};

export default Pagination;
