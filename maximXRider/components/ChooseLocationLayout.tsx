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

import Search from "./Search";
import { OSMMapProps } from "@/types/type";
import MapLibre from "./MapLibre";

const ChooseLocationLayout = ({
  children,
  location: { latitude, longitude, showEarlyMarker },
  setLocation,
}: {
  children: React.ReactNode;
  location: OSMMapProps;
  setLocation: ({
    latitude,
    longitude,
    locationName,
    address,
  }: {
    latitude: number;
    longitude: number;
    locationName: string;
    address: string;
  }) => void;
}) => {
  return (
    <GestureHandlerRootView className="flex-1">
      <View className="flex-1 bg-white">
        <View className="flex h-screen justify-between ">
          <Search />
          <MapLibre
            location={{
              latitude: latitude,
              longitude: longitude,
              showEarlyMarker: showEarlyMarker,
            }}
            setLocation={setLocation}
          />

          {children}
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

export default ChooseLocationLayout;
