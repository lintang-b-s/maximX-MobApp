import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import LocationHeader from "./LocationHeader";
import { icons, images } from "@/constants";
import React from "react";

const EmptyList = ({ title }: { title: string }) => {
  return (
    <>
      <View className="flex mt-[50%] items-center w-full h-full ">
        <Image source={images.mascot} className="size-44 mb-6" />
        <Text className="text-lg font-Roboto text-secondary-900">
          Your {title} will be listed here.
        </Text>
      </View>
    </>
  );
};

export default EmptyList;
