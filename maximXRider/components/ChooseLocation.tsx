import { icons } from "@/constants";
import { ChooseLocationProps } from "@/types/type";
import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

const ChooseLocation = ({
  title,
  locationName,
  locationAddress,
}: ChooseLocationProps) => {
  return (
    <View className="flex items-start w-full   relative justify-start   rounded-t-3xl shadow-lg  bg-white min-h-[25%] ">
      <View className="absolute top-[-15%] left-[80%] z-10 w-14 h-14 shadow-lg  bg-general-700 rounded-full items-center justify-center">
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
        >
          <Image source={icons.check} className="w-8 h-8" />
        </TouchableOpacity>
      </View>
      <View className="flex flex-row items-center  justify-start p-6  border-b-2  border-slate-200 w-full">
        <Text className="font-RobotoBold text-xl  ">{title}</Text>
      </View>

      <View className="flex flex-row mt-4 pb-10 px-6 pt-2 justify-start items-center gap-6">
        <Image source={icons.circle} className="h-6 w-6" />
        <View className="flex justify-center items-start f ">
          <Text className="text-lg font-Roboto ">{locationName}</Text>
          <Text className="text-base font-RobotoLight ">{locationAddress}</Text>
        </View>
      </View>
    </View>
  );
};

export default ChooseLocation;
