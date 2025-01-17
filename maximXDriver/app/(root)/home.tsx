import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import RideLayout from "@/components/RideLayout";
import { useLocationStore } from "@/store";
import * as Location from "expo-location";
import Loading from "@/components/Loading";
import Ionicons from "@react-native-vector-icons/ionicons";

import {
  slidesDataLearningHubs,
  slidesOportunities,
  SlidesWeeklyChallengeData,
} from "@/constants";
import { BottomSheetRefProps } from "@/components/MapBottomSheet";
import {
  Gesture,
  GestureDetector,
  ScrollView,
} from "react-native-gesture-handler";

import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import GoButton from "@/components/button/GoButton";
import Slider from "@/components/Slider";
import WeeklyChallenge from "@/components/WeeklyChallenge";
import Oportunity from "@/components/Oportunity";
import LearningHub from "@/components/LearningHub";

const home = () => {
  const { userLatitude, userLongitude, setUserLocation, setSourceLocation } =
    useLocationStore();

  const progress = useSharedValue<number>(0);

  const ref = useRef<BottomSheetRefProps>(null);

  const [buttonLoading, setButtonLoading] = useState(false);
  const [buttonText, setButtonText] = useState("Go Online");

  const [page, setPage] = useState("drive"); // drive or earnings
  const handleChangePage = (newPage: string) => {
    setPage(newPage);
  };
  const scale = useSharedValue(1);

  const reanimatedGoButtonStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scaleX: scale.value,
      },
    ],
  }));

  useEffect(() => {
    const requestLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status != "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync();

      const address = await Location.reverseGeocodeAsync({
        latitude: location.coords?.latitude!,
        longitude: location.coords?.longitude!,
      });

      setUserLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        address: `${address[0].formattedAddress!.split(",").slice(1, 3).join(", ")}`,
      });
    };

    requestLocation();
  }, []);

  if (userLatitude == null) {
    return <Loading />;
  }

  const handlePressGoButton = () => {
    scale.value = withSpring(0.6, { duration: 1000 });

    setButtonLoading(true);
    setTimeout(() => {
      setButtonLoading(false);
      scale.value = withSpring(1);
      if (buttonText === "Go Online") {
        setButtonText("Go Offline");
      } else {
        setButtonText("Go Online");
      }
    }, 1000);
  };

  const ButtonChildren = () => {
    if (buttonLoading) {
      return <ActivityIndicator size={28} color={"white"} />;
    } else {
      return (
        <Text className={`text-lg font-RobotoSemiBold text-white `}>
          {buttonText}
        </Text>
      );
    }
  };

  const scroll1 = Gesture.Native();
  return (
    <RideLayout
      location={{
        latitude: userLatitude!,
        longitude: userLongitude!,
        showEarlyMarker: false,
      }}
      page={page}
      handleChangePage={handleChangePage}
    >
      <View className="flex-1">
        <View className="absolute  left-[35%] top-[-104px]">
          <View className="w-[135px]">
            <GoButton
              bgVariant={`${buttonText === "Go Online" ? "secondary" : "danger"}`}
              textVariant={`secondary`}
              active={true}
              className="rounded-full"
              style={[reanimatedGoButtonStyle]}
              onPress={handlePressGoButton}
            >
              <Text className={`text-lg font-RobotoSemiBold text-white `}>
                {ButtonChildren()}
              </Text>
            </GoButton>
          </View>
        </View>
        <GestureDetector gesture={scroll1}>
          <ScrollView
            contentContainerStyle={{ rowGap: 12, flex: 1 }}
            className=" px-3 py-3   "
          >
            <View className=" flex flex-row  items-center  justify-between px-5 py-3  border border-neutral-200 rounded-lg">
              <View className="gap-2 flex items-center">
                <Text className="text-general-500 text-base font-Roboto">
                  Earnings
                </Text>
                <Text className="font-RobotoBold text-xl ">$12.2</Text>
              </View>
              <View className="w-[2px] h-full bg-neutral-200" />

              <View className="gap-2 flex items-center">
                <Text className="text-general-500 text-base font-Roboto">
                  Online
                </Text>
                <Text className="font-RobotoBold text-xl ">1hr 12 min</Text>
              </View>

              <View className="w-[2px] h-full bg-neutral-200" />

              <View className="gap-2 flex items-center">
                <Text className="text-general-500 text-base font-Roboto">
                  Rides
                </Text>
                <Text className="font-RobotoBold text-xl ">02</Text>
              </View>
            </View>

            <Text className="text-2xl font-RobotoBold">Weekly Challenges</Text>
            <Slider
              items={SlidesWeeklyChallengeData}
              children={WeeklyChallenge}
            />

            <Text className="text-2xl font-RobotoBold">
              Opportunity for you
            </Text>

            <Slider items={slidesOportunities} children={Oportunity} />

            <Text className="text-2xl font-RobotoBold">Learning Hub</Text>

            <Slider items={slidesDataLearningHubs} children={LearningHub} />

            <Text className="text-2xl font-RobotoBold">Help and support</Text>

            <View className="flex items-start px-2">
              <View className="flex flex-row items-start gap-4">
                <Ionicons name="help-circle" size={24} color={"black"} />
              </View>
            </View>
          </ScrollView>
        </GestureDetector>
      </View>
    </RideLayout>
  );
};

export default home;
