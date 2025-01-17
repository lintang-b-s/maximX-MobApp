import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MaskInput from "react-native-mask-input";

import { ID_PHONE, images } from "@/constants";
import CountryPicker from "react-native-country-picker-modal";
import { CountryCode, Country } from "react-native-country-picker-modal";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import InputField from "@/components/InputField";

const Phone = () => {
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const router = useRouter();
  const [countryCode, setCountryCode] = useState<CountryCode>("FR");
  const [country, setCountry] = useState<Country | null>(null);

  const [showCountryCode, setShowCountryCode] = useState(false);

  const { bottom, top } = useSafeAreaInsets();
  const [email, setEmail] = useState("");

  const onSelectCountryCode = (country: Country) => {
    setCountryCode(country.cca2);
    setCountry(country);
    setShowCountryCode(false);
  };

  const sendOTP = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push(`/(verify)/${email}`);
    }, 200);
  };

  const trySignIn = async () => {};

  return (
    <GestureHandlerRootView className="flex-1">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{
          marginTop: top,
          marginBottom: bottom,
        }}
      >
        <View className="flex flex-row absolute z-10 top-14 items-center justify-start px-5 ">
          {/* <TouchableOpacity onPress={() => router.back()}>
            <View className="w-10 h-10 bg-white rounded-full border border-general-600 items-center justify-center">
              <Ionicons name="arrow-back" size={24} color={"#2E2D59"} />
            </View>
          </TouchableOpacity> */}
        </View>

        <View className="flex-1 items-center px-4 py-28 gap-5  bg-white">
          {loading && (
            <View
              className="z-10 bg-white justify-center items-center"
              style={[StyleSheet.absoluteFillObject]}
            >
              <ActivityIndicator size="large" color={"bg-general-300"} />

              <Text className="mt-2 font-Roboto text-lg p-2">
                Sending code...
              </Text>
            </View>
          )}

          {showCountryCode && (
            <CountryPicker
              {...{
                countryCode,
                withFilter: true,
                withFlag: true,
                withCountryNameButton: true,
                withAlphaFilter: true,
                withCallingCode: true,
                onSelect: onSelectCountryCode,
              }}
              visible
            />
          )}

          <View className="flex items-start px-3 w-full justify-center">
            <Text className="font-RobotoBold text-general-300 text-3xl">
              Hey, tell us your mobile phone number
            </Text>

            <Text className="text-base text-secondary-200 font-Roboto">
              we'll send a verification code on this number.
            </Text>
          </View>

          <View className="bg-white w-full rounded-lg p-[10px] flex flex-row items-center">
            <TouchableOpacity
              className="flex flex-row w-[10%] mt-2 justify-between items-center"
              onPress={() => setShowCountryCode((prev) => !prev)}
            >
              <Image source={images.indonesianFlag} className="w-6 h-6" />
              <Ionicons
                name="triangle"
                size={7}
                style={{ transform: [{ scaleY: -1 }] }}
              />
            </TouchableOpacity>
            <MaskInput
              className="w-full  p-2 mt-2 font-Roboto text-lg"
              value={phoneNumber}
              keyboardType="numeric"
              placeholderClassName="font-RobotoBold text-[#D5D5D5] "
              autoFocus
              placeholder="+62 821 46031 226"
              onChangeText={(masked, unmasked) => {
                setPhoneNumber(masked);
              }}
              mask={ID_PHONE}
            />
          </View>

          <InputField
            label="email"
            value={email}
            onChangeText={(val) => setEmail(val)}
            placeholder="e.g. uyayiu@gmail.com"
          />

          <TouchableOpacity
            className={` absolute bottom-5 right-4 flex flex-row gap-4 items-center rounded-3xl px-6 py-4 ${
              phoneNumber !== "" && email !== "" ? "bg-general-300" : "bg-general-600"
            } ${showCountryCode ? "hidden" : ""}`}
            disabled={phoneNumber === ""}
            onPress={sendOTP}
          >
            <Text
              className={`   ${
                phoneNumber !== "" && email !== "" ? "text-white" : "text-general-500"
              } font-RobotoBold`}
            >
              Next
            </Text>
            <Ionicons
              name="arrow-forward"
              size={18}
              color={phoneNumber !== "" && email !== "" ? "white" : "#999999"}
            />
          </TouchableOpacity>

          <TouchableOpacity
            className=" absolute bottom-5 left-2  flex flex-row items-center justify-center gap-2 p-4"
            onPress={() => router.push("/(auth)/sign-up")}
          >
            <Text className="text-general-300 font-RobotoBold text-base">
              I don't have an account
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </GestureHandlerRootView>
  );
};

export default Phone;
