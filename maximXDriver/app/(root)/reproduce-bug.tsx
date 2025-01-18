import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator,
  LayoutChangeEvent,
} from "react-native";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { curveBasis, line } from "d3-shape";
import Svg, { Path } from "react-native-svg";
import {
  icons,
  slidesDataLearningHubs,
  slidesOportunities,
  SlidesWeeklyChallengeData,
} from "@/constants";
import GoButton from "@/components/button/GoButton";
import Slider from "@/components/Slider";
import WeeklyChallenge from "@/components/WeeklyChallenge";
import Oportunity from "@/components/Oportunity";
import LearningHub from "@/components/LearningHub";
import Ionicons from "@react-native-vector-icons/ionicons";
import MapLibre from "@/components/MapLibre";
import FontAwesome6 from "@react-native-vector-icons/fontawesome6";
import { useLocationStore } from "@/store";
import * as Location from "expo-location";
import Loading from "@/components/Loading";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT * 0.8;

const TAB_HEIGHT = 90;

const { width } = Dimensions.get("window");

const lineGenerator = line();

const rect = lineGenerator([
  [0, 0],
  [width / 2, 0],
  [width, 0],
  [width, TAB_HEIGHT],
  [0, TAB_HEIGHT],
  [0, 0],
]);

const center = lineGenerator.curve(curveBasis)([
  [width * 0.15 * 2, 0],
  [width * 0.15 * 2 + 20, TAB_HEIGHT * 0.5],
  [width * 0.35 * 2 - 20, TAB_HEIGHT * 0.5],
  [width * 0.35 * 2, 0],
]);

