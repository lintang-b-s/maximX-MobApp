import CustomButton from "@/components/CustomButton";
import { icons, images, menuItems } from "@/constants";
import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const [selectedMenu, selectSelectedMenu] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex flex-col h-screen">
        <View className="flex flex-row items-start justify-between px-6">
          <Image
            className="w-[100px] h-[100px]"
            source={images.maximBig}
            resizeMode="contain"
          />

          <View className="mt-12">
            <Text className="font-Roboto text-lg text-general-900">
              Surakarta
            </Text>
          </View>
        </View>

        <View className="flex w-full h-56  border-b justify-start items-center border-b-general-600 gap-2">
          <View className="flex justify-start w-96 h-36 items-center bg-general-600 rounded-xl py-2 px-6 ">
            <View className="flex flex-row items-center justify-between w-full   ">
              <Image source={icons.circle} className="mr-5 h-8 w-8" />

              <View className="flex justify-center items-start ">
                <Text className="text-general-900 font-Roboto text-base">
                  Pick-Up Location
                </Text>

                <Text className="text-secondary-900 font-Roboto text-xl ">
                  Ruang Display
                </Text>

                <Text className="text-secondary-400 font-Roboto text-base ">
                  Jalan Cermai
                </Text>
              </View>

              <Image source={icons.forwardArrow} className="w-8 h-8 ml-28" />
            </View>

            <View className="flex  flex-row px-6 justify-start items-center w-72 p-1 rounded-xl mt-2  ml-12 bg-white">
              <Text className="font-Roboto text-secondary-400">
                Pick-up point
              </Text>
            </View>
          </View>

          <View className="flex flex-row  justify-between  w-96 h-14 items-center bg-general-600 rounded-xl py-4 px-6 gap-2 ">
            <View className="rounded-full h-8 w-8 items-center justify-center bg-general-900">
              <Image source={icons.flag} className="w-6 h-6" />
            </View>
            <Text className="text-base text-general-900 font-Roboto  ">
              Destination
            </Text>

            <Image source={icons.forwardArrow} className="w-8 h-8 ml-[130px]" />
          </View>
        </View>

        <View className="flex w-full h-10 justify-start items-center "></View>

        {/* section details & order */}
        <View
          className="flex w-full  justify-between gap-2 border-t-4 border-r-4 border-l-4 border-t-general-600 border-r-general-600 border-l-general-600 rounded-t-3xl   
         items-center p-4"
        >
          <View className="flex flex-row justify-start w-96 h-16 items-center bg-general-600 rounded-xl py-4 px-6 gap-2 ">
            <Image source={icons.tune} className="w-6 h-6" />

            <Text className="text-lg text-general-900 font-Roboto ml-4  ">
              Details
            </Text>
          </View>

          <View className="flex flex-row justify-between items-center w-96 h-16 gap-4">
            <View className="flex flex-row justify-start items-center flex-1  bg-general-600 rounded-xl py-4 px-6 gap-2 ">
              <Image source={icons.cash} className="w-6 h-6" />

              <Text className="text-lg text-general-900 font-Roboto ml-4  ">
                In cash
              </Text>
            </View>

            <View className="flex flex-row justify-start items-center flex-1 bg-general-600 rounded-xl py-4 px-6 gap-2 ">
              <Image source={icons.schedule} className="w-6 h-6" />

              <Text className="text-lg text-general-900 font-Roboto ml-4  ">
                Now
              </Text>
            </View>
          </View>

          <ScrollView
            horizontal={true}
            className="p-2"
            showsHorizontalScrollIndicator={false}
          >
            {menuItems.map((item) => (
              <TouchableOpacity onPress={() => selectSelectedMenu(item.title)}>
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

          <CustomButton title="ORDER"  />
        </View>
      </View>
    </SafeAreaView>
  );
}
