
import React from "react";
import {
  ItemDataType, 
  
 } from "./Slider";


type SliderItemProps<T> = {
  children: (itemData: T) => React.JSX.Element;
  item: T;
};

const SlideItem = <T extends ItemDataType>({
  item,
  children,
}: SliderItemProps<T>) => {
  return children(item);
};

export default SlideItem;
