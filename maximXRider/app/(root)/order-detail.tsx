import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { icons } from "@/constants";
import { useOrderDetailStore } from "@/store";
import { router } from "expo-router";
import { useState } from "react";
import {
  Image,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const tip = [1000, 2000, 3000, 4000, 5000, 10000, 20000, 30000, 40000, 50000];
const OrderDetail = () => {
  const {
    isTip,
    tipValue,
    differentPhoneNumber,
    additionalInformation,
    setTip,
    setTipValue,
    setDifferentPhone,
    setAdditionalInformation,
  } = useOrderDetailStore();

  const handleDonePress = () => {
    router.push("/home");
  };

  return (
    <SafeAreaView className="flex h-full p-4 bg-general-600">
      <View className="flex items-start">
        <View className="flex flex-row justify-between items-center w-full p-2">
          <View className="flex items-start">
            <Text className="font-Roboto text-lg text-secondary-900">Tip</Text>

            <Text className="font-RobotoLight text-base text-secondary-800">
              Order total will increase by the tip amount.
            </Text>
          </View>
          <Switch
            style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
            value={isTip}
            onValueChange={() => setTip()}
            trackColor={{ false: "#DEDEDE", true: "#ffc928" }}
            thumbColor="white"
          />
        </View>

        {isTip && (
          <ScrollView
            horizontal={true}
            className="mt-2"
            showsHorizontalScrollIndicator={false}
          >
            {tip.map((val, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setTipValue({ tip: val })}
              >
                <View
                  className={`flex justify-center items-center p-3 ${tipValue === val ? "bg-general-100" : "bg-white"} rounded-3xl mr-2 border border-secondary-800 `}
                >
                  <Text className="text-base font-RobotoSemiBold text-secondary-900">
                    Rp {val.toLocaleString()}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
      </View>

      <View className="flex items-start w-full my-2">
        <InputField
          label="Different contact number"
          placeholder="Different contact number"
          iconLeft={icons.phone}
          iconRight={icons.contact}
          value={differentPhoneNumber}
          onChangeText={(phone: string) => {
            setDifferentPhone({ phone: phone });
          }}
        />
        <Text className="font-Roboto text-secondary-800 text-base">
          If this order is for someone with a different phone number, please
          specify it here.
        </Text>
      </View>

      <InputField
        label="Additional information"
        placeholder="Additional information"
        iconLeft={icons.chat}
        value={additionalInformation}
        onChangeText={(info: string) => {
          setAdditionalInformation({ info: info });
        }}
      />

      <CustomButton
        className="absolute bottom-5 left-4"
        title="DONE"
        onPress={handleDonePress}
      />
    </SafeAreaView>
  );
};

export default OrderDetail;
