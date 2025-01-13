import { images } from "@/constants";
import { useLocationStore } from "@/store";
import { Image, Text, View } from "react-native";

const LocationHeader = () => {
  const { userAddress } = useLocationStore();
  return (
    <>
      <View className="flex flex-row items-start justify-between px-6 bg-white">
        <Image
          className="w-[100px] h-[100px]"
          source={images.maximBig}
          resizeMode="contain"
        />

        <View className="mt-12">
          <Text className="font-Roboto text-lg text-general-900">
            {userAddress}
          </Text>
        </View>
      </View>
      <View className="w-full bg-secondary-200 h-[1px]" />
    </>
  );
};

export default LocationHeader;
