import StarRating from "@/components/StarRating";
import { icons, images } from "@/constants";
import { router } from "expo-router";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import CustomButton from "@/components/CustomButton";

const OrderSummary = () => {
  const [driverRating, setDriverRating] = useState<number>(2);
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="px-5 py-4">
        {/* order id & order status */}
        <View className="flex flex-row justify-between items-center w-full">
          <View className="flex flex-row items-center gap-2">
            <Image source={icons.ojek} className="size-14" />
            <View className="flex justify-between items-start ">
              <Text className="text-secondary-900 font-RobotoBold text-lg ">
                Trip Completed
              </Text>
              <Text className="text-secondary-900 font-RobotoSemiBold text-base ">
                Ojek Motor
              </Text>
            </View>
          </View>
          <View className="flex justify-between items-end">
            <Text className="font-RobotoLight text-md text-secondary-800">
              ORDER-MX23456
            </Text>
            <Text className="font-RobotoLight text-md text-secondary-800">
              Saturday, 11 January 2025
            </Text>
          </View>
        </View>

        {/* rating & identitas driver*/}
        <View className="flex items-center rounded-3xl shadow-lg shadow-blue-400 bg-white mx-4 my-4 gap-4 px-4 py-6">
          <View className="flex  items-center mt-8 ">
            <Text className="font-RobotoBold text-lg text-secondary-900">
              How was the driver?
            </Text>
            <Text className="font-Roboto text-lg text-secondary-800 mt-2">
              (1 is disappointing, 5 is awesome)
            </Text>
            <StarRating
              defaultRating={driverRating}
              setDefaultRating={setDriverRating}
              className="mt-4"
            />
          </View>

          <View className="flex flex-row ">
            {[...Array(40)].map((_, index) => (
              <View
                key={index}
                className="w-[5px] h-[2px] mr-1 bg-general-800 mt-[2px]"
              />
            ))}
          </View>
          {/* indentitas driver */}
          <View className="flex flex-row  self-start justify-between w-full items-center">
            <View className="flex items-start justify-center">
              <Text className="text-lg font-RobotoBold text-secondary-900">
                Abmdulmigos
              </Text>

              <Text className="text-base font-Roboto text-secondary-800">
                AB 3456 CE
              </Text>
            </View>
            <Image source={images.driver} className="w-14 h-14 rounded-xl" />
          </View>
        </View>

        <View className="flex items-start rounded-3xl shadow-lg shadow-blue-400 bg-white mx-4 my-4 gap-4 px-4 py-6">
          <Text className="font-RobotoBold text-lg text-secondary-900">
            Trip details
          </Text>
          <View className="flex flex-row ">
            {[...Array(40)].map((_, index) => (
              <View
                key={index * 3}
                className="w-[5px] h-[2px] mr-1 bg-general-800 mt-[2px]"
              />
            ))}
          </View>
          <View className="flex flex-row justify-start items-start gap-4">
            <View className="flex">
              <Image source={icons.mapSource} />
              <LinearGradient
                className="ml-[10px]"
                colors={["#FFE3B9", "#F43F5E"]}
                style={{ height: 56, width: 5, borderRadius: 5 }}
              />
              <Image source={icons.mapDest} />
            </View>

            <View className="flex items-start gap-2">
              <View className="flex gap-1">
                <Text className="font-RobotoLight text-base text-secondary-800">
                  Pickup location
                </Text>
                <Text className="font-RobotoBold text-base text-secondary-900">
                  TPU Tanah Kusir
                </Text>
              </View>

              <View className="flex gap-1">
                <Text className="font-RobotoLight text-base text-secondary-800">
                  Your Destination
                </Text>
                <Text className="font-RobotoBold text-base text-secondary-900">
                  Departemen Ilmu Komputer dan Elektronika UGM
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View className="flex items-start rounded-3xl shadow-lg shadow-blue-400 bg-white mx-4 my-4 gap-4 px-4 py-6">
          <Text className="font-RobotoBold text-lg text-secondary-900">
            Payment details
          </Text>

          <View className="flex flex-row justify-between w-full">
            <Text className="font-Roboto text-base text-secondary-800">
              Order Total
            </Text>
            <Text className="font-Roboto text-base text-secondary-800">
              Rp 15.000
            </Text>
          </View>

          <View className="flex flex-row justify-between w-full">
            <Text className="font-Roboto text-base text-secondary-800">
              Voucher Discount
            </Text>
            <Text className="font-Roboto text-base text-secondary-800">
              Rp 1.000
            </Text>
          </View>
        </View>

        <CustomButton
          title="Download Bill"
          className="shadow-md shadow-general-100"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderSummary;
