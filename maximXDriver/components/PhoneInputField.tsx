import { InputFieldProps, MaskInputFieldProps } from "@/types/type";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  View,
  Text,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import MaskInput from "react-native-mask-input";
import Ionicons from "@react-native-vector-icons/ionicons";

const PhoneInput = ({
  label,
  labelStyle,
  iconLeft,
  iconRight,
  secureTextEntry = false,
  containerStyle,
  inputStyle,
  iconLeftStyle,
  iconRightStyle,
  IconRightOnPress,
  className,
  ...props
}: MaskInputFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="my-2 w-full flex items-start  gap-2">
          <Text className="text-base font-RobotoSemiBold text-secondary-600 ">
            {label}
          </Text>
          <View
            className={`flex p-3 flex-row w-full justify-start items-center relative bg-white
                        rounded-lg ${isFocused ? "border-general-300 border" : "border-neutral-200   border-2"}
                        ${containerStyle}`}
          >
            {iconLeft && (
              <>
                <TouchableOpacity className="flex flex-row w-[10%] mt-2 justify-between items-center">
                  <Image source={iconLeft} className="w-6 h-6" />
                  <Ionicons
                    name="triangle"
                    size={7}
                    style={{ transform: [{ scaleY: -1 }] }}
                  />
                </TouchableOpacity>
              </>
            )}

            <MaskInput
              className=" flex-1 ml-3 font-Roboto text-lg "
              keyboardType="numeric"
              placeholderClassName="font-RobotoBold text-[#D5D5D5] "
              autoFocus
              placeholder="+62 821 46031 226"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              {...props}
            />

            {iconRight && isFocused && (
              <TouchableOpacity onPress={IconRightOnPress}>
                <Image
                  source={iconRight}
                  className={`w-6 h-6 mr-4 ${iconRightStyle}`}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default PhoneInput;
