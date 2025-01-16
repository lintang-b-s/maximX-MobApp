import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useRef } from "react";
import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import Ionicons from "@react-native-vector-icons/ionicons";
import { DropDownBottomSheetProps } from "@/types/type";
import { icons } from "@/constants";

const DropdownBottomSheet = ({
  handleFilter,
  data,
  setData,
  setShow,
  dataIcon,
  icon,
  open,
}: DropDownBottomSheetProps) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  useEffect(() => {
    if (open) {
      bottomSheetRef.current?.collapse();
      bottomSheetRef.current?.snapToIndex(1);
    } else {
      bottomSheetRef.current?.close();
    }
  }, [open]);

  return (
    <BottomSheet
      keyboardBehavior="extend"
      ref={bottomSheetRef}
      snapPoints={["30%", "50%"]}
      index={-1}
    >
      <BottomSheetView
        style={{
          flex: 1,
          padding: 20,
        }}
        className="bg-white"
      >
        <BottomSheetScrollView className="flex-1 ">
          <View className="flex flex-row justify-between p-4 gap-2  items-center bg-general-600 rounded-xl mb-4">
            <Ionicons name="search-outline" size={12} />
            <TextInput
              className="flex-1 font-RobotoSemiBold text-[15px] text-left"
              onChangeText={(val) => handleFilter(val)}
            />
          </View>

          <View className="flex items-center gap-2 ">
            {data.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setData(item);
                  setShow(false);
                }}
              >
                <View
                  key={index}
                  className="flex flex-row items-center justify-between w-full"
                >
                  <View className="flex flex-row items-center gap-4">
                    {icon !== undefined && <Ionicons name={icon!} size={15} />}
                    {dataIcon != undefined && (
                      <View
                        className={` w-6 h-6 rounded-lg border border-general-600 "`}
                        style={{ backgroundColor: dataIcon[item] }}
                      ></View>
                    )}
                    <Text className="font-RobotoBold text-lg  ">{item}</Text>
                  </View>

                  <Image source={icons.next} className="w-6 h-6" />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </BottomSheetScrollView>
      </BottomSheetView>
    </BottomSheet>
  );
};

export default DropdownBottomSheet;
