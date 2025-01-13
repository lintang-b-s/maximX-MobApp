import CustomButton from "@/components/CustomButton";
import FavoriteObjectColors from "@/components/FavoriteObjectColors";
import InputField from "@/components/InputField";
import PickUpLocation from "@/components/PickUpLocation";
import { useEditFavoriteAddressStore } from "@/store";
import { router } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const EditFavoriteAddress = () => {
  const {
    favoriteName,
    favoriteAddress,
    favoriteLocationName,
    favoriteItemColor,
  } = useEditFavoriteAddressStore();

  const [pickedColor, setPickedColor] = useState(favoriteItemColor);
  const handlePickColorPress = (color: string) => {
    setPickedColor(color);
  };

  const handleFavoriteLocationPress = () => {
    router.push("/(root)/choose-favorite-address");
  };

  const handleAddFavoritePress = () => {
    router.back();
  };

  return (
    <SafeAreaView className="flex-1  bg-general-600">
      <View className="flex flex-col h-screen">
        <View className="flex items-center justify-between border-b gap-2 border-b-gray-300 bg-white px-2 py-4 ">
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
            sourceAddress={favoriteAddress}
            sourceLocationName={favoriteLocationName}
            handlePickUpLocationPress={handleFavoriteLocationPress}
          />
        </View>
      </View>
      <CustomButton
        title="ADD TO FAVORITES"
        onPress={handleAddFavoritePress}
        className="absolute bottom-[2%]"
      />
    </SafeAreaView>
  );
};

export default EditFavoriteAddress;
