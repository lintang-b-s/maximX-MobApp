import { View, Text, Image } from "react-native";
import React from "react";
import RideLayoutRideRequest from "@/components/RideLayoutRideRequest";

import { useLocationStore, useRideRequestStore } from "@/store";
import { images } from "@/constants";
import FontAwesome6 from "@react-native-vector-icons/fontawesome6";
import Ionicons from "@react-native-vector-icons/ionicons";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
const RideRequest = () => {
  const { userLatitude, userLongitude, setUserLocation, setSourceLocation } =
    useLocationStore();
  const { rideRequest } = useRideRequestStore();
  return (
    <RideLayoutRideRequest
      location={{
        latitude: userLatitude!,
        longitude: userLongitude!,
        showEarlyMarker: false,
      }}
    >
      <View
        className="bg-white min-w-80 w-[80%] max-w-96  min-h-[300px] h-[30%] max-h-[400px]   self-center shadow-lg shadow-neutral-900
      rounded-lg py-4"
      >
        <View className="flex items-center w-full  relative">
          <View
            style={{
              position: "absolute",
              top: 0,
            }}
          >
            <AnimatedCircularProgress
              size={105}
              width={3}
              fill={(3 / 10) * 100}
              arcSweepAngle={200}
              rotation={260}
              tintColor="#F64823"
              backgroundColor="white"
            >
              {(fill) => <></>}
            </AnimatedCircularProgress>
          </View>

          <View className="relative top-2">
            <Image
              source={images.riderPhoto}
              className="  min-w-[90px] w-[40%] min-h-[90px] h-[25%] max-h-[150px] rounded-full"
              resizeMode="contain"
            />

            <View
              className="absolute bottom-[-10%] left-[3%] bg-white border border-neutral-200 flex  flex-row gap-2 items-center justify-center
               rounded-full w-[70px] h-[30px]"
            >
              <Ionicons name="star" size={13} />
              <Text className="font-RobotoBold text-base ">
                {rideRequest.riderRating}
              </Text>
            </View>
          </View>
          <Text className="font-RobotoBold text-lg mt-6">
            Pickup is {rideRequest.pickupETA} min away (
            {rideRequest.pickupDistance} KM)
          </Text>

          <View className="flex flex-row min-h-[50px] h-[20%]  w-full justify-between items-center border-t border-t-neutral-200 mt-10">
            <View className="flex flex-row gap-2 items-center justify-center w-[50%]  ">
              <FontAwesome6 name="clock" size={23} iconStyle="solid" />
              <Text className="font-RobotoBold text-base">
                {rideRequest.routeETA} min
              </Text>
            </View>
            <View className="w-[1px] h-full bg-neutral-200" />

            <View className="flex flex-row gap-2 items-center justify-center w-[50%] ">
              <FontAwesome6 name="route" size={23} iconStyle="solid" />
              <Text className="font-RobotoBold text-base">
                {rideRequest.routeDistance} km
              </Text>
            </View>
          </View>
        </View>
        <CustomButton
          title="Accept Ride"
          active
          bgVariant="tertiary"
          textVariant="tertiary"
          className="rounded-none absolute bottom-0"
          onPress={() => {
            router.back();
          }}
        />
      </View>
    </RideLayoutRideRequest>
  );
};

export default RideRequest;
