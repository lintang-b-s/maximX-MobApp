import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { icons, images } from "@/constants";
import { router } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";

const SignUp = () => {
  const [form, setForm] = useState({
    country: "Indonesia",
    phone: "+62 ",
    email: "",
    password: "",
  });

  const clearInputPhone = () => {
    setForm({ ...form, phone: "+62 " });
  };

  const clearInputEmail = () => {
    setForm({ ...form, email: "" });
  };

  const clearInputPassword = () => {
    setForm({ ...form, password: "" });
  };

  const onSignUpPress = () => {
    router.push("/(root)/(tabs)/home");
  };
  return (
    <ScrollView className="flex-1 bg-white" keyboardShouldPersistTaps="always">
      <View className="flex-1 bg-white">
        <View className=" h-[50px]">
          <Image
            source={images.maximLogo}
            className=" h-[50px] self-center  "
            resizeMode="contain"
          />
        </View>
        <View className="flex items-center px-4 gap-1">
          <Text className=" mt-12 mb-4 text-xl text-secondary-900 font-RobotoSemiBold ">
            Sign up using your phone number and email
          </Text>
          <InputField
            label="Country"
            placeholder="Enter Your Country"
            value={form.country}
            iconLeft={images.indonesianFlag}
            onChangeText={(value: string) =>
              setForm({ ...form, country: value })
            }
          />
          <InputField
            label="Phone Number"
            placeholder="Enter Your Phone Number"
            keyboardType="numeric"
            value={`${form.phone}`}
            iconLeft={icons.phone}
            onChangeText={(value: string) => {
              if (!value.startsWith("+62 ")) {
                setForm({
                  ...form,
                  phone: "+62 ",
                });
              } else {
                setForm({ ...form, phone: value });
              }
            }}
            iconRight={icons.close}
            IconRightOnPress={clearInputPhone}
          />

          <InputField
            label="Email"
            placeholder="Enter Your Email"
            value={form.email}
            iconLeft={icons.email}
            onChangeText={(value: string) => setForm({ ...form, email: value })}
            iconRight={icons.close}
            IconRightOnPress={clearInputEmail}
          />

          <InputField
            label="Password"
            placeholder="Enter Your Password"
            secureTextEntry={true}
            value={form.password}
            iconLeft={icons.password}
            onChangeText={(value: string) =>
              setForm({ ...form, password: value })
            }
            iconRight={icons.close}
            IconRightOnPress={clearInputPassword}
          />

          <CustomButton title="CONTINUE" onPress={onSignUpPress} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
