import EmptyList from "@/components/EmptyList";
import {
  favoriteAddressesDummy,
  favoriteRoutesDummy,
  icons,
} from "@/constants";
import { useRef, useState } from "react";
import {
  FlatList,
  Image,
  Text,
  Touchable,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import FontAwesome6 from "@react-native-vector-icons/fontawesome6";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import { router } from "expo-router";
import { FavoriteAddress, FavoriteRoute } from "@/types/type";
import LocationHeader from "@/components/LocationHeader";
import { truncateText } from "@/lib/util";
import {
  useEditFavoriteAddressStore,
  useEditFavoriteRouteStore,
  useLocationStore,
} from "@/store";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Favorites = () => {
  const [plusClicked, setPlusClicked] = useState(false);
  const [addressClicked, setAddressClicked] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<FavoriteAddress>({
    favoriteLatitude: 0,
    favoriteLongitude: 0,
    favoriteAddress: "",
    favoriteItemColor: "",
    favoriteLocationName: "",
    favoriteName: "",
  });
  const bottomSheetRef = useRef<BottomSheet>(null);

  const [favoriteAddresses, setFavoriteAddresses] = useState<FavoriteAddress[]>(
    favoriteAddressesDummy
  );

  const { setSourceLocation, setDestinationLocation } = useLocationStore();

  const { setFavoriteLocation, setFavoriteName } =
    useEditFavoriteAddressStore();

  const {
    setFavoriteSourceLocation,
    setFavoriteDestinationLocation,
    setFavoriteRouteName,
  } = useEditFavoriteRouteStore();

  const [favoriteRoutes, setFavoriteRoutes] =
    useState<FavoriteRoute[]>(favoriteRoutesDummy);

  const rotatePlus = useSharedValue<string>("0deg");

  const handleRotate = () => {
    if (!plusClicked) {
      rotatePlus.value = withSpring("45deg");
    } else {
      rotatePlus.value = withSpring("0deg");
    }
  };

  const handleFavoriteAdresssPress = () => {
    router.push("/(root)/add-favorite-address");
  };

  const handleFavoriteRoutePress = () => {
    router.push("/(root)/add-favorite-route");
  };

  const handleAddressPress = (item: FavoriteAddress) => {
    setAddressClicked(true);
    setSelectedAddress(item);
  };

  const handleAdressPickup = () => {
    setSourceLocation({
      latitude: selectedAddress.favoriteLatitude,
      longitude: selectedAddress.favoriteLongitude,
      address: selectedAddress.favoriteAddress,
      locationName: selectedAddress.favoriteLocationName,
    });
    setAddressClicked(false);
    router.push("/(root)/(tabs)/home");
  };

  const handleAdressDestination = () => {
    setDestinationLocation({
      latitude: selectedAddress.favoriteLatitude,
      longitude: selectedAddress.favoriteLongitude,
      address: selectedAddress.favoriteAddress,
      locationName: selectedAddress.favoriteLocationName,
    });
    setAddressClicked(false);
    router.push("/(root)/(tabs)/home");
  };

  const handleSetOrder = (item: FavoriteRoute) => {
    setSourceLocation({
      latitude: item.favoriteSourceLatitude,
      longitude: item.favoriteSourceLongitude,
      address: item.favoriteSourceAddress,
      locationName: item.favoriteSourceLocationName,
    });

    setDestinationLocation({
      latitude: item.favoriteDestinationLatitude,
      longitude: item.favoriteDestinationLongitude,
      address: item.favoriteDestinationAddress,
      locationName: item.favoriteDestinationLocationName,
    });

    setFavoriteName({
      favoriteName: item.favoriteName,
      favoriteItemColor: item.favoriteItemColor,
    });

    router.push("/(root)/(tabs)/home");
  };

  const handleEditFavoriteAddress = (item: FavoriteAddress) => {
    setFavoriteLocation({
      latitude: item.favoriteLatitude,
      longitude: item.favoriteLongitude,
      address: item.favoriteAddress,
      locationName: item.favoriteLocationName,
    });
    setFavoriteName({
      favoriteName: item.favoriteName,
      favoriteItemColor: item.favoriteItemColor,
    });

    router.push("/(root)/edit-favorite-address");
  };

  const handleEditFavoriteRoute = (item: FavoriteRoute) => {
    setFavoriteSourceLocation({
      latitude: item.favoriteSourceLatitude,
      longitude: item.favoriteSourceLongitude,
      address: item.favoriteSourceAddress,
      locationName: item.favoriteSourceLocationName,
    });

    setFavoriteDestinationLocation({
      latitude: item.favoriteDestinationLatitude,
      longitude: item.favoriteDestinationLongitude,
      address: item.favoriteDestinationAddress,
      locationName: item.favoriteDestinationLocationName,
    });

    setFavoriteRouteName({
      favoriteName: item.favoriteName,
      favoriteItemColor: item.favoriteItemColor,
    });

    router.push("/(root)/edit-favorite-route");
  };

  return (
    <GestureHandlerRootView className="flex h-full ">
      <LocationHeader />
      <View className="flex-1 ">
        {favoriteAddresses.length === 0 && (
          <EmptyList title="favorite routes and addresses" />
        )}

        <FlatList
          data={favoriteRoutes}
          className="bg-general-600 p-4"
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => handleSetOrder(item)}>
                <View className="flex flex-row justify-between items-center w-full py-2 px-3 bg-white rounded-xl">
                  <View className="flex flex-row  items-center">
                    <View
                      className={`flex items-center justify-center rounded-full w-12 h-12 ${item.favoriteItemColor} `}
                    >
                      <Text className="text-white  font-RobotoBold text-xl capitalize">
                        {item.favoriteName[0]}
                      </Text>
                    </View>
                    <View className="flex items-start ml-4 ">
                      <Text className="font-Roboto text-lg text-secondary-900">
                        {item.favoriteName}
                      </Text>
                      <Text className="font-RobotoLight text-lg text-secondary-800">
                        {truncateText(item.favoriteSourceLocationName, 25)} →{" "}
                        {truncateText(item.favoriteDestinationLocationName, 25)}
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    className="p-4"
                    onPress={() => handleEditFavoriteRoute(item)}
                  >
                    <Image source={icons.pencil} className="size-8" />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
          keyboardShouldPersistTaps="handled"
          ListHeaderComponent={
            <View className="flex flex-row items-start justify-start py-2">
              <Text className="font-lg font-RobotoBold text-secondary-800">
                Orders
              </Text>
            </View>
          }
        />

        <FlatList
          data={favoriteAddresses}
          className="bg-general-600 p-4"
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleAddressPress(item)}>
              <View className="flex flex-row justify-between items-center w-full py-2 px-3 bg-white rounded-xl">
                <View className="flex flex-row  items-center">
                  <View
                    className={`flex items-center justify-center rounded-full w-12 h-12 ${item.favoriteItemColor} `}
                  >
                    <Text className="text-white  font-RobotoBold text-xl capitalize">
                      {item.favoriteName[0]}
                    </Text>
                  </View>
                  <View className="flex items-start ml-4 ">
                    <Text className="font-Roboto text-lg text-secondary-900">
                      {item.favoriteName}
                    </Text>
                    <Text className="font-RobotoLight text-lg text-secondary-800">
                      {item.favoriteLocationName}
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  className="p-4"
                  onPress={() => handleEditFavoriteAddress(item)}
                >
                  <Image source={icons.pencil} className="size-8" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            paddingBottom: 100,
          }}
          ListHeaderComponent={
            <View className="flex flex-row items-start justify-start py-2">
              <Text className="font-lg font-RobotoBold text-secondary-800">
                Addresses
              </Text>
            </View>
          }
        />

        {plusClicked && (
          <TouchableOpacity
            onPress={() => {
              setPlusClicked((prev) => !prev);
              handleRotate();
            }}
            className="absolute top-0 left-0 w-full h-full bg-black/30 "
          ></TouchableOpacity>
        )}

        {addressClicked && (
          <TouchableOpacity
            onPress={() => {
              setAddressClicked(false);
            }}
            className="absolute top-0 left-0 w-full h-full bg-black/50 "
          ></TouchableOpacity>
        )}
      </View>
      <TouchableOpacity
        className={`absolute bottom-[8%] right-[5%] shadow-md shadow-slate-500 rounded-full p-4 bg-general-100  `}
        activeOpacity={0.15}
        onPress={() => {
          setPlusClicked((prev) => !prev);
          handleRotate();
        }}
      >
        <Animated.Image
          source={icons.plus}
          className="size-6 "
          fadeDuration={800}
          style={[{ transform: [{ rotate: rotatePlus }] }]}
        />
      </TouchableOpacity>

      {plusClicked && (
        <View className="flex space-y-2 items-center justify-between absolute bottom-[15%] right-[5%] w-[28%] h-[11%]">
          <View className="flex flex-row w-full h-full justify-between items-center ">
            <View className="flex justify-between items-end h-full ">
              <TouchableOpacity onPress={handleFavoriteAdresssPress}>
                <View className="flex items-center justify-center p-2 bg-white rounded-lg shadow-md shadow-slate-500">
                  <Text className="font-RobotoBold text-base text-secondary-900">
                    Address
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleFavoriteRoutePress}>
                <View className="flex items-center justify-center p-2 bg-white rounded-lg shadow-md shadow-slate-500 ">
                  <Text className="font-RobotoBold text-base text-secondary-900">
                    Route
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View className="flex gap-4 items-end h-full justify-start">
              <TouchableOpacity
                onPress={handleFavoriteAdresssPress}
                className=" shadow-md shadow-slate-500 rounded-full p-4 bg-white"
                activeOpacity={0.15}
              >
                <FontAwesome6
                  name="location-dot"
                  iconStyle="solid"
                  color="#466e7a"
                  size={18}
                />
              </TouchableOpacity>

              <TouchableOpacity
                className=" shadow-md shadow-slate-500 rounded-full p-4 bg-white"
                activeOpacity={0.15}
                onPress={handleFavoriteRoutePress}
              >
                <FontAwesome6
                  name="route"
                  iconStyle="solid"
                  color="#466e7a"
                  size={18}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}

      {addressClicked && (
        <>
          <Text className="absolute bottom-[24%] left-[20%] font-Roboto text-white text-2xl">
            Where to insert the address?
          </Text>
          <BottomSheet
            keyboardBehavior="extend"
            ref={bottomSheetRef}
            snapPoints={["22%", "22%"]}
            index={0}
          >
            <BottomSheetView
              style={{
                flex: 1,
                padding: 20,
              }}
            >
              <View className="flex items-start justify-center gap-4">
                <TouchableOpacity onPress={handleAdressPickup}>
                  <View className="flex flex-row items-center justify-start gap-4">
                    <Image source={icons.circle} className="size-8" />
                    <Text className="font-RobotoBold text-lg text-secondary-900">
                      Pick-up point
                    </Text>
                  </View>
                </TouchableOpacity>
                <View className="w-[90%] self-end bg-secondary-800 h-[0.5px]" />

                <TouchableOpacity onPress={handleAdressDestination}>
                  <View className="flex flex-row items-center justify-start gap-4">
                    <Image
                      source={icons.circleDestination}
                      className="size-8"
                    />
                    <Text className="font-RobotoBold text-lg text-secondary-900">
                      Destination
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </BottomSheetView>
          </BottomSheet>
        </>
      )}
    </GestureHandlerRootView>
  );
};

export default Favorites;
