import { images } from "@/constants";
import { Image, Text, View } from "react-native";



const ChatHeader = () => {
  return (
    <View className="flex flex-row gap-10 pb-4 items-center w-[220px] pt-4">
          <Image source={images.driver} className="size-12 rounded-full" />
          <Text className="font-RobotoSemiBold text-lg  text-secondary-900">Abdul Migos</Text>
    </View>
  );
};

export default ChatHeader;
