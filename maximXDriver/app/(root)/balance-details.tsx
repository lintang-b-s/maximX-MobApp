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
} from "@/constants";
import moment from "moment";
import { FlatList } from "react-native";
import { Transaction } from "@/types/type";
import Feather from "@react-native-vector-icons/feather";
import FontAwesome6 from "@react-native-vector-icons/fontawesome6";
import Ionicons from "@react-native-vector-icons/ionicons";

import * as _ from "lodash";
import { TransactionStatus } from "@/types/enum";
import RNDateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { router } from "expo-router";

type TxDate = { date: Date; totalFare: number };

const BalanceDetails = () => {
  const yearMonthDay = (item: Transaction) =>
    moment(item.date, "YYYY-MM-DD").format("YYYY-MM-DD");

  const [monthYearBalance, setMonthYearBalance] = useState(
    new Date(2025, 0, 1)
  );

  const [showBalanceCalendar, setShowBalanceCalendar] = useState(false);

  const [groupByDateTransactions, setGroupByDateTransactions] = useState(
    _.groupBy(allTransactions, yearMonthDay)
  );

  const [allTxDate, setAllTxDate] = useState<TxDate[]>([]);

  useEffect(() => {
    let tempAllTxDate: TxDate[] = [];
    for (const txDate in groupByDateTransactions) {
      let totalFare = 0;
      const txInThisDay = groupByDateTransactions[txDate];
      for (const tx of txInThisDay!) {
        totalFare += tx.fare;
      }

      tempAllTxDate.push({ date: new Date(txDate), totalFare: totalFare });
    }

    setAllTxDate(tempAllTxDate);
  }, [groupByDateTransactions]);

  const handleDateChange = (
    event: DateTimePickerEvent,
    date?: Date | undefined
  ) => {
    if (Platform.OS === "android") {
      setShowBalanceCalendar(false);
    }

    if (event.type === "neutralButtonPressed") {
      setMonthYearBalance(new Date(0));
    } else {
      setMonthYearBalance(new Date(date!.getFullYear(), date!.getMonth(), 1));
      if (date!.getMonth() === 0) {
        setGroupByDateTransactions(_.groupBy(allTransactions, yearMonthDay));
      } else if (date!.getMonth() === 11) {
        setGroupByDateTransactions(
          _.groupBy(allTransactionsDecember, yearMonthDay)
        );
      }
    }
  };

  const renderTransaction = (item: Transaction) => {
    switch (item.type) {
      case TransactionStatus.WITHDRAWN:
        return (
          <>
            <View className="rounded-full bg-[#0C973A] w-7 h-7 flex items-center justify-center">
              <Feather name="arrow-up-right" color={"white"} size={16} />
            </View>
            <View className="flex items-start gap-2">
              <Text className="text-lg font-RobotoBold ">
                {item.description}
              </Text>
              <Text className="text-general-500 text-base font-Roboto ">
                {item.description}
              </Text>
              <Text className="text-general-500 text-md font-Roboto ">
                {item.date.toLocaleString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })}
              </Text>
            </View>
          </>
        );

      case TransactionStatus.RIDE:
        return (
          <>
            <FontAwesome6
              name="taxi"
              size={16}
              color={"black"}
              iconStyle="solid"
            />

            <View className="flex items-start gap-2">
              <Text className="text-lg font-RobotoBold ">
                {item.description}
              </Text>

              <Text className="text-general-500 text-md font-Roboto ">
                {item.date.toLocaleString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })}
              </Text>
            </View>
          </>
        );

      case TransactionStatus.WEEKLY_CHALLENGE_REWARD:
        return (
          <>
            <View className=" rounded-full bg-black w-6 h-6 flex items-center justify-center">
              <FontAwesome6
                name="dollar-sign"
                size={16}
                color={"white"}
                iconStyle="solid"
              />
            </View>

            <View className="flex items-start gap-2">
              <Text className="text-lg font-RobotoBold ">
                {item.description}
              </Text>

              <Text className="text-general-500 text-md font-Roboto ">
                {item.date.toLocaleString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })}
              </Text>
            </View>
          </>
        );
    }
  };
  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        nestedScrollEnabled
        scrollEnabled
        data={allTxDate}
        ListHeaderComponent={
          <>
            <View className="h-[250px] bg-[#ECF7EF] px-5  flex items-start gap-4">
              <Text className="text-lg font-RobotoSemiBold ">Balance</Text>
              <Text className="font-RobotoBold text-5xl tracking-wide">
                $127.32
              </Text>
              <Text className="text-general-500 text-base font-RobotoSemiBold">
                Your payout is scheduled on Fri, 16th Mar
              </Text>
              <View className="w-[150px]">
                <CustomButton
                  title="Cash Out"
                  bgVariant="black"
                  textVariant="black"
                  active
                  className="rounded-full"
                  onPress={() => {
                    router.replace("/(root)/cash-out-complete");
                  }}
                />
              </View>
            </View>

            <Text className="text-2xl mt-5 px-5 font-RobotoBold tracking-wide">
              All Transactions
            </Text>
          </>
        }
        ListEmptyComponent={
          <View className=" flex  items-center  justify-between px-5 py-5 border border-neutral-200 rounded-lg mb-2">
            <Text className="text-lg font-RobotoBold">
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
            <View className="flex gap-3 items-start justify-start w-full px-5 my-3">
              <View className="flex flex-row w-full justify-between items-center">
                <Text className="font-RobotoBold text-lg ">
                  {shortDayName(item.date, "en-EN")}, {item.date.getDate()}{" "}
                  {months[item.date.getMonth()]}
                </Text>

                <Text className="font-RobotoBold text-lg ">
                  ${item.totalFare}
                </Text>
              </View>

              <FlatList
                data={
                  groupByDateTransactions[item.date.toISOString().split("T")[0]]
                }
                ListEmptyComponent={
                  <View className="flex w-full items-center justify-center">
                    <Text className="text-general-500 text-lg font-Roboto">
                      No Earning activity.
                    </Text>
                  </View>
                }
                renderItem={({ item }) => {
                  return (
                    <View className="w-full flex flex-row  justify-between my-2">
                      <View className="flex flex-row gap-4">
                        {renderTransaction(item)}
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
      <TouchableOpacity
        onPress={() => {
          setShowBalanceCalendar(true);
        }}
      >
        <View
          style={{ position: "absolute" }}
          className="rounded-full w-[180px] h-[48px] bg-black px-4 py-2 flex flex-row gap-3 items-center justify-center shadow-md shadow-black bottom-4 self-center"
        >
          <Ionicons
            name="calendar-number"
            size={16}
            color={"white"}
            style={{
              marginRight: 5,
            }}
          />
          <Text className="text-white font-RobotoSemiBold text-lg">
            {monthYearBalance.toLocaleString("default", { month: "short" })}{" "}
            {monthYearBalance.getFullYear()}
          </Text>
        </View>
      </TouchableOpacity>

      {showBalanceCalendar && (
        <RNDateTimePicker
          testID="datetimePicker"
          value={monthYearBalance}
          display="calendar"
          mode="date"
          onChange={handleDateChange}
        />
      )}
    </SafeAreaView>
  );
};

export default BalanceDetails;
