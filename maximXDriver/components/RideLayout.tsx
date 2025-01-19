import { icons } from "@/constants";
import { router } from "expo-router";
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  GestureHandlerRootView,
  NativeGesture,
  PanGesture,
} from "react-native-gesture-handler";

import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { OSMMapProps } from "@/types/type";
import MapLibre from "./MapLibre";
import { useCallback, useEffect, useRef, useState } from "react";

import FontAwesome6 from "@react-native-vector-icons/fontawesome6";

import MapBottomSheet, { BottomSheetRefProps } from "./MapBottomSheet";

const RideLayout = ({
  children,
  location: { latitude, longitude, showEarlyMarker },
  page,
  scroll,
  handleSetScrollViewActive,
  handleChangePage,
}: {
  children: React.ReactNode;
  location: OSMMapProps;
  page: string;
  scroll: PanGesture;
  handleSetScrollViewActive: (active: boolean) => void;

  handleChangePage: (page: string) => void;
}) => {
  const bottomSheetRef = useRef<BottomSheetRefProps>(null);

  useEffect(() => {
    bottomSheetRef?.current?.scrollTo(-20);
  }, []);

  return (
    <GestureHandlerRootView className="flex-1">
      <View className="flex-1 bg-white">
        <View className="flex h-screen  ">
          <View className="flex flex-row absolute z-10 top-16 items-center justify-start px-5">
            <TouchableOpacity onPress={() => {}}>
              <View className="w-10 h-10 bg-white rounded-full items-center justify-center">
                <FontAwesome6 name="bars" size={20} iconStyle="solid" />
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

        <MapBottomSheet
          page={page}
          ref={bottomSheetRef}
          handleChangePage={handleChangePage}
          scroll={scroll}
          handleSetScrollViewActive={handleSetScrollViewActive}
        >
          {children}
        </MapBottomSheet>
      </View>
    </GestureHandlerRootView>
  );
};

export default RideLayout;
