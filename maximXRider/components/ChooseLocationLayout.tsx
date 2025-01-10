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
import OSMMap from "./Map";

import Search from "./Search";

const ChooseLocationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <GestureHandlerRootView>
      <View className="flex-1 bg-white">
        <View className="flex h-screen justify-between ">
          <Search />
          
          <OSMMap />
          <View></View>
          {/* biar childrennya di paling bawah */}
          {children}
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

export default ChooseLocationLayout;
