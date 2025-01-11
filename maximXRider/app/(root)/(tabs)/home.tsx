import CustomButton from "@/components/CustomButton";
import { icons, images, menuItems } from "@/constants";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  Alert,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocationStore, useOrderDetailStore } from "@/store";
import * as Location from "expo-location";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

function truncateText(text: string, maxLength: number = 34): string {
  return text.length > maxLength ? `${text.slice(0, maxLength)}....` : text;
}

export default function Home() {
  const {
    setUserLocation,
    setSourceLocation,
    userAddress,
    userLatitude,
    userLongitude,
    sourceAddress,
    sourceLocationName,
    destinationAddress,
    destinationLocationName,
  } = useLocationStore();
  const { isTip, tipValue, differentPhoneNumber, additionalInformation } =
    useOrderDetailStore();

  const currentDate = new Date();

  const [date, setDate] = useState(currentDate);

  const [selectedMenu, selectSelectedMenu] = useState("");

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handlePickUpLocationPress = () => {
    router.push("/(root)/choose-pickup-location");
  };

  const handleDestinationLocationPress = () => {
    router.push("/(root)/choose-destination-location");
  };

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

  useEffect(() => {
    if (!sourceAddress && !sourceLocationName && userAddress) {
      setSourceLocation({
        latitude: userLatitude!,
        longitude: userLongitude!,
        locationName: userAddress,
        address: userAddress,
      });
    }
  }, [userAddress, sourceAddress, sourceLocationName]);

  const handleOrderPress = () => {
    router.push("/(root)/ride");
  };

  const handleDetailPress = () => {
    router.push("/(root)/order-detail");
  };

  const handleDateChange = (
    event: DateTimePickerEvent,
    date?: Date | undefined
  ) => {
    if (Platform.OS === "android") {
      setShowDatePicker(false);
    }

    if (event.type === "neutralButtonPressed") {
      setDate(new Date(0));
    } else {
      setDate(date!);
      setShowTimePicker(true);
    }
  };

  const handleTimeChange = (
    event: DateTimePickerEvent,
    date?: Date | undefined
  ) => {
    if (Platform.OS === "android") {
      setShowTimePicker(false);
    }

    if (event.type === "neutralButtonPressed") {
      setDate(new Date(0));
    } else {
      setDate(date!);
    }
  };

  const nextFiveDay = (date.getDate() + 5) % 30;

  const maxDay = new Date(
    date.getFullYear(),
    date.getDay() + 10 > 30 ? date.getMonth() + 1 : date.getMonth(),
    nextFiveDay
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex flex-row items-start justify-between px-6">
        <Image
          className="w-[100px] h-[100px]"
          source={images.maximBig}
          resizeMode="contain"
        />

        <View className="mt-12">
          <Text className="font-Roboto text-lg text-general-900">
            {userAddress}
          </Text>
        </View>
      </View>
      <View className="flex flex-col h-screen gap-[14%]">
        <View className="flex w-full h-1/4   border-b-4   justify-start items-center border-b-general-600 gap-2">
          <TouchableOpacity onPress={handlePickUpLocationPress}>
            <View className="flex justify-start w-96 h-36 items-center bg-general-600 rounded-xl py-2 px-6 ">
              <View className="flex flex-row items-center justify-start w-96 px-6  gap-2">
                <Image source={icons.circle} className="mr-5 h-8 w-8" />

                <View className="flex justify-start items-start ">
                  <Text className="text-general-900 font-Roboto text-base">
                    Pick-Up Location
                  </Text>

                  <Text className="text-secondary-900 font-Roboto text-lg ">
                    {sourceLocationName
                      ? truncateText(sourceLocationName!, 34)
                      : "source address"}
                  </Text>

                  <Text className="text-secondary-400 font-Roboto text-base ">
                    {sourceAddress
                      ? truncateText(sourceAddress!, 34)
                      : "source address"}
                  </Text>
                </View>

                <Image
                  source={icons.forwardArrow}
                  className="w-8 h-8 absolute left-[290px]"
                />
              </View>

              <View className="flex  flex-row px-6 justify-start items-center w-72 p-1 rounded-xl mt-2  ml-12 bg-white">
                <Text className="font-Roboto text-secondary-400">
                  Pick-up point
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleDestinationLocationPress}>
            <View className="flex flex-row  justify-start  w-96 h-14 items-center bg-general-600 rounded-xl py-4 px-6 gap-4 ">
              <View className="rounded-full h-8 w-8 items-center justify-center bg-general-900 ">
                <Image source={icons.flag} className="w-6 h-6" />
              </View>
              <Text className="text-base text-general-900 font-Roboto  ">
                {destinationLocationName
                  ? truncateText(destinationLocationName, 34)
                  : "Destination"}
              </Text>

              <Image
                source={icons.forwardArrow}
                className="w-8 h-8 absolute left-[290px]"
              />
            </View>
          </TouchableOpacity>
        </View>

        {/* section details & order */}

        <View
          className="flex w-full justify-between gap-2 border-t-4 border-r-4 border-l-4 border-t-general-600 border-r-general-600 border-l-general-600 rounded-t-3xl   
         items-center px-4 py-6 "
        >
          <TouchableOpacity onPress={handleDetailPress}>
            <View className="flex flex-row justify-start w-96 h-16 items-center bg-general-600 rounded-xl py-4 px-6 gap-2 ">
              <Image source={icons.tune} className="w-6 h-6" />

              <Text className="text-lg text-general-900 font-Roboto ml-4  ">
                Details
              </Text>
            </View>
          </TouchableOpacity>

          <View className="flex flex-row justify-between items-center w-96 h-16 gap-4">
            <View className="flex flex-row justify-start items-center flex-1  bg-general-600 rounded-xl py-4 px-6 gap-2 ">
              <Image source={icons.cash} className="w-6 h-6" />

              <Text className="text-lg text-general-900 font-Roboto ml-4  ">
                Gopay
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => {
                setShowDatePicker(true);
              }}
            >
              <View className="flex flex-row justify-start items-center flex-1 bg-general-600 rounded-xl py-4 px-6 gap-2 ">
                <Image source={icons.schedule} className="w-6 h-6" />

                <Text className="text-lg text-general-900 font-Roboto ml-4  ">
                  Now
                </Text>
              </View>
            </TouchableOpacity>
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
                  className={`rounded-2xl bg-white m-2  border border-b-2 border-slate-200 p-8 ${item.title === selectedMenu ? "border-general-700 border-4" : ""}`}
                >
                  <Image source={item.icon} className="h-12 w-12" />
                  <Text className="mt-4 font-RobotoSemiBold text-base text-secondary-900">
                    {item.title}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <CustomButton title="ORDER" onPress={handleOrderPress} />
        </View>
      </View>
      {showTimePicker && (
        <DateTimePicker
          testID="datetimePicker"
          value={date}
          display="spinner"
          mode="time"
          onChange={handleTimeChange}
        />
      )}

      {showDatePicker && (
        <DateTimePicker
          testID="datetimePicker"
          value={date}
          display="spinner"
          minimumDate={date}
          maximumDate={maxDay}
          mode="date"
          onChange={handleDateChange}
        />
      )}
    </SafeAreaView>
  );
}

function addDays(date: Date, days: number): Date {
  date.setDate(date.getDate() + days);
  return date;
}
