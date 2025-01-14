import RideLayout from "@/components/RideLayout";
import { images } from "@/constants";
import { useLocationStore } from "@/store";
import { LinearProgress } from "@rneui/themed";
import React from "react";
import { Image, Text, View } from "react-native";
import FontAwesome6 from "@react-native-vector-icons/fontawesome6";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

const LookingNearbyDriver = () => {
  const {
    userLatitude,
    userLongitude,
    sourceLocationName,
    sourceAddress,
    destinationLocationName,
    destinationAddress,
  } = useLocationStore();

  return (
    <RideLayout
      location={{
        latitude: userLatitude!,
        longitude: userLongitude!,
        showEarlyMarker: false,
      }}
    >
      <View className="flex items-center  ">
        <Text className="text-xl font-RobotoBold text-secondary-900  mb-2">
          Looking for nearby drivers
        </Text>
        <LinearProgress
          style={{ width: "80%", height: 2.5, borderRadius: 100 }}
          color="#FEBE00"
          animation={{ duration: 2000 }}
          trackColor="#DEDEE8"
        />

        <Image
          source={images.lookingForCar}
          className="size-52"
          resizeMode="contain"
        />
        <View className="w-full h-[2px] bg-general-800 " />
        <View className="flex items-start w-full p-4  gap-4">
          <View className="flex flex-row items-center gap-4">
            <FontAwesome6
              name="location-dot"
              iconStyle="solid"
              color="black"
              size={16}
            />
            <View className="flex items-start  ">
              <Text className="text-xl font-RobotoBold text-secondary-900">
                {sourceLocationName}
              </Text>

              <Text className="font-Roboto text-secondary-800 text-base">
                {sourceAddress}
              </Text>
            </View>
          </View>

          <View className="w-[95%] ml-[8%] h-[2px] bg-general-800 " />

          <View className="flex flex-row items-center gap-4">
            <FontAwesome6
              name="square"
              iconStyle="solid"
              color="black"
              size={16}
            />
            <View className="flex items-start  ">
              <Text className="text-xl font-RobotoBold text-secondary-900">
                {destinationLocationName}
              </Text>

              <Text className="font-Roboto text-secondary-800 text-base">
                {destinationAddress}
              </Text>
            </View>
          </View>

          <View className="w-[95%] ml-[8%] h-[2px] bg-general-800 " />

          <View className="flex flex-row items-center gap-4">
            <FontAwesome6
              name="credit-card"
              iconStyle="solid"
              color="black"
              size={16}
            />
            <View className="flex items-start  ">
              <Text className="text-xl font-RobotoBold text-secondary-900">
                Rp 5000
              </Text>

              <Text className="font-Roboto text-secondary-800 text-base">
                Gopay
              </Text>
            </View>
          </View>

          <CustomButton title="udah dapet driver (dummy)" onPress={() => {
            router.push("/(root)/ride")
          }}/>
        </View>
      </View>
    </RideLayout>
  );
};

export default LookingNearbyDriver;
