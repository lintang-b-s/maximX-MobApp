import CustomButton from "@/components/CustomButton";
import DestinationLocation from "@/components/DestinationLocation";
import FavoriteObjectColors from "@/components/FavoriteObjectColors";
import InputField from "@/components/InputField";
import PickUpLocation from "@/components/PickUpLocation";
import { icons, menuItems } from "@/constants";
import { useEditFavoriteRouteStore } from "@/store";
import { router } from "expo-router";
import { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const EditFavoriteRoute = () => {
  const {
    favoriteName,
    favoriteItemColor,
    sourceAddress,
    sourceLocationName,
    destinationAddress,
    destinationLocationName,
  } = useEditFavoriteRouteStore();

  const [pickedColor, setPickedColor] = useState(favoriteItemColor);
  const handlePickColorPress = (color: string) => {
    setPickedColor(color);
  };
  const [selectedMenu, selectSelectedMenu] = useState("");

  const handleFavoriteRouteSourcePress = () => {
    router.push("/(root)/choose-favorite-route-source");
  };

  const handleFavoriteRouteDestinationPress = () => {
    router.push("/(root)/choose-favorite-route-destination");
  };

  const handleAddFavoritePress = () => {
    router.back();
  };


  return (
    <SafeAreaView className="flex-1 bg-general-600">
      <View className="flex justify-between h-full items-center ">
        <View className="flex items-center justify-between border-b border-b-gray-300 bg-white p-3 ">
          <InputField
            label="Name"
            placeholder='Name (for example "Home")'
            value={favoriteName}
          />
          <FavoriteObjectColors
            pickedColor={pickedColor}
            setPickedColor={handlePickColorPress}
          />

          <PickUpLocation
            sourceAddress={sourceAddress}
            sourceLocationName={sourceLocationName}
            handlePickUpLocationPress={handleFavoriteRouteSourcePress}
          />

          <View className="mt-4">
            <DestinationLocation
              destinationLocationName={destinationLocationName}
              handleDestinationLocationPress={
                handleFavoriteRouteDestinationPress
              }
            />
          </View>
        </View>

        <View
          className="flex w-full justify-between gap-2 border-t-4 border-r-4 border-l-4 border-t-general-600 border-r-general-600 border-l-general-600 rounded-t-3xl   
         items-center px-4 py-6  bg-white h-[50%]"
        >
          <TouchableWithoutFeedback>
            <View className="flex flex-row justify-start w-96 h-16 items-center bg-general-600 rounded-xl py-4 px-6 gap-2 opacity-80 ">
              <Image source={icons.tune} className="w-6 h-6" />

              <Text className="text-lg text-general-900 font-Roboto ml-4  ">
                Details
              </Text>
            </View>
          </TouchableWithoutFeedback>

          <View className="flex flex-row justify-between items-center w-96 h-16 gap-4">
            <View className="flex flex-row justify-start items-center flex-1  bg-general-600 rounded-xl py-4 px-6 gap-2 ">
              <Image source={icons.cash} className="w-6 h-6" />

              <Text className="text-lg text-general-900 font-Roboto ml-4  ">
                Gopay
              </Text>
            </View>

            <TouchableWithoutFeedback>
              <View className="flex flex-row justify-start items-center flex-1 bg-general-600 rounded-xl py-4 px-6 gap-2 opacity-80 ">
                <Image source={icons.schedule} className="w-6 h-6" />

                <Text className="text-lg text-general-900 font-Roboto ml-4  ">
                  Now
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>

          <ScrollView
            horizontal={true}
            className="p-2"
            showsHorizontalScrollIndicator={false}
          >
            {menuItems.map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => selectSelectedMenu(item.title)}
              >
                <View
                  className={`rounded-2xl bg-white m-2  border  p-8 ${item.title === selectedMenu ? "border-general-700 border-4" : "border-b-2 border-slate-200"}`}
                >
                  <Image source={item.icon} className="h-12 w-12" />
                  <Text className="mt-4 font-RobotoSemiBold text-base text-secondary-900">
                    {item.title}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <CustomButton
            title="ADD TO FAVORITES"
            onPress={handleAddFavoritePress}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditFavoriteRoute;
