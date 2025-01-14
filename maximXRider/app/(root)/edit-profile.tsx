import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { icons } from "@/constants";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useRef, useState } from "react";
import {
  Image,
  Platform,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import FontAwesome6 from "@react-native-vector-icons/fontawesome6";

enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

function capitalize(s: string) {
  return s && String(s[0]).toUpperCase() + String(s).slice(1);
}

const EditProfile = () => {
  const [editFullName, setEditFullName] = useState(false);
  const [editGender, setEditGender] = useState(false);
  const [editDOB, setEditDOB] = useState(false);
  const [editMail, setEditMail] = useState(false);

  const [fullName, setFullName] = useState("lintang birda");
  const [gender, setGender] = useState<Gender>(Gender.MALE);
  const [dob, setDob] = useState(new Date(2003, 6, 11));
  const [email, setEmail] = useState("uyayiu123@gmail.com");

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

  const bottomSheetRef = useRef<BottomSheet>(null);

  return (
    <GestureHandlerRootView className="flex-1">
      <View className="flex-1 bg-general-600">
        {editFullName && (
          <TouchableOpacity
            onPress={() => {
              setEditFullName(false);
            }}
            className="absolute top-0 left-0 w-full h-full bg-black/50 "
          ></TouchableOpacity>
        )}

        {editGender && (
          <TouchableOpacity
            onPress={() => {
              setEditGender(false);
            }}
            className="absolute top-0 left-0 w-full h-full bg-black/50 "
          ></TouchableOpacity>
        )}

        {editMail && (
          <TouchableOpacity
            onPress={() => {
              setEditMail(false);
            }}
            className="absolute top-0 left-0 w-full h-full bg-black/50 "
          ></TouchableOpacity>
        )}

        <View className="flex items-start w-full">
          <TouchableHighlight
            activeOpacity={0.9}
            underlayColor={"#DCDCDC"}
            className="w-full"
            onPress={() => {}}
          >
            <View className="flex flex-row gap-6 items-center justify-start p-4 w-full">
              <Image source={icons.call} className="size-8" />
              <View className="flex items-start ">
                <Text className="text-secondary-800 text-base font-RobotoLight">
                  Phone Number
                </Text>
                <Text className="text-secondary-900 text-base font-Roboto">
                  +62 821 46031 121
                </Text>
              </View>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            activeOpacity={0.9}
            underlayColor={"#DCDCDC"}
            className="w-full"
            onPress={() => {
              setEditFullName(true);
            }}
            disabled={(editDOB || editFullName || editMail || editGender) ? true : false}
          >
            <View className="flex flex-row gap-6 items-center justify-start p-4 w-full">
              <Image source={icons.person} className="size-8" />
              <View className="flex items-start ">
                <Text className="text-secondary-800 text-base font-RobotoLight">
                  Full name
                </Text>
                <Text className="text-secondary-900 text-base font-Roboto">
                  {fullName}
                </Text>
              </View>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            activeOpacity={0.9}
            underlayColor={"#DCDCDC"}
            className="w-full"
            onPress={() => {
              setEditGender(true);
            }}
            disabled={
              editDOB || editFullName || editMail || editGender ? true : false
            }
          >
            <View className="flex flex-row gap-6 items-center justify-start p-4 w-full">
              <Image source={icons.gender} className="size-8" />
              <View className="flex items-start ">
                <Text className="text-secondary-800 text-base font-RobotoLight">
                  Gender
                </Text>
                <Text className="text-secondary-900 text-base font-Roboto">
                  {capitalize(gender.toLowerCase())}
                </Text>
              </View>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            activeOpacity={0.9}
            underlayColor={"#DCDCDC"}
            className="w-full"
            onPress={() => {
              setEditDOB(true);
            }}
            disabled={
              editDOB || editFullName || editMail || editGender ? true : false
            }
          >
            <View className="flex flex-row gap-6 items-center justify-start p-4 w-full">
              <Image source={icons.calendar} className="size-8" />
              <View className="flex items-start ">
                <Text className="text-secondary-800 text-base font-RobotoLight">
                  Datee of birth
                </Text>
                <Text className="text-secondary-900 text-base font-Roboto">
                  {dob.toLocaleDateString()}
                </Text>
              </View>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            activeOpacity={0.9}
            underlayColor={"#DCDCDC"}
            className="w-full"
            onPress={() => {
              setEditMail(true);
            }}
            disabled={
              editDOB || editFullName || editMail || editGender ? true : false
            }
          >
            <View className="flex flex-row gap-6 items-center justify-start p-4 w-full">
              <Image source={icons.mailFill} className="size-8" />
              <View className="flex items-start ">
                <Text className="text-secondary-800 text-base font-RobotoLight">
                  Email address
                </Text>
                <Text className="text-secondary-900 text-base font-Roboto">
                  {email}
                </Text>
              </View>
            </View>
          </TouchableHighlight>
        </View>

        {editFullName && (
          <>
            <BottomSheet
              keyboardBehavior="extend"
              ref={bottomSheetRef}
              snapPoints={["30%", "30%"]}
              index={0}
            >
              <BottomSheetView
                style={{
                  flex: 1,
                  padding: 20,
                }}
              >
                <View className="flex items-start justify-center gap-4">
                  <Text className="text-xl text-secondary-900 font-RobotoBold mb-4">
                    Edit your data
                  </Text>
                  <InputField
                    label="firstName"
                    placeholder="Enter your full name here"
                    value={fullName}
                    onChangeText={(value: string) => setFullName(value)}
                  />
                  <CustomButton
                    title="OK"
                    onPress={() => {
                      setEditFullName(false);
                    }}
                  />
                </View>
              </BottomSheetView>
            </BottomSheet>
          </>
        )}

        {editMail && (
          <>
            <BottomSheet
              keyboardBehavior="extend"
              ref={bottomSheetRef}
              snapPoints={["30%", "30%"]}
              index={0}
            >
              <BottomSheetView
                style={{
                  flex: 1,
                  padding: 20,
                }}
              >
                <View className="flex items-start justify-center gap-4">
                  <Text className="text-xl text-secondary-900 font-RobotoBold mb-4">
                    Please enter your email address
                  </Text>
                  <InputField
                    label="email"
                    placeholder="Enter your email here"
                    value={email}
                    onChangeText={(value: string) => setEmail(value)}
                  />
                  <CustomButton
                    title="OK"
                    onPress={() => {
                      setEditMail(false);
                    }}
                  />
                </View>
              </BottomSheetView>
            </BottomSheet>
          </>
        )}
      </View>
      {editDOB && (
        <RNDateTimePicker
          testID="datetimePicker"
          value={dob}
          display="spinner"
          mode="date"
          onChange={handleDateChange}
        />
      )}

      {editGender && (
        <>
          <BottomSheet
            keyboardBehavior="extend"
            ref={bottomSheetRef}
            snapPoints={["22%", "22%"]}
            index={0}
          >
            <BottomSheetView
              style={{
                flex: 1,
                padding: 20,
              }}
            >
              <View className="flex items-start justify-center gap-4">
                <Text className="text-xl text-secondary-900 font-RobotoBold mb-4">
                  Please specify your gender
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    setGender(Gender.MALE);
                    setEditGender(false);
                  }}
                >
                  <View className="flex flex-row items-center">
                    {gender === Gender.MALE ? (
                      <FontAwesome6
                        name="circle-check"
                        color="#51717E"
                        size={22}
                      />
                    ) : (
                      <FontAwesome6 name="circle" color="#51717E" size={22} />
                    )}
                    <Text className="text-secondary-900 font-Roboto text-lg ml-4">
                      Male
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    setGender(Gender.FEMALE);
                    setEditGender(false);
                  }}
                >
                  <View className="flex flex-row items-center">
                    {gender === Gender.FEMALE ? (
                      <FontAwesome6
                        name="circle-check"
                        color="#51717E"
                        size={22}
                      />
                    ) : (
                      <FontAwesome6 name="circle" color="#51717E" size={22} />
                    )}
                    <Text className="text-secondary-900 font-Roboto text-lg ml-4">
                      Female
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </BottomSheetView>
          </BottomSheet>
        </>
      )}
    </GestureHandlerRootView>
  );
};

export default EditProfile;
