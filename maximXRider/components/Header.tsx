import { icons } from "@/constants";
import { HeaderProps } from "@/types/type";
import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
const Header = ({ title, className }: HeaderProps) => {
  return (
    <View className={`flex flex-row w-full justify-between ${className}`}>
      <Text className="font-RobotoBold text-xl">{title}</Text>

    </View>
  );
};

export default Header;
