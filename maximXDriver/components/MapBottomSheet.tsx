import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
} from "react";
import {
  Gesture,
  GestureDetector,
  NativeGesture,
  PanGesture,
} from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

import { curveBasis, line } from "d3-shape";
import Svg, { Path } from "react-native-svg";
import { icons } from "@/constants";

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

type BottomSheetProps = {
  children?: React.ReactNode;
  page: string;
  scroll: PanGesture;
  handleSetScrollViewActive: (active: boolean) => void;

  handleChangePage: (page: string) => void;
};

export type BottomSheetRefProps = {
  scrollTo: (destination: number) => void;
  isActive: () => boolean;
};

const MapBottomSheet = forwardRef<BottomSheetRefProps, BottomSheetProps>(
  (
    { children, handleChangePage, page, scroll, handleSetScrollViewActive },
    ref
  ) => {
    const translateY = useSharedValue(-20);

    const active = useSharedValue(false);

    const scrollTo = useCallback((destination: number) => {
      "worklet";

      if (destination === MAX_TRANSLATE_Y) {
        runOnJS(handleSetScrollViewActive)(true);
      } else {
        runOnJS(handleSetScrollViewActive)(false);
      }

      active.value = destination !== 0;
      translateY.value = withSpring(destination, { damping: 50 });
    }, []);

    const isActive = useCallback(() => {
      return active.value;
    }, []);

    useImperativeHandle(ref, () => ({ scrollTo, isActive }), [
      scrollTo,
      isActive,
    ]);

    const context = useSharedValue({ y: 0 });

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
          scrollTo(-20);
        } else if (translateY.value < -SCREEN_HEIGHT / 2) {
          scrollTo(MAX_TRANSLATE_Y);
        }
      });

    const composed = Gesture.Simultaneous(gesture, scroll);

    const rBottomSheetStyle = useAnimatedStyle(() => {
      return {
        transform: [{ translateY: translateY.value }],
      };
    });

    return (
      <GestureDetector gesture={composed}>
        <Animated.View style={[styles.bottomSheetContainer, rBottomSheetStyle]}>
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
                if (translateY.value > -249) {
                  scrollTo(-250);
                } else if (page == "drive") {
                  scrollTo(-20);
                }
                handleChangePage("drive");
              }}
              style={{ alignItems: "flex-start", width: 150 }}
            >
              <Image
                source={icons.steer}
                style={{ width: 34, height: 34 }}
                tintColor={page === "drive" ? "#0C973A" : "black"}
              />
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

                handleChangePage("earnings");
              }}
              style={{ alignItems: "flex-end", width: 150 }}
            >
              <Image
                source={icons.paid}
                style={{ width: 34, height: 34 }}
                tintColor={page === "earnings" ? "#0C973A" : "black"}
              />
              <Text style={{ marginTop: 4, fontWeight: "600", fontSize: 16 }}>
                Earnings
              </Text>
            </TouchableOpacity>
          </View>
          {children}
        </Animated.View>
      </GestureDetector>
    );
  }
);

const styles = StyleSheet.create({
  bottomSheetContainer: {
    height: SCREEN_HEIGHT,
    width: "100%",
    backgroundColor: "white",
    position: "relative",
  },
});
export default MapBottomSheet;