const d = `${center} ${rect}`;
const ReproduceBug = () => {
  const [page, setPage] = useState("drive");
  const [buttonText, setButtonText] = useState("Go Online");
  const translateY = useSharedValue(-20);

  const [buttonLoading, setButtonLoading] = useState(false);
  const scale = useSharedValue(1);
  const { userLatitude, userLongitude, setUserLocation, setSourceLocation } =
    useLocationStore();

  const translateYScrollView = useSharedValue(0);
  const [scrollViewHeight, setScrollViewHeight] = useState(0);
  const [scrollViewActive, setScrollViewActive] = useState(false);

  const active = useSharedValue(false);

  const scrollTo = useCallback((destination: number) => {
    "worklet";

    if (destination === MAX_TRANSLATE_Y) {
      runOnJS(setScrollViewActive)(true);
    } else {
      runOnJS(setScrollViewActive)(false);
    }

    active.value = destination !== 0;
    translateY.value = withSpring(destination, { damping: 50 });
  }, []);

  const isActive = useCallback(() => {
    return active.value;
  }, []);

  const context = useSharedValue({ y: 0 });
  const contextScrollView = useSharedValue({ y: 0 });

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      translateY.value = event.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
    })
    .onEnd(() => {
      if (translateY.value > -SCREEN_HEIGHT / 3) {
        scrollTo(-100);
      } else if (translateY.value < -SCREEN_HEIGHT / 2) {
        scrollTo(MAX_TRANSLATE_Y);
      }
    });

  const scrollGesture = Gesture.Pan()
    .onStart(() => {
      contextScrollView.value = { y: translateYScrollView.value };
    })
    .onUpdate((event) => {
      translateYScrollView.value =
        event.translationY + contextScrollView.value.y;
      translateYScrollView.value = Math.max(
        Math.min(translateYScrollView.value, 0),
        -scrollViewHeight / 2
      );
    })
    .enabled(scrollViewActive);

  const composed = Gesture.Simultaneous(gesture, scrollGesture);

  const rBottomSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

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

  const onLayout = (event: LayoutChangeEvent) => {
    "worklet";
    const { x, y, height, width } = event.nativeEvent.layout;
    setScrollViewHeight(height);
  };

  if (userLatitude == null) {
    return <Loading />;
  }
  const handleChangePage = (newPage: string) => {
    setPage(newPage);
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

  return (
    <GestureHandlerRootView className="flex-1">
      <View className="flex-1 bg-white">
        <View className="flex h-screen">
          <View className="flex flex-row absolute z-10 top-16 items-center justify-start px-5">
            <TouchableOpacity onPress={() => {}}>
              <View className="w-10 h-10 bg-white rounded-full items-center justify-center">
                <FontAwesome6 name="bars" size={6} iconStyle="solid" />
              </View>
            </TouchableOpacity>
          </View>
          <MapLibre
            location={{
              latitude: userLatitude!,
              longitude: userLongitude!,
              showEarlyMarker: true,
            }}
          />
        </View>

        {/* MapBottomSheet */}
        <GestureDetector gesture={composed}>
          <Animated.View
            style={[styles.bottomSheetContainer, rBottomSheetStyle]}
          >
            <Svg
              style={{
                width,
                height: 80,
                position: "absolute",
                top: -78,
              }}
            >
              <Path fill={"white"} {...{ d }} />
            </Svg>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: width,
                paddingHorizontal: 24,
                position: "absolute",
                top: -70,
              }}
              pointerEvents="box-none"
            >
              <TouchableOpacity
                onPress={() => {
                  // setPage("drive");
                  if (translateY.value > -249) {
                    scrollTo(-250);
                  } else if (page == "drive") {
                    scrollTo(-20);
                  }
                }}
                style={{ alignItems: "flex-start", width: 150 }}
              >
                <Image source={icons.steer} style={{ width: 34, height: 34 }} />
                <Text style={{ marginTop: 4, fontWeight: "600", fontSize: 16 }}>
                  Drive
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  if (translateY.value > -249) {
                    scrollTo(-250);
                  } else if (page == "earnings") {
                    scrollTo(-20);
                  }
                }}
                style={{ alignItems: "flex-end", width: 150 }}
              >
                <Image source={icons.paid} style={{ width: 34, height: 34 }} />
                <Text style={{ marginTop: 4, fontWeight: "600", fontSize: 16 }}>
                  Earnings
                </Text>
              </TouchableOpacity>
            </View>

            <View className=" absolute left-[35%] top-[-104px] ">
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
                <View className=" flex flex-row  items-center  justify-between px-5 py-3  border border-neutral-200 rounded-lg">
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

                <Text className="text-2xl font-RobotoBold">
                  Weekly Challenges
                </Text>
                <Slider
                  items={SlidesWeeklyChallengeData}
                  children={(itemData) => (
                    <WeeklyChallenge itemData={itemData} />
                  )}
                />

                <Text className="text-2xl font-RobotoBold">
                  Opportunity for you
                </Text>

                <Slider
                  items={slidesOportunities}
                  children={(itemData) => <Oportunity itemData={itemData} />}
                />

                <Text className="text-2xl font-RobotoBold">Learning Hub</Text>

                <Slider
                  items={slidesDataLearningHubs}
                  children={(itemData) => <LearningHub itemData={itemData} />}
                />

                <Text className="text-2xl font-RobotoBold">
                  Help and support
                </Text>

                <View className="flex items-start px-2">
                  <View className="flex flex-row items-start gap-4">
                    <Ionicons name="help-circle" size={24} color={"black"} />
                  </View>
                </View>
                <Text className="text-2xl font-RobotoBold">
                  Help and support
                </Text>
                <Text className="text-2xl font-RobotoBold">
                  Help and support
                </Text>
                <Text className="text-2xl font-RobotoBold">
                  Help and support
                </Text>
                <Text className="text-2xl font-RobotoBold">
                  Help and support
                </Text>
                <Text className="text-2xl font-RobotoBold">
                  Help and support
                </Text>
                <Text className="text-2xl font-RobotoBold">
                  Help and support
                </Text>
                <Text className="text-2xl font-RobotoBold">
                  Help and support
                </Text>
                <Text className="text-2xl font-RobotoBold">
                  Help and support
                </Text>
              </Animated.View>
            </View>
          </Animated.View>
        </GestureDetector>
      </View>
    </GestureHandlerRootView>
  );
};
const styles = StyleSheet.create({
  bottomSheetContainer: {
    height: SCREEN_HEIGHT,
    width: "100%",
    backgroundColor: "white",
    position: "relative",
  },
});

export default ReproduceBug;
