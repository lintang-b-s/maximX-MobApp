import { View, Text } from "react-native";
import React, { Children } from "react";
import { SlidesDataWeeklyChallenge } from "./Slider";
import { AnimatedCircularProgress } from "react-native-circular-progress";

const SlideItem = ({
  item,
  children,
}: {
  item: SlidesDataWeeklyChallenge;
  children: ({ itemData }: { itemData: any }) => React.JSX.Element;
}) => {
  return children({ itemData: item });
};

export default SlideItem;
