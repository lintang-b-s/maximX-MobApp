import { icons } from "@/constants";
import { truncateText } from "@/lib/util";
import { Image, Text, TouchableOpacity, View } from "react-native";

const DestinationLocation = ({
  destinationLocationName,
  handleDestinationLocationPress,
}: {
  destinationLocationName: string | null;
  handleDestinationLocationPress: () => void;
}) => {
  return (
    <TouchableOpacity onPress={handleDestinationLocationPress}>
      <View className="flex flex-row  justify-start  w-96 h-14 items-center bg-general-600 rounded-xl py-4 px-6 gap-4 ">
        <View className="rounded-full h-8 w-8 items-center justify-center bg-general-900 ">
          <Image source={icons.flag} className="w-6 h-6" />
        </View>
        <Text className="text-base text-general-900 font-Roboto  ">
          {destinationLocationName
            ? truncateText(destinationLocationName, 34)
            : "Destination"}
        </Text>

        <Image
          source={icons.forwardArrow}
          className="w-8 h-8 absolute left-[290px]"
        />
      </View>
    </TouchableOpacity>
  );
};
export default DestinationLocation;
