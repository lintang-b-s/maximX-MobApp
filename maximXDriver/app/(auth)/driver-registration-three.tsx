import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";

import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import CustomButton from "@/components/CustomButton";
import * as FileSystem from "expo-file-system";
import * as ImagePicker from "expo-image-picker";
import Ionicons from "@react-native-vector-icons/ionicons";
import MaskInput from "react-native-mask-input";
import { KTP } from "@/constants";
import { router } from "expo-router";

const imgDir =
  FileSystem.documentDirectory + "images-" + new Date().getTime() + "/";

const ensureDirExists = async () => {
  const dirInfo = await FileSystem.getInfoAsync(imgDir);
  if (!dirInfo.exists) {
    await FileSystem.makeDirectoryAsync(imgDir, { intermediates: true });
  }
};

const DriverRegistrationThree = () => {
  const [loading, setLoading] = useState(false);
  const [ssn, setSSN] = useState("");

  return (
    <SafeAreaView className="flex-1">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View className="flex flex-1 items-start px-4  py-2 gap-5  bg-white">
          <Text className="font-RobotoSemiBold text-general-300 text-lg">
            Step 3 of 3
          </Text>
          <Text className="text-3xl font-RobotoBold">
            Social Security Number (KTP)
          </Text>

          <Text className="text-base text-secondary-200 font-Roboto">
            We'll need to pay you and to run your background check, it won't be
            used for credit check.
          </Text>

          <MaskInput
            className="w-full  p-2 mt-2 font-Roboto text-lg"
            value={ssn}
            keyboardType="numeric"
            placeholderClassName="font-RobotoBold text-[#D5D5D5] "
            autoFocus
            placeholder="e.g. 3372-0333-0604-1111"
            onChangeText={(masked, unmasked) => {
              setSSN(unmasked);
            }}
            mask={KTP}
          />

          <CustomButton
            title="Done"
            active={ssn.length == 16}
            onPress={() => {
              router.replace("/(auth)/driver-registration-complete");
            }}
          />
        </View>

        {loading && (
          <>
            <View className="absolute top-0 left-0 w-full h-full bg-black/20 " />
            <View
              className="items-center justify-center"
              style={[StyleSheet.absoluteFill]}
            >
              <ActivityIndicator color={"#2E2D59"} animating size="large" />
            </View>
          </>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default DriverRegistrationThree;
