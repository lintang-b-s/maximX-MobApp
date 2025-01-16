import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

const DriverRegistrationComplete = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex flex-1 items-center justify-center px-4  py-2 gap-5  bg-white">
        <Image source={images.formChecklist} className="w-44  h-44" />
        <Text className="text-3xl font-RobotoBold">
          Your application is submitted and is under review.
        </Text>
        <Text className="text-base text-secondary-200 font-Roboto">
          You will be notified with application status or check the status by
          going to Settings.
        </Text>
        <CustomButton
          title="Explore the app"
          className="absolute bottom-2"
          active
          onPress={() => {
            router.replace("/(root)/home");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DriverRegistrationComplete;
