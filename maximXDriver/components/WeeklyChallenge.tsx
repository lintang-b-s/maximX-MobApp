import { View, Text } from "react-native";
import React, { Children } from "react";
import { SlidesDataWeeklyChallenge } from "./Slider";
import { AnimatedCircularProgress } from "react-native-circular-progress";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const WeeklyChallenge = ({
  itemData,
}: {
  itemData: SlidesDataWeeklyChallenge;
}) => {
  return (
    <View className=" items-center w-96 h-40 mr-10 px-4 py-4  border border-neutral-200 rounded-lg">
      <View className="flex flex-row items-center justify-between w-full">
        <View className="flex items-start ">
          <Text className="text-general-500 text-base font-RobotoSemiBold">
            Ends on {days[itemData.endsOn.getDay()]}
          </Text>
          <Text className="font-RobotoBold text-lg ">
            Complete {itemData.target} trips and {"\n"}get ${itemData.extra}{" "}
            extra
          </Text>
          <Text className="mt-2 text-general-200 font-Roboto">
            {itemData.item} trips done out of {itemData.target}
          </Text>
        </View>
        <View className="mt-8">
          <AnimatedCircularProgress
            size={70}
            width={10}
            fill={(itemData.item / itemData.target) * 100}
            arcSweepAngle={200}
            rotation={260}
            tintColor="#0C973A"
            backgroundColor="#E5E5E5"
          >
            {(fill) => (
              <Text className="font-RobotoBold text-lg ">
                {Math.round((itemData.item / itemData.target) * 100)}%
              </Text>
            )}
          </AnimatedCircularProgress>
        </View>
      </View>
    </View>
  );
};

export default WeeklyChallenge;
