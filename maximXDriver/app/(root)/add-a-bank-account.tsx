import {
  View,
  Text,
  TouchableHighlight,
  Platform,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "@/components/InputField";
import RNDateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import Ionicons from "@react-native-vector-icons/ionicons";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

const AddABankAccount = () => {
  const [name, setName] = useState("");

  const [accountNumber, setAccountNumber] = useState("");
  const [address, setAddress] = useState("");
  const [defaultPaymentMethod, setDefaultPaymentMethod] = useState(false);

  const [zipcode, setZipcode] = useState("");

  const [dob, setDob] = useState(new Date(2003, 6, 11));

  const [editDOB, setEditDOB] = useState(false);

  const handleDateChange = (
    event: DateTimePickerEvent,
    date?: Date | undefined
  ) => {
    if (Platform.OS === "android") {
      setEditDOB(false);
    }

    if (event.type === "neutralButtonPressed") {
      setDob(new Date(0));
    } else {
      setDob(date!);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white px-4 py-2">
      <View className="flex-1 flex items-center  gap-5 ">
        <InputField
          label="Name"
          placeholder="e.g. John Doe"
          value={name}
          onChangeText={(val) => setName(val)}
        />

        <InputField
          label="Bank Account Number"
          placeholder="e.g. 123123123"
          value={accountNumber}
          onChangeText={(val) => setAccountNumber(val)}
        />

        <TouchableHighlight
          activeOpacity={0.9}
          underlayColor={"#DCDCDC"}
          className="w-full"
          onPress={() => {
            setEditDOB(true);
          }}
        >
          <>
            <Text className="text-base font-RobotoSemiBold text-secondary-600">
              Date of birth
            </Text>
            <View className="flex gap-2 items-start justify-start p-4 w-full  border-neutral-200  border-2 rounded-lg">
              <View className="flex items-start ">
                <Text className="text-secondary-900 text-base font-Roboto">
                  {dob.toLocaleDateString()}
                </Text>
              </View>
            </View>
          </>
        </TouchableHighlight>

        <InputField
          label="Addres"
          placeholder="e.g. Jl. Apel No.3 Jajar"
          value={address}
          onChangeText={(val) => setAddress(val)}
        />

        <InputField
          label="Zipcode"
          placeholder="e.g. 59423"
          value={zipcode}
          onChangeText={(val) => setZipcode(val)}
        />

        <View className="flex flex-row justify-start w-full gap-4 items-center">
          <TouchableOpacity
            onPress={() => {
              setDefaultPaymentMethod((prev) => !prev);
            }}
          >
            <View
              className={`flex items-center justify-center rounded-full w-8 h-8 ${defaultPaymentMethod ? "bg-[#2E2D59]" : "bg-general-500"} `}
            >
              {defaultPaymentMethod && (
                <Ionicons name="checkmark" color={"white"} size={18} />
              )}
            </View>
          </TouchableOpacity>
          <Text className="font-RobotoSemiBold text-general-300 text-base">
            Set as default method to receive payouts
          </Text>
        </View>

        <CustomButton
          title="Submit"
          className="w-[90%]"
          active={
            name !== "" &&
            accountNumber !== "" &&
            dob !== new Date() &&
            address !== "" &&
            zipcode !== ""
          }
          disabled={
            !(
              name !== "" &&
              accountNumber !== "" &&
              dob !== new Date() &&
              address !== "" &&
              zipcode !== ""
            )
          }
          onPress={() => {
            router.replace("/(root)/home");
          }}
        />
      </View>

      {editDOB && (
        <RNDateTimePicker
          testID="datetimePicker"
          value={dob}
          display="calendar"
          mode="date"
          onChange={handleDateChange}
        />
      )}
    </SafeAreaView>
  );
};

export default AddABankAccount;
