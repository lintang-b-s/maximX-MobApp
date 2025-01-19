import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import {
  allTransactions,
  allTransactionsDecember,
  months,
  shortDayName,
  weeklyActivity,
} from "@/constants";
import moment from "moment";
import { FlatList } from "react-native";
import { RideHistoryActivity, Transaction, WeeklySummary } from "@/types/type";
import Feather from "@react-native-vector-icons/feather";
import FontAwesome6 from "@react-native-vector-icons/fontawesome6";
import Ionicons from "@react-native-vector-icons/ionicons";

import * as _ from "lodash";
import { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { toHoursAndMinutes } from "@/lib/utils";

type TxDate = { date: Date; totalFare: number };

const RideActivity = () => {
  const yearMonthDay = (item: RideHistoryActivity) =>
    moment(item.rideDateTime, "YYYY-MM-DD").format("YYYY-MM-DD");

  const [weeklyRidesIndex, setWeeklyRidesIndex] = useState(
    weeklyActivity.length - 1
  );

  const [groupByDateRides, setGroupByDateRides] = useState(
    _.groupBy(weeklyActivity[weeklyRidesIndex].rideHistory, yearMonthDay)
  );

  useEffect(() => {
    setGroupByDateRides(
      _.groupBy(weeklyActivity[weeklyRidesIndex].rideHistory, yearMonthDay)
    );
  }, [weeklyRidesIndex]);

  const [allRideDate, setAllRideDate] = useState<TxDate[]>([]);

  useEffect(() => {
    let tempAllTxDate: TxDate[] = [];
    for (const txDate in groupByDateRides) {
      let totalFare = 0;
      const txInThisDay = groupByDateRides[txDate];
      for (const tx of txInThisDay!) {
        totalFare += tx.fare;
      }

      tempAllTxDate.push({ date: new Date(txDate), totalFare: totalFare });
    }

    setAllRideDate(tempAllTxDate);
  }, [groupByDateRides]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        nestedScrollEnabled
        scrollEnabled
        data={allRideDate}
        ListHeaderComponent={
          <View className="h-[250px] bg-[#D4D3E3] px-5  py-4 flex items-start gap-4">
            <View className="rounded-lg bg-white px-4 py-5 flex items-center gap-8">
              <View className="flex flex-row justify-between w-full">
                <TouchableOpacity
                  onPress={() => {
                    if (weeklyRidesIndex - 1 >= 0) {
                      setWeeklyRidesIndex(weeklyRidesIndex - 1);
                    }
                  }}
                >
                  <Ionicons name="chevron-back" size={18} color={"black"} />
                </TouchableOpacity>

                <Text className="text-lg font-RobotoBold">
                  {weeklyActivity[weeklyRidesIndex].startDate.toLocaleString(
                    "default",
                    {
                      month: "short",
                    }
                  )}{" "}
                  {weeklyActivity[weeklyRidesIndex].startDate.getDate()} -{" "}
                  {weeklyActivity[weeklyRidesIndex].endDate.toLocaleString(
                    "default",
                    {
                      month: "short",
                    }
                  )}{" "}
                  {weeklyActivity[weeklyRidesIndex].endDate.getDate()}
                </Text>

                <TouchableOpacity
                  onPress={() => {
                    if (weeklyRidesIndex + 1 <= weeklyActivity.length - 1) {
                      setWeeklyRidesIndex(weeklyRidesIndex + 1);
                    }
                  }}
                >
                  <Ionicons name="chevron-forward" size={18} color={"black"} />
                </TouchableOpacity>
              </View>

              <View className="flex flex-row justify-between w-full px-5">
                <View className="gap-2 flex items-center">
                  <Text className="text-general-500 text-base font-Roboto">
                    Earnings
                  </Text>
                  <Text className="font-RobotoBold text-xl ">
                    ${weeklyActivity[weeklyRidesIndex].earnings}
                  </Text>
                </View>
                <View className="w-[2px] h-full bg-neutral-200" />

                <View className="gap-2 flex items-center">
                  <Text className="text-general-500 text-base font-Roboto">
                    Online
                  </Text>
                  <Text className="font-RobotoBold text-xl ">
                    {
                      toHoursAndMinutes(
                        weeklyActivity[weeklyRidesIndex].onlineMinutes
                      ).hours
                    }{" "}
                    hr{" "}
                    {
                      toHoursAndMinutes(
                        weeklyActivity[weeklyRidesIndex].onlineMinutes
                      ).minutes
                    }{" "}
                    min
                  </Text>
                </View>

                <View className="w-[2px] h-full bg-neutral-200" />

                <View className="gap-2 flex items-center">
                  <Text className="text-general-500 text-base font-Roboto">
                    Rides
                  </Text>
                  <Text className="font-RobotoBold text-xl ">
                    {weeklyActivity[weeklyRidesIndex].rides}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        }
        ListEmptyComponent={
          <View className="flex gap-2 items-center px-5 py-5  mt-[30%]">
            <Text className="text-lg font-RobotoBold  ">
              You haven't taken any rides
            </Text>
            <Text className="text-general-500 text-base font-Roboto">
              Once you successfully complete a ride, you'll earn and all
              transaction will appear
            </Text>
          </View>
        }
        renderItem={({ item }) => {
          return (
            <View className="flex gap-3 items-start justify-start w-full mb-4">
              <View className="flex flex-row w-full justify-between items-center py-3 px-3 bg-[#F3F2F7]">
                <Text className="font-RobotoBold text-lg ">
                  {shortDayName(item.date, "en-EN")}, {item.date.getDate()}{" "}
                  {months[item.date.getMonth()]}
                </Text>

                <Text className="font-RobotoBold text-lg ">
                  ${item.totalFare}
                </Text>
              </View>

              <FlatList
                data={groupByDateRides[item.date.toISOString().split("T")[0]]}
                ListEmptyComponent={
                  <View className="flex w-full items-center justify-center">
                    <Text className="text-general-500 text-lg font-Roboto">
                      No Earning activity.
                    </Text>
                  </View>
                }
                renderItem={({ item }) => {
                  return (
                    <View className="w-full flex px-3 flex-row  justify-between my-2">
                      <View className="flex flex-row gap-4">
                        <FontAwesome6
                          name="taxi"
                          size={16}
                          color={"black"}
                          iconStyle="solid"
                          style={{ marginTop: 5 }}
                        />

                        <View className="flex items-start gap-2">
                          <Text className="text-lg font-RobotoBold ">
                            {item.destination}
                          </Text>

                          <Text className="text-general-500 text-md font-Roboto ">
                            {item.rideDateTime.toLocaleString("en-US", {
                              hour: "numeric",
                              minute: "numeric",
                              hour12: true,
                            })}
                          </Text>
                        </View>
                      </View>
                      <Text
                        className={`font-RobotoSemiBold text-base ${item.fare < 0 ? "text-danger-500" : ""}`}
                      >
                        {item.fare < 0
                          ? `- $${Math.abs(item.fare)}`
                          : `$${item.fare}`}
                      </Text>
                    </View>
                  );
                }}
              />
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default RideActivity;
