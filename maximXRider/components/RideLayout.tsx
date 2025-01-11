import { icons } from "@/constants";
import { router } from "expo-router";
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { OSMMapProps } from "@/types/type";
import MapLibre from "./MapLibre";
import { useRef } from "react";

const RideLayout = ({
  children,
  location: { latitude, longitude, showEarlyMarker },
}: {
  children: React.ReactNode;
  location: OSMMapProps;
}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  return (
    <GestureHandlerRootView className="flex-1">
      <View className="flex-1 bg-white">
        <View className="flex h-screen  ">
          <View className="flex flex-row absolute z-10 top-16 items-center justify-start px-5">
            <TouchableOpacity onPress={() => router.back()}>
              <View className="w-10 h-10 bg-white rounded-full items-center justify-center">
                <Image
                  source={icons.arrowBack}
                  resizeMode="contain"
                  className="w-6 h-6"
                />
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
          {children}
        </View>
        <BottomSheet
          keyboardBehavior="extend"
          ref={bottomSheetRef}
          snapPoints={["55%", "80%"]}
          index={0}
        >
          <BottomSheetView
            style={{
              flex: 1,
              padding: 20,
            }}
          >
            {children}
          </BottomSheetView>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
};

export default RideLayout;
