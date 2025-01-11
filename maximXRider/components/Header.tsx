import { icons } from "@/constants";
import { HeaderProps } from "@/types/type";
import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
const Header = ({ title }: HeaderProps) => {
  return (
    <>
      <Text className="font-RobotoBold text-xl">{title}</Text>
    </>
  );
};

export default Header;
