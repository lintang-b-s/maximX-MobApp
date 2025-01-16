import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useRef, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import InputField from "@/components/InputField";
import PhoneInput from "@/components/PhoneInputField";
import { citiesInIndonesia, icons, ID_PHONE, images } from "@/constants";
import Ionicons from "@react-native-vector-icons/ionicons";

import CustomButton from "@/components/CustomButton";
import DropdownBottomSheet from "@/components/DropdownBottomSheet";
import Dropdown from "@/components/Dropdown";
import { router } from "expo-router";

const SignUp = () => {
  const { bottom, top } = useSafeAreaInsets();
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [refCode, setRefCode] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");

  const [city, setCity] = useState("Surakarta");

  const [cities, setCities] = useState(citiesInIndonesia);

  const [showSelectCity, setShowSelectCity] = useState(false);

  const handleFilter = (searchTerm: string) => {
    if (searchTerm !== "") {
      setCities(
        citiesInIndonesia.filter((city) =>
          city.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setCities(citiesInIndonesia);
    }
  };

  const handleCreateAccountPress = () => {
    router.push("/(auth)/driver-registration-one");
  };

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
        <View className="flex flex-1 items-center px-4  gap-5  bg-white">
          <InputField
            label="Name"
            placeholder="e.g. John Doe"
            value={name}
            onChangeText={(val) => setName(val)}
          />

          <InputField
            label="Email address"
            placeholder="e.g. abc@gmail.com"
            value={email}
            onChangeText={(val) => setEmail(val)}
          />

          <PhoneInput
            label="Phone Number"
            placeholder="+62 821 46031 226"
            value={phoneNumber}
            onChangeText={(masked, unmasked) => {
              setPhoneNumber(masked);
            }}
            iconLeft={images.indonesianFlag}
            mask={ID_PHONE}
          />

          <Dropdown setShow={setShowSelectCity} placeholder={city} label="City"/>
          <InputField
            label="Referal Code (Optional)"
            placeholder="e.g. AZXBAH717"
            value={refCode}
            onChangeText={(val) => setRefCode(val)}
          />

          <Text className="font-Roboto text-general-500 text-base self-start">
            By continuing. I agree to the{" "}
            <Text className="font-RobotoBold text-general-300 text-base self-start">
              terms of use
            </Text>{" "}
            &{" "}
            <Text className="font-RobotoBold text-general-300 text-base self-start">
              privacy policy.
            </Text>{" "}
          </Text>

          <CustomButton
            active={
              name !== "" && email !== "" && phoneNumber !== "" && city !== ""
            }
            title="Create an account"
            onPress={handleCreateAccountPress}
          />
        </View>

        {showSelectCity && (
          <>
            <DropdownBottomSheet
              handleFilter={handleFilter}
              data={cities}
              setData={setCity}
              setShow={setShowSelectCity}
              icon="location-sharp"
            />
          </>
        )}
      </KeyboardAvoidingView>
    </GestureHandlerRootView>
  );
};

export default SignUp;
