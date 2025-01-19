import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@react-native-vector-icons/ionicons";
import FontAwesome6 from "@react-native-vector-icons/fontawesome6";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

const CashOutComplete = () => {
  return (
    <SafeAreaView className="flex-1 bg-white ">
      <View className="flex-1 flex items-center justify-center gap-2 ">
        <View className="w-40 h-40 rounded-full bg-[#0C973A]  flex justify-center items-center">
          <Ionicons name="checkmark" color={"white"} size={90}  />
        </View>

        <Text className="text-2xl font-RobotoBold">
          $127.32 cashed out successfully!
        </Text>
        <Text className="text-general-500 text-base font-Roboto">
          Your money should be available within 2-3 hours
        </Text>
      </View>
      <View className="px-3 absolute bottom-5 flex items-center w-full">
        <CustomButton
          title="Done"
          bgVariant="white"
          textVariant="white"
          active
          className="w-[90%] border border-[#0C973A]"
          onPress={() => {
            router.replace("/(root)/home");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default CashOutComplete;
