import { icons } from "@/constants";
import { truncateText } from "@/lib/util";
import { Image, Text, TouchableOpacity, View } from "react-native";

const PickUpLocation = ({
  sourceLocationName,
  sourceAddress,
  handlePickUpLocationPress,
}: {
  sourceLocationName: string | null;
  sourceAddress: string | null;
  handlePickUpLocationPress: () => void;
}) => {
  return (
    <TouchableOpacity onPress={handlePickUpLocationPress}>
      <View className="flex justify-start w-96  items-center bg-general-600 rounded-xl py-4 px-6 ">
        <View className="flex flex-row items-center justify-start w-96 px-6  gap-2">
          <Image source={icons.circle} className="mr-5 h-8 w-8" />

          <View className="flex justify-start items-start ">
            <Text className="text-general-900 font-Roboto text-base">
              Pick-Up Location
            </Text>

            <Text className="text-secondary-900 font-Roboto text-lg ">
              {sourceLocationName
                ? truncateText(sourceLocationName!, 30)
                : "source address"}
            </Text>

            <Text className="text-secondary-400 font-Roboto text-base ">
              {sourceAddress
                ? truncateText(sourceAddress!, 30)
                : "source address"}
            </Text>
          </View>

          <Image
            source={icons.forwardArrow}
            className="w-8 h-8 absolute left-[290px]"
          />
        </View>

        <View className="flex  flex-row px-6 justify-start items-center w-72 p-1 rounded-xl mt-2  ml-12 bg-white">
          <Text className="font-Roboto text-secondary-400">Pick-up point</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PickUpLocation;
