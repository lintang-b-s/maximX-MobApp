import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  LayoutChangeEvent,
  Dimensions,
  Image,
} from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import RideLayout from "@/components/RideLayout";
import { useLocationStore, useRideRequestStore } from "@/store";
import * as Location from "expo-location";
import Loading from "@/components/Loading";
import Ionicons from "@react-native-vector-icons/ionicons";
import FontAwesome6 from "@react-native-vector-icons/fontawesome6";

import {
  icons,
  months,
  rideRequestExample,
  slidesDataLearningHubs,
  slidesOportunities,
  SlidesWeeklyChallengeData,
  todaysActivity,
  weeklyActivity,
} from "@/constants";

import { FlatList, Gesture } from "react-native-gesture-handler";

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import GoButton from "@/components/button/GoButton";
import Slider from "@/components/Slider";
import WeeklyChallenge from "@/components/WeeklyChallenge";
import Oportunity from "@/components/Oportunity";
import LearningHub from "@/components/LearningHub";
import CustomButton from "@/components/CustomButton";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { router } from "expo-router";
import { toHoursAndMinutes } from "@/lib/utils";
import { LinearProgress } from "@rneui/themed";
import { RideRequest } from "@/types/type";
import RideRequestPopUp from "@/components/RideRequest";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const home = () => {
  const { userLatitude, userLongitude, setUserLocation, setSourceLocation } =
    useLocationStore();

  const [buttonLoading, setButtonLoading] = useState(false);
  const [buttonText, setButtonText] = useState("Go Online");
  const [weeklySummaryIndex, setWeeklySummaryIndex] = useState(
    weeklyActivity.length ? weeklyActivity.length - 1 : 0
  );

  const { rideRequest, setRideRequest } = useRideRequestStore();

  const [balance, setBalance] = useState(127);

  const [page, setPage] = useState("drive"); // drive or earnings
  const handleChangePage = (newPage: string) => {
    setPage(newPage);
  };
  const scale = useSharedValue(1);

  const translateYScrollView = useSharedValue(0);
  const contextScrollView = useSharedValue({ y: 0 });

  const [showEditWeeklyEarnings, setShowEditWeeklyEarnings] = useState(false);

  const [scrollViewHeight, setScrollViewHeight] = useState(0);
  const [scrollViewActive, setScrollViewActive] = useState(true);
  const [weeklyEarningGoal, setWeeklyEarningGoal] = useState(200);

  const bottomSheetEditWeeklyRef = useRef<BottomSheet>(null);

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

  const scrollGesture = Gesture.Pan()
    .onStart(() => {
      contextScrollView.value = { y: translateYScrollView.value };
    })
    .onUpdate((event) => {
      translateYScrollView.value =
        event.translationY + contextScrollView.value.y;
      translateYScrollView.value = Math.max(
        Math.min(translateYScrollView.value, 0),
        -scrollViewHeight / 1.5
      );
    })
    .enabled(scrollViewActive);

  const rScrollViewStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateYScrollView.value }],
    };
  });

  const reanimatedGoButtonStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scaleX: scale.value,
      },
    ],
  }));

  useEffect(() => {
    const requestLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status != "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync();

      const address = await Location.reverseGeocodeAsync({
        latitude: location.coords?.latitude!,
        longitude: location.coords?.longitude!,
      });

      setUserLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,

        address: `${address[0].formattedAddress!.split(",").slice(1, 3).join(", ")}`,
      });
    };

    requestLocation();
  }, []);

  if (userLatitude == null) {
    return <Loading />;
  }

  const onLayout = (event: LayoutChangeEvent) => {
    "worklet";
    const { x, y, height, width } = event.nativeEvent.layout;
    setScrollViewHeight(height);
  };

  const handlePressGoButton = () => {
    scale.value = withSpring(0.6, { duration: 1000 });

    setButtonLoading(true);
    setTimeout(() => {
      setButtonLoading(false);
      scale.value = withSpring(1);
      if (buttonText === "Go Online") {
        setButtonText("Go Offline");
      } else {
        setButtonText("Go Online");
      }
    }, 1000);
  };

  const ButtonChildren = () => {
    if (buttonLoading) {
      return <ActivityIndicator size={28} color={"white"} />;
    } else {
      return (
        <Text className={`text-lg font-RobotoSemiBold text-white `}>
          {buttonText}
        </Text>
      );
    }
  };

  const handleSetScrollViewActive = (active: boolean) => {
    setScrollViewActive(active);
  };

  const renderActivityToday = () => {
    if (todaysActivity.length !== 0) {
      return (
        <FlatList
          data={todaysActivity.slice(0, 3)}
          ListEmptyComponent={
            <View className=" flex  items-center  justify-between px-5 py-5 border border-neutral-200 rounded-lg mb-2">
              <Text className="text-lg font-RobotoBold">
                No activity this week
              </Text>
              <Text className="text-general-500 text-base font-Roboto">
                You haven't done any rides today, go online and start taking
                trips
              </Text>
            </View>
          }
          renderItem={({ item }) => {
            return (
              <View className="flex flex-row justify-between w-full py-2 px-3 gap-3">
                <View className="flex flex-row items-start gap-4">
                  <FontAwesome6
                    name="taxi"
                    size={18}
                    color={"black"}
                    iconStyle="solid"
                  />
                  <View className="flex gap-3">
                    <Text className="font-RobotoBold text-lg ">
                      {item.destination}
                    </Text>
                    <Text className="text-general-500 text-base font-Roboto">
                      {item.rideDateTime.toLocaleTimeString()}
                    </Text>
                  </View>
                </View>
                <Text className="font-RobotoBold text-lg tracking-wide ">
                  ${item.fare}
                </Text>
              </View>
            );
          }}
        />
      );
    }
  };

  const renderWeeklySummary = () => {
    return (
      <>
        <View className="flex flex-row justify-between w-full">
          <TouchableOpacity
            onPress={() => {
              if (weeklySummaryIndex - 1 >= 0) {
                setWeeklySummaryIndex(weeklySummaryIndex - 1);
              }
            }}
          >
            <Ionicons name="chevron-back" size={18} />
          </TouchableOpacity>
          <Text className="text-lg font-RobotoBold tracking-wide">
            {
              months[
                weeklyActivity[weeklySummaryIndex].startDate.getMonth() - 1
              ]
            }{" "}
            {weeklyActivity[weeklySummaryIndex].startDate.getDate()} -{" "}
            {months[weeklyActivity[weeklySummaryIndex].endDate.getMonth()]}{" "}
            {weeklyActivity[weeklySummaryIndex].endDate.getDate()}
          </Text>
          <TouchableOpacity
            onPress={() => {
              if (weeklySummaryIndex + 1 < weeklyActivity.length) {
                setWeeklySummaryIndex(weeklySummaryIndex + 1);
              }
            }}
          >
            <Ionicons name="chevron-forward" size={18} />
          </TouchableOpacity>
        </View>
        <View className=" flex flex-row  items-center  justify-between px-5 py-3  border border-neutral-200 rounded-lg mb-2">
          <View className="gap-2 flex items-center">
            <Text className="text-general-500 text-base font-Roboto">
              Earnings
            </Text>
            <Text className="font-RobotoBold text-xl ">
              ${weeklyActivity[weeklySummaryIndex].earnings}
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
                  weeklyActivity[weeklySummaryIndex].onlineMinutes
                ).hours
              }{" "}
              hr{" "}
              {
                toHoursAndMinutes(
                  weeklyActivity[weeklySummaryIndex].onlineMinutes
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
              {weeklyActivity[weeklySummaryIndex].rides}
            </Text>
          </View>
        </View>

        <FlatList
          data={weeklyActivity[weeklySummaryIndex].rideHistory.slice(0, 3)}
          ListEmptyComponent={
            <View className=" flex  items-center  justify-between px-5 py-5 border border-neutral-200 rounded-lg mb-2">
              <Text className="text-lg font-RobotoBold">No activity today</Text>
              <Text className="text-general-500 text-base font-Roboto">
                You haven't done any rides today, go online and start taking
                trips
              </Text>
            </View>
          }
          renderItem={({ item }) => {
            return (
              <View className="flex flex-row justify-between w-full py-2 px-3 gap-3">
                <View className="flex flex-row items-start gap-4">
                  <FontAwesome6
                    name="taxi"
                    size={18}
                    color={"black"}
                    iconStyle="solid"
                  />
                  <View className="flex gap-3">
                    <Text className="font-RobotoBold text-lg ">
                      {item.destination}
                    </Text>
                    <Text className="text-general-500 text-base font-Roboto">
                      {months[item.rideDateTime.getMonth()]}{" "}
                      {item.rideDateTime.getDate()}{" "}
                      {item.rideDateTime.toLocaleTimeString()}
                    </Text>
                  </View>
                </View>
                <Text className="font-RobotoBold text-lg tracking-wide ">
                  ${item.fare}
                </Text>
              </View>
            );
          }}
        />
      </>
    );
  };

  return (
    <RideLayout
      location={{
        latitude: userLatitude!,
        longitude: userLongitude!,
        showEarlyMarker: false,
      }}
      page={page}
      scroll={scrollGesture}
      handleChangePage={handleChangePage}
      handleSetScrollViewActive={handleSetScrollViewActive}
    >
      <View className="absolute  left-[35%] top-[-104px]">
        <View className="w-[135px]">
          <GoButton
            bgVariant={`${buttonText === "Go Online" ? "secondary" : "danger"}`}
            textVariant={`secondary`}
            active={true}
            className="rounded-full"
            style={[reanimatedGoButtonStyle]}
            onPress={handlePressGoButton}
          >
            <Text className={`text-lg font-RobotoSemiBold text-white `}>
              {ButtonChildren()}
            </Text>
          </GoButton>
        </View>
      </View>

      {page === "drive" ? (
        <View
          style={{
            overflow: "hidden",
            height: SCREEN_HEIGHT - 80,
          }}
          onLayout={onLayout}
        >
          <Animated.View
            style={[rScrollViewStyle]}
            className="flex-1 gap-3 px-3 py-3"
          >
            <View className="px-5 py-3  border border-neutral-200 rounded-lg flex gap-4">
              {buttonText === "Go Offline" && (
                <View className="flex gap-3 items-center mb-3">
                  <CustomButton
                    title="(dummy) dapat rider"
                    active
                    bgVariant="secondary"
                    textVariant="secondary"
                    onPress={() => {
                      setRideRequest(rideRequestExample);
                      router.push("/(root)/ride-request");
                    }}
                  />
                  <Text className="font-RobotoBold text-xl">
                    Finding ride requests
                  </Text>
                  <LinearProgress
                    style={{
                      width: "100%",
                      height: 2.5,
                      borderRadius: 100,
                    }}
                    color="#FD775D"
                    animation={{ duration: 2000 }}
                    trackColor="#FDEAE8"
                  />
                </View>
              )}
              <View className=" flex flex-row  items-center  justify-between ">
                <View className="gap-2 flex items-center">
                  <Text className="text-general-500 text-base font-Roboto">
                    Earnings
                  </Text>
                  <Text className="font-RobotoBold text-xl ">$12.2</Text>
                </View>
                <View className="w-[2px] h-full bg-neutral-200" />

                <View className="gap-2 flex items-center">
                  <Text className="text-general-500 text-base font-Roboto">
                    Online
                  </Text>
                  <Text className="font-RobotoBold text-xl ">1hr 12 min</Text>
                </View>

                <View className="w-[2px] h-full bg-neutral-200" />

                <View className="gap-2 flex items-center">
                  <Text className="text-general-500 text-base font-Roboto">
                    Rides
                  </Text>
                  <Text className="font-RobotoBold text-xl ">02</Text>
                </View>
              </View>
            </View>

            <TouchableOpacity>
              <View className="flex flex-row  items-center  justify-between px-5 py-3  border border-neutral-200 rounded-lg">
                <View className="flex flex-row gap-4">
                  <Ionicons name="settings-sharp" size={22} />
                  <Text className="text-lg font-RobotoBold ">
                    Driving Preferences
                  </Text>
                </View>
                <Image source={icons.next} className="w-5 h-5" />
              </View>
            </TouchableOpacity>

            <Text className="text-2xl font-RobotoBold tracking-wide	">
              Weekly Challenges
            </Text>
            <Slider
              items={SlidesWeeklyChallengeData}
              children={(itemData) => <WeeklyChallenge itemData={itemData} />}
            />

            <Text className="text-2xl font-RobotoBold tracking-wide	">
              Opportunity for you
            </Text>

            <Slider
              items={slidesOportunities}
              children={(itemData) => <Oportunity itemData={itemData} />}
            />

            <Text className="text-2xl font-RobotoBold tracking-wide	">
              Learning Hub
            </Text>

            <Slider
              items={slidesDataLearningHubs}
              children={(itemData) => <LearningHub itemData={itemData} />}
            />

            <Text className="text-2xl font-RobotoBold tracking-wide	">
              Help and support
            </Text>

            <View className="flex items-start px-2 mt-2">
              <View className="flex flex-row items-start gap-4">
                <Ionicons name="help-circle" size={24} color={"black"} />
                <View className="flex gap-1">
                  <Text className="text-lg font-RobotoBold">
                    Get your queries resolved
                  </Text>
                  <Text className="text-general-500 text-base font-Roboto">
                    Call or chat with us at anytime and get your issues solved
                    instantly.
                  </Text>
                </View>
              </View>

              <View className="flex flex-row items-start gap-4">
                <Ionicons name="help-circle" size={24} color={"black"} />
                <View className="flex gap-1">
                  <Text className="text-lg font-RobotoBold">
                    Setup an emergency contact
                  </Text>
                  <Text className="text-general-500 text-base font-Roboto">
                    We;ll call them if an issue is reported and you don't
                    respond.
                  </Text>
                </View>
              </View>
            </View>
          </Animated.View>
        </View>
      ) : (
        <View
          style={{
            overflow: "hidden",
            height: SCREEN_HEIGHT - 80,
          }}
          onLayout={onLayout}
        >
          <Animated.View
            style={[rScrollViewStyle]}
            className="flex-1 gap-3  py-3"
          >
            {balance !== 0 ? (
              <View className=" flex  items-start gap-4 px-5 py-5 bg-[#ECF7EF]">
                <Text className="text-lg font-RobotoSemiBold">Balance</Text>
                <Text className=" font-RobotoBold text-3xl tracking-wider	">
                  ${balance}
                </Text>
                <Text className="text-general-500 text-base font-Roboto">
                  Your payout is scheduled on Fri, 16th Mar
                </Text>

                <View className="flex flex-row gap-3">
                  <View className="w-40">
                    <CustomButton
                      title="Cash Out"
                      bgVariant="black"
                      textVariant="black"
                      className="rounded-full"
                      active={true}
                      onPress={() => {
                        router.push("/(root)/cash-out");
                      }}
                    />
                  </View>
                  <View className="w-40">
                    <CustomButton
                      title="Details"
                      bgVariant="white"
                      textVariant="white"
                      className="rounded-full"
                      active={true}
                      onPress={() => {
                        router.push("/(root)/balance-details");
                      }}
                    />
                  </View>
                </View>
              </View>
            ) : (
              <View className=" flex  items-start gap-4 px-5 py-5 bg-[#EFEEF2]">
                <Text className="text-lg font-RobotoSemiBold">Balance</Text>
                <Text className=" font-RobotoBold text-3xl tracking-wider	">
                  ${balance}
                </Text>
                <Text className="text-general-500 text-base font-Roboto">
                  Add the bank account where you want to receive payouts
                </Text>

                <View className="flex flex-row justify-start gap-3">
                  <View className="w-40">
                    <CustomButton
                      title="Add Account"
                      bgVariant="black"
                      textVariant="black"
                      className="rounded-full"
                      active={true}
                      onPress={() => {
                        router.push("/(root)/add-a-bank-account");
                      }}
                    />
                  </View>
                </View>
              </View>
            )}

            <View className="px-3 gap-3">
              <Text className="text-2xl font-RobotoBold tracking-wide	">
                Earning Goal
              </Text>
              <View className=" flex items-center w-full h-40  px-4 py-4  border border-neutral-200 rounded-lg self-center">
                <View className="flex flex-row items-center justify-between w-full">
                  <View className="flex items-start ">
                    <Text className="text-general-500 text-base font-RobotoSemiBold">
                      Ends on Monday
                    </Text>
                    <Text className="font-RobotoBold text-xl ">
                      Weekly Goal: Earn ${weeklyEarningGoal}/week
                    </Text>
                    <Text className="mt-2 text-general-200 text-base font-Roboto">
                      $87 earned out of ${weeklyEarningGoal}
                    </Text>
                  </View>
                  <View className="mt-8">
                    <AnimatedCircularProgress
                      size={75}
                      width={10}
                      fill={(87 / weeklyEarningGoal) * 100}
                      arcSweepAngle={200}
                      rotation={260}
                      tintColor="#0C973A"
                      backgroundColor="#E5E5E5"
                    >
                      {(fill) => (
                        <Text className="font-RobotoBold text-lg ">
                          {Math.round((87 / weeklyEarningGoal) * 100)}%
                        </Text>
                      )}
                    </AnimatedCircularProgress>
                  </View>
                </View>
              </View>

              <View className="w-64 self-center">
                <CustomButton
                  title="Edit my goal"
                  IconLeft={() => (
                    <Ionicons
                      style={{ marginRight: 20 }}
                      name="pencil"
                      size={18}
                    />
                  )}
                  active
                  bgVariant="white"
                  textVariant="white"
                  onPress={() => {
                    setShowEditWeeklyEarnings(true);
                    bottomSheetEditWeeklyRef.current?.collapse();
                    translateYScrollView.value = withSpring(
                      -scrollViewHeight / 1.5
                    );
                  }}
                  className="border border-neutral-200 rounded-full  "
                />
              </View>

              <Text className="text-2xl font-RobotoBold tracking-wide	">
                Today's Activity
              </Text>
              <View className=" flex flex-row  items-center  justify-between px-5 py-3  border border-neutral-200 rounded-lg mb-2">
                <View className="gap-2 flex items-center">
                  <Text className="text-general-500 text-base font-Roboto">
                    Earnings
                  </Text>
                  <Text className="font-RobotoBold text-xl ">$12.2</Text>
                </View>
                <View className="w-[2px] h-full bg-neutral-200" />

                <View className="gap-2 flex items-center">
                  <Text className="text-general-500 text-base font-Roboto">
                    Online
                  </Text>
                  <Text className="font-RobotoBold text-xl ">1hr 12 min</Text>
                </View>

                <View className="w-[2px] h-full bg-neutral-200" />

                <View className="gap-2 flex items-center">
                  <Text className="text-general-500 text-base font-Roboto">
                    Rides
                  </Text>
                  <Text className="font-RobotoBold text-xl ">02</Text>
                </View>
              </View>
              {renderActivityToday()}
              <View className="w-[200px] self-center">
                <CustomButton
                  title="See all activity"
                  IconRight={() => (
                    <Ionicons
                      name="arrow-forward-outline"
                      style={{ marginLeft: 12 }}
                      size={18}
                    />
                  )}
                  onPress={() => {
                    router.push("/(root)/ride-activity");
                  }}
                  active={true}
                  bgVariant="white"
                  textVariant="white"
                  className="border rounded-full border-neutral-200 "
                />
              </View>
              <Text className="text-2xl font-RobotoBold tracking-wide	">
                Weekly Summary
              </Text>
              {renderWeeklySummary()}

              <BottomSheet
                keyboardBehavior="extend"
                ref={bottomSheetEditWeeklyRef}
                snapPoints={["20%", "24%"]}
                index={showEditWeeklyEarnings ? 0 : -1}
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
                    <View className="flex items-center gap-3 ">
                      <Text className="font-RobotoBold text-xl ">
                        Set a weekly earning goal
                      </Text>
                      <View className="flex flex-row gap-5 items-center">
                        <TouchableOpacity
                          onPress={() => {
                            setWeeklyEarningGoal((prev) => prev - 50);
                          }}
                        >
                          <View className="rounded-full border p-4 border-neutral-200">
                            <FontAwesome6
                              iconStyle="solid"
                              name="minus"
                              size={18}
                            />
                          </View>
                        </TouchableOpacity>
                        <Text className="font-RobotoBold text-2xl  ">
                          ${weeklyEarningGoal}
                        </Text>

                        <TouchableOpacity
                          onPress={() => {
                            setWeeklyEarningGoal((prev) => prev + 50);
                          }}
                        >
                          <View className="rounded-full border p-4 border-neutral-200">
                            <FontAwesome6
                              iconStyle="solid"
                              name="plus"
                              size={18}
                            />
                          </View>
                        </TouchableOpacity>
                      </View>

                      <View className="w-40">
                        <CustomButton
                          active={true}
                          title="done"
                          className="rounded-full"
                          onPress={() => {
                            setShowEditWeeklyEarnings(false);
                            bottomSheetEditWeeklyRef.current?.close();
                          }}
                        />
                      </View>
                    </View>
                  </BottomSheetScrollView>
                </BottomSheetView>
              </BottomSheet>
            </View>
          </Animated.View>
        </View>
      )}
    </RideLayout>
  );
};

export default home;
