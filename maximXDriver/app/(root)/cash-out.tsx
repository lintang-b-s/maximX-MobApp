import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import Ionicons from "@react-native-vector-icons/ionicons";
import FontAwesome6 from "@react-native-vector-icons/fontawesome6";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

const CashOut = () => {
  return (
    <SafeAreaView className="flex-1 bg-white ">
      <View
        style={{ flex: 0.25 }}
        className="bg-[#ECF7EF]  w-full flex justify-between  gap-6"
      >
        <View
          style={{ flex: 0.75 }}
          className="flex gap-2 items-center justify-center "
        >
          <Text className="font-RobotoBold text-2xl">We owe you</Text>
          <Text className="font-RobotoBold text-5xl tracking-wide">
            $127.32
          </Text>
        </View>
        <View
          style={{ flex: 0.25 }}
          className="w-full bg-[#D5EDDD] py-2 flex flex-row justify-between items-center px-3"
        >
          <View className="flex flex-row gap-3">
            <Image
              source={images.mandiriBank}
              className="w-14 h-14 "
              resizeMode="contain"
            />
            <View className="flex items-start">
              <Text className="font-RobotoBold text-lg"> **** 1234</Text>
              <Text className="text-general-500 text-base font-Roboto">
                Bank Mandiri
              </Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={24} />
        </View>
      </View>
      <View style={{ flex: 0.7 }} className=" flex gap-6 py-3">
        <View className="flex flex-row justify-between items-center w-full px-3">
          <Text className="text-general-500 text-lg font-RobotoSemiBold">
            Earnings
          </Text>
          <Text className="text-lg font-RobotoSemiBold">$120.32</Text>
        </View>
        <View className="flex flex-row justify-between items-center w-full px-3">
          <Text className="text-general-500 text-lg font-RobotoSemiBold">
            Tips
          </Text>
          <Text className="text-lg font-RobotoSemiBold">$4</Text>
        </View>

        <View className="flex flex-row justify-between items-center w-full px-3">
          <Text className="text-general-500 text-lg font-RobotoSemiBold">
            Other payments
          </Text>
          <Text className="text-lg font-RobotoSemiBold">$3</Text>
        </View>

        <View className="flex flex-row justify-between items-center w-full px-3">
          <Text className="text-general-500 text-lg font-RobotoSemiBold">
            Withdrawal fee
          </Text>
          <Text className="text-lg font-RobotoSemiBold text-danger-600">
            - $0.50
          </Text>
        </View>

        <View className="flex flex-row justify-between items-center w-full px-3">
          <Text className="text-general-500 text-base font-RobotoSemiBold">
            Total
          </Text>
          <Text className="text-base font-RobotoBold ">$127.32</Text>
        </View>
      </View>

      <View className="px-3 absolute bottom-5 flex items-center w-full">
        <CustomButton
          title="Cash out $127.32"
          bgVariant="secondary"
          textVariant="secondary"
          active
          className="w-[90%]"
          onPress={() => {
            router.replace("/(root)/cash-out-complete");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default CashOut;
