import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { forwardRef, useCallback, useEffect, useRef } from "react";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
  BottomSheetTextInput,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import Ionicons from "@react-native-vector-icons/ionicons";
import { DropDownBottomSheetProps } from "@/types/type";
import { icons } from "@/constants";

export type RefBottom = BottomSheet;
const DropdownBottomSheet = forwardRef<RefBottom, DropDownBottomSheetProps>(
  ({ open, handleFilter, data, setData, setShow, icon, dataIcon }, ref) => {
    const renderBackdrop = useCallback(
      (props: any) => (
        <BottomSheetBackdrop
          appearsOnIndex={0}
          disappearsOnIndex={-1}
          {...props}
        />
      ),
      []
    );

    return (
      <BottomSheet
        keyboardBehavior="extend"
        ref={ref}
        snapPoints={["30%", "50%"]}
        index={open ? 0 : -1}
        enablePanDownToClose={true}
        backdropComponent={renderBackdrop}
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
              <BottomSheetTextInput
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
                      {icon !== undefined && (
                        <Ionicons name={icon!} size={15} />
                      )}
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
  }
);

export default DropdownBottomSheet;
