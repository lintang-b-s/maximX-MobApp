import { View, Text } from "react-native";
import React from "react";
import Ionicons from "@react-native-vector-icons/ionicons";

export type SlidesDataOportunity = {
  title: string;
  description: string;
};

const Oportunity = ({ itemData }: { itemData: SlidesDataOportunity }) => {
  return (
    <View className=" items-center w-96 h-40 mr-10 px-4 py-4  border border-neutral-200 rounded-lg">
      <View className="flex flex-row items-center gap-4 w-full">
        <Ionicons name="flash" size={18} color="#FCA903" />
        <View className="flex items-start gap-2">
          <Text className="font-RobotoBold text-base ">{itemData.title}</Text>
          <Text className="text-general-500 text-base font-Roboto">
            {itemData.description}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Oportunity;
