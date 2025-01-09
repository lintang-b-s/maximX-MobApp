import { InputFieldProps } from "@/types/type";
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

const InputField = ({
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
}: InputFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="my-2 w-full">
          <View
            className={`flex flex-row w-full justify-start items-center relative bg-white
                        rounded-2xl border-neutral-200 border-2 focus:border-general-100
                        ${containerStyle}`}
          >
            {iconLeft && (
              <Image
                source={iconLeft}
                className={`w-6 h-6 ml-4 ${iconLeftStyle}`}
              />
            )}

            <TextInput
              className={`rounded-full p-4 font-RobotoSemiBold text-[15px] flex-1 ${inputStyle}
                            text-left`}
              secureTextEntry={secureTextEntry}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              {...props}
            />

            {(iconRight  && isFocused) && (
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

export default InputField;
