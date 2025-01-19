import { icons } from "@/constants";
import { router } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { OSMMapProps } from "@/types/type";
import MapLibre from "./MapLibre";
import { useEffect, useRef } from "react";

import FontAwesome6 from "@react-native-vector-icons/fontawesome6";
import Ionicons from "@react-native-vector-icons/ionicons";

import { BottomSheetRefProps } from "./MapBottomSheet";

const RideLayoutRideRequest = ({
  children,
  location: { latitude, longitude, showEarlyMarker },
}: {
  children: React.ReactNode;
  location: OSMMapProps;
}) => {
  const bottomSheetRef = useRef<BottomSheetRefProps>(null);

  useEffect(() => {
    bottomSheetRef?.current?.scrollTo(-20);
  }, []);

  return (
    <GestureHandlerRootView className="flex-1">
      <View className="flex-1 bg-white ">
        <View className="flex h-screen  ">
          <View className="flex flex-row absolute z-10 top-16 items-center justify-start px-5">
            <TouchableOpacity
              onPress={() => {
                router.back();
              }}
            >
              <View className="w-10 h-10 bg-white rounded-full items-center justify-center">
                <Ionicons name="close" size={20} />
              </View>
            </TouchableOpacity>
          </View>
          <MapLibre
            location={{
              latitude: latitude,
              longitude: longitude,
              showEarlyMarker: showEarlyMarker,
            }}
          />
        </View>

        <View className="absolute bottom-3 w-full">{children}</View>
      </View>
    </GestureHandlerRootView>
  );
};

export default RideLayoutRideRequest;
