import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@react-native-vector-icons/ionicons";
import { DropDownProps } from "@/types/type";

const Dropdown = ({ setShow, placeholder, label }: DropDownProps) => {
  return (
    <View className="my-2 w-full flex items-start  gap-2">
      <Text className="text-base font-RobotoSemiBold text-secondary-600 ">
        {label}
      </Text>
      <TouchableOpacity
        className="w-full"
        onPress={() => setShow((prev) => !prev)}
      >
        <View
          className={`flex flex-row w-full  p-4 justify-between items-center relative bg-white
                        rounded-lg  border-neutral-200   border-2`}
        >
          <Text className="  font-RobotoSemiBold   text-[15px]   text-left  ">
            {placeholder}
          </Text>
          <Ionicons
            name="triangle"
            size={7}
            style={{ transform: [{ scaleY: -1 }] }}
            className="mr-2"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Dropdown;
