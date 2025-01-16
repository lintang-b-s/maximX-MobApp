import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
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

const imgDir =
  FileSystem.documentDirectory + "images-" + new Date().getTime() + "/";

const ensureDirExists = async () => {
  const dirInfo = await FileSystem.getInfoAsync(imgDir);
  if (!dirInfo.exists) {
    await FileSystem.makeDirectoryAsync(imgDir, { intermediates: true });
  }
};

const DriverRegistrationTwo = () => {
  const { bottom, top } = useSafeAreaInsets();

  const [image, setImage] = useState<string>("");
  const [uploading, setUploading] = useState(false);
  const [step, setStep] = useState(1);

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = async () => {
    await ensureDirExists();
    const files = await FileSystem.readDirectoryAsync(imgDir);
    if (files.length > 0) {
      setImage(files[0]);
    }
  };

  const deleteImage = async (uri: string) => {
    await FileSystem.deleteAsync(uri);
    setImage("");
  };

  const selectImage = async (useLibrary: boolean) => {
    let result;
    const options: ImagePicker.ImagePickerOptions = {
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.75,
    };
    if (useLibrary) {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access media library was denied");
        return;
      }
      result = await ImagePicker.launchImageLibraryAsync(options);
    } else {
      await ImagePicker.requestCameraPermissionsAsync();

      result = await ImagePicker.launchCameraAsync(options);
    }

    if (!result.canceled) {
      saveImage(result.assets[0].uri);
    }
  };

  const saveImage = async (uri: string) => {
    await ensureDirExists();
    const filename = new Date().getTime() + ".jpg";
    const dest = imgDir + filename;
    await FileSystem.copyAsync({ from: uri, to: dest });
    setImage(dest);
  };

  const renderItem = ({
    item,
    rounded,
  }: {
    item: string;
    rounded: boolean;
  }) => {
    return (
      <Image
        source={{ uri: item }}
        className={`w-full h-full ${rounded && "rounded-full"}`}
      />
    );
  };

  const uploadImage = async (uri: string) => {
    setUploading(true);
    setTimeout(() => {
      setUploading(false);
    }, 500);
    setStep(step + 1);
    setImage("");
  };

  const renderTextInstruction = () => {
    switch (step) {
      case 1:
        return (
          <Text className="text-3xl font-RobotoBold">
            Take a photo of your Driver's License
          </Text>
        );
      case 2:
        return (
          <Text className="text-3xl font-RobotoBold">
            Take a photo of your Vehicle Registration Sticker
          </Text>
        );
      case 3:
        return (
          <Text className="text-3xl font-RobotoBold">
            Take a photo of your Vehicle Insurance
          </Text>
        );
      case 4:
        return (
          <Text className="text-3xl font-RobotoBold">
            Take a photo of your profile photo
          </Text>
        );
    }
  };

  const renderTextUploadInstruction = () => {
    switch (step) {
      case 1:
        return (
          <Text className="text-base text-secondary-200 font-Roboto">
            Make sure your Driver's license is not expired. Please click a
            clearer photo and avoid using flash.
          </Text>
        );
      case 2:
        return (
          <Text className="text-base text-secondary-200 font-Roboto">
            Make sure your vehicle's make, model, year, license, plate, VIN, and
            expiration are clear and visible.
          </Text>
        );
      case 3:
        return (
          <Text className="text-base text-secondary-200 font-Roboto">
            Make sure your name, VIN, insurance company, and expiration date are
            clear and visible.
          </Text>
        );
      case 4:
        return (
          <Text className="text-base text-secondary-200 font-Roboto">
            Make sure you show your full face and sholders and take off your
            sunglasses or hat.
          </Text>
        );
    }
  };

  return (
    <SafeAreaView className="flex-1">
      <View className="flex flex-1 items-start px-4  py-2 gap-5  bg-white">
        <Text className="font-RobotoSemiBold text-general-300 text-lg">
          Step 2 of 3
        </Text>

        <Text className="text-3xl font-RobotoBold">
          {renderTextInstruction()}
        </Text>

        {step != 4 ? (
          <TouchableOpacity
            className="flex items-center justify-center w-full h-60 rounded-xl border border-dashed border-general-300 bg-general-300/40"
            onPress={() => selectImage(true)}
          >
            {image !== "" ? (
              renderItem({ item: image, rounded: false })
            ) : (
              <CustomButton
                title="upload"
                active={true}
                IconLeft={() => (
                  <Ionicons
                    name="cloud-upload-outline"
                    style={{ marginRight: 12 }}
                    color={"white"}
                    size={16}
                  />
                )}
                onPress={() => selectImage(true)}
                className="w-2/3 rounded-full"
              />
            )}
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            className="flex self-center items-center relative w-[50%] h-60 rounded-full border border-dashed border-general-300 bg-general-300/40"
            onPress={() => selectImage(true)}
          >
            {image !== "" ? (
              renderItem({
                item: image,
                rounded: true,
              })
            ) : (
              <CustomButton
                title="upload"
                active={true}
                IconLeft={() => (
                  <Ionicons
                    name="cloud-upload-outline"
                    style={{ marginRight: 12 }}
                    color={"white"}
                    size={16}
                  />
                )}
                onPress={() => selectImage(true)}
                className="w-2/3 rounded-full absolute bottom-[-14px]"
              />
            )}
          </TouchableOpacity>
        )}

        {image !== "" ? (
          <Text className="text-base text-secondary-200 font-Roboto">
            Submit this image if you think it's readable or tap on re-upload
            button to upload another one.
          </Text>
        ) : (
          renderTextUploadInstruction()
        )}
      </View>

      {image !== "" ? (
        <View className="absolute bottom-4 flex flex-row items-center gap-2  justify-center w-full">
          <View className="w-[45%]">
            <CustomButton
              active={true}
              title="Re-upload"
              bgVariant="tertiary"
              textVariant="tertiary"
              className="border border-gray-300"
              onPress={() => deleteImage(image)}
            />
          </View>
          <View className="w-[45%]">
            <CustomButton
              active={true}
              title="Submit"
              onPress={() => uploadImage(image)}
            />
          </View>
        </View>
      ) : (
        <></>
      )}

      {uploading && (
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
    </SafeAreaView>
  );
};

export default DriverRegistrationTwo;
