import { images } from "@/constants";
import { Image, ScrollView, View } from "react-native";

const SignUp = () => {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative m-auto h-[200px]">
          <Image source={images.maximLogo} className="h-[200px] w-full " />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
