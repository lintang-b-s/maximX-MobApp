import { icons, images } from "@/constants";
import { router } from "expo-router";
import {
  Image,
  Pressable,
  SafeAreaView,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const Menu = () => {
  const handleCompleteProfilePress = () => {
    router.push("/(root)/edit-profile");
  };
  return (
    <SafeAreaView className="flex-1 ">
      <View className="flex-1 ">
        <TouchableWithoutFeedback onPress={handleCompleteProfilePress}>
          <View className="flex flex-row items-center justify-between w-full py-10 px-6 bg-white ">
            <View className="flex flex-row items-center gap-4">
              <Image source={images.maximLogo2} className="size-16 " />
              <View className="flex items-start ">
                <Text className="font-RobotoBold text-lg text-secondary-900">
                  +62 821 42424 424
                </Text>
                <Text className="font-Roboto text-secondary-800 text-lg">
                  Complete your profile{" "}
                </Text>
              </View>
            </View>
            <Image source={icons.forwardArrow} className="size-8" />
          </View>
        </TouchableWithoutFeedback>
        <View className="bg-general-600 flex h-full mt-4 gap-4">
          <View className="px-4 flex mt-4 gap-4">
            <TouchableWithoutFeedback>
              <View className="bg-general-100 rounded-2xl py-4 px-16 gap-4 flex items-center justify-between">
                <View className="flex flex-row items-center gap-2 px-12">
                  <Image
                    source={images.maximOjek}
                    className="size-24"
                    resizeMode="contain"
                  />
                  <Text className="font-RobotoBold text-secondary-900 text-xl">
                    Hasilkan uang selama perjalanan
                  </Text>
                </View>
                <View className="bg-black rounded-2xl w-full p-4 flex items-center justify-center">
                  <Text className="text-white font-Roboto text-base">
                    Daftarkan diri sebagai pengemudi
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>

            <TouchableHighlight
              underlayColor={"#6e216a"}
              activeOpacity={0.65}
              onPress={() => {}}
              className="rounded-2xl"
            >
              <View className="flex items-start justify-between rounded-2xl bg-[#7e247a] pb-4 ">
                <View className="flex flex-row items-center justify-between w-full">
                  <Text className="text-white textl-xl font-Roboto pl-4  break-words w-[50%]">
                    Pay for your rides with Maxim Wallet Kaspro
                  </Text>
                  <Image
                    source={images.kaspro}
                    className="size-24  mr-4"
                    resizeMode="contain"
                  />
                </View>

                <View className="bg-[#571C56] rounded-2xl ml-[5%] flex items-center justify-center py-3 px-12">
                  <Text className="text-white font-Roboto text-base">Add</Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>

          <TouchableHighlight
            underlayColor={"#DCDCDC"}
            activeOpacity={0.6}
            onPress={() => {}}
          >
            <View className="flex flex-row items-center gap-6 px-2 py-2">
              <Image source={icons.settings} className="size-8" />
              <Text className="text-[#666666] font-RobotoBold text-lg">
                Settings
              </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor={"#DCDCDC"}
            activeOpacity={0.6}
            onPress={() => {}}
          >
            <View className="flex flex-row items-center gap-6 px-2 py-2">
              <Image source={icons.support} className="size-8" />
              <Text className="text-[#666666] font-RobotoBold text-lg">
                Support
              </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor={"#DCDCDC"}
            activeOpacity={0.6}
            onPress={() => {}}
          >
            <View className="flex flex-row items-center gap-6 px-2 py-2">
              <Image source={icons.notification} className="size-8" />
              <Text className="text-[#666666] font-RobotoBold text-lg">
                Notifications
              </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor={"#DCDCDC"}
            activeOpacity={0.6}
            onPress={() => {}}
          >
            <View className="flex flex-row items-center gap-6 px-2 py-2">
              <Image source={icons.creditCard} className="size-8" />
              <Text className="text-[#666666] font-RobotoBold text-lg">
                Non-cash payment
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Menu;
