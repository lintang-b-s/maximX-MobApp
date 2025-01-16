import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Ionicons from "@react-native-vector-icons/ionicons";

const CELL_COUNT = 6;

const VerifyPhone = () => {
  const { email, signin } = useLocalSearchParams<{
    email: string;
    signin: string;
  }>();
  const [code, setCode] = useState("");

  const ref = useBlurOnFulfill({ value: code, cellCount: CELL_COUNT });
  const { bottom, top } = useSafeAreaInsets();

  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: code,
    setValue: setCode,
  });

  useEffect(() => {
    if (code.length === 6) {

      if (signin === "true") {
        verifySignIn();
      } else {
        verifyCode();
      }
    }
  }, [code]);

  const verifyCode = async () => {};

  const verifySignIn = async () => {};

  const resendCode = async () => {};

  return (
    <SafeAreaView className="flex-1  bg-white ">
      <View className="flex flex-row absolute z-10 top-14 items-center justify-start px-5 ">
        <TouchableOpacity onPress={() => router.back()}>
          <View className="w-10 h-10 bg-white rounded-full border border-general-600 items-center justify-center">
            <Ionicons name="arrow-back" size={24} color={"#2E2D59"} />
          </View>
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{
          marginTop: top,
          marginBottom: bottom,
        }}
      >
        <View className="flex-1 items-center px-4 py-28 gap-5  bg-white">
          <View className="flex items-start px-3 w-full justify-center">
            <Text className="font-RobotoBold text-general-300 text-3xl">
              Enter the verification code sent to you
            </Text>

            <Text className="text-base text-gray-500 font-Roboto">
              We have sent you a six-digit code on your {email}
            </Text>
          </View>
          <CodeField
            InputComponent={TextInput}
            ref={ref}
            {...props}
            value={code}
            onChangeText={setCode}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            autoComplete={"sms-otp"}
            testID="my-code-input"
            renderCell={({ index, symbol, isFocused }) => (
              <View
                key={index}
                style={[styles.cellRoot, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}
              >
                <Text style={styles.cellText}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              </View>
            )}
          />

          <TouchableOpacity
            className={` absolute bottom-5 right-4 flex flex-row gap-4 items-center rounded-3xl px-6 py-4 ${
              code.length == 6 ? "bg-general-300" : "bg-general-600"
            }`}
            disabled={code.length !== 6}
            onPress={() => {
              router.replace("/(root)/home");
            }}
          >
            <Text
              className={`   ${
                code.length == 6 ? "text-white" : "text-general-500"
              } font-RobotoBold`}
            >
              Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className=" absolute bottom-5 left-2  flex flex-row items-center justify-center gap-2 p-4"
            onPress={resendCode}
          >
            <Ionicons name="refresh" color="#2E2D59" size={17} />
            <Text className="text-base text-general-300 font-RobotoBold">
              Resend Code
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1, padding: 20 },
  title: { textAlign: "center", fontSize: 30 },
  codeFieldRoot: {
    marginTop: 20,
    gap: 6,
    marginLeft: "auto",
    marginRight: "auto",
  },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: "#00000030",
    textAlign: "center",
  },
  focusCell: {
    paddingBottom: 4,
    borderBottomWidth: 2,
    borderColor: "#000",
  },
  cellRoot: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  cellText: {
    color: "#000",
    fontSize: 36,
    textAlign: "center",
  },
});

export default VerifyPhone;
