import { View, ViewToken } from "react-native";
import React, { useRef, useState } from "react";
import SlideItem from "./SlideItem";
import Pagination from "./Pagination";
import { FlatList } from "react-native-gesture-handler";
import { SlidesDataOportunity } from "./Oportunity";
import { SlidesDataLearningHub } from "./LearningHub";

export type SlidesDataWeeklyChallenge = {
  endsOn: Date;
  item: number;
  target: number;
  extra: number;
};

export type ItemDataType =
  | SlidesDataWeeklyChallenge
  | SlidesDataOportunity
  | SlidesDataLearningHub;

type SliderProps<T> = {
  children: (itemData: T) => React.JSX.Element;
  items: T[];
};

const Slider = <T extends ItemDataType>({
  children,
  items,
}: SliderProps<T>) => {
  const [index, setIndex] = useState(0);

  const handleOnViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken<any>[] }) => {
      setIndex(viewableItems[0].index!);
    }
  ).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 42,
  }).current;

  return (
    <View className="flex gap-3">
      <FlatList
        data={items}
        renderItem={({ item }) => <SlideItem item={item} children={children} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />

      <Pagination data={items} index={index} />
    </View>
  );
};

export default Slider;
