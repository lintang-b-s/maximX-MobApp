import { View, Text, Image } from "react-native";
import React from "react";
import Ionicons from "@react-native-vector-icons/ionicons";

export type SlidesDataLearningHub = {
  title: string;
  image: any;
};

const LearningHub = ({ itemData }: { itemData: SlidesDataLearningHub }) => {
  return (
    <View className="relative  items-center w-96 h-40 mr-10   border border-neutral-200 rounded-lg ">
      <Image
        className="w-full h-full "
        resizeMode="cover"
        source={itemData.image}
      />
      <View className="absolute inset-0 flex items-end flex-row  justify-between px-4  pb-4">
        <Text className="text-white font-RobotoBold text-lg mr-6">
          {itemData.title}
        </Text>
        <Ionicons name="play" size={18} color="white" />
      </View>
    </View>
    //   <Text>{itemData.title}</Text>
  );
};

export default LearningHub;
