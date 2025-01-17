import { ButtonProps, GoButtonProps } from "@/types/type";
import { TouchableOpacity, Text, TouchableHighlight } from "react-native";
import Animated from "react-native-reanimated";
const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity); // Create Animated component

const getBgVariantStyle = (variant: ButtonProps["bgVariant"]) => {
  switch (variant) {
    case "primary":
      return "bg-general-300";
    case "secondary":
      return "bg-general-200";
    case "tertiary":
      return "bg-white";
    case "danger":
      return "bg-red-500";
    case "success":
      return "bg-green-500";
    case "inactive":
      return "bg-general-600";
  }
};

const getTextVariantStyle = (variant: ButtonProps["textVariant"]) => {
  switch (variant) {
    case "primary":
      return "text-white";
    case "secondary":
      return "text-white";
    case "danger":
      return "text-red-100";
    case "success":
      return "text-green-100";
    case "inactive":
      return "text-general-500";
    case "tertiary":
      return "text-black";
  }
};

const GoButton = ({
  onPress,

  bgVariant = "primary",
  textVariant = "secondary",
  IconLeft,
  IconRight,
  className,
  active,
  style,
  children,

  ...props
}: GoButtonProps) => {
  return (
    <AnimatedTouchableOpacity
      onPress={onPress}
      style={style}
      className={`my-2 w-full  p-4 flex flex-row justify-center
                items-center ${active ? getBgVariantStyle(bgVariant) : getBgVariantStyle("inactive")}  ${className?.includes("rounded") ? className : `rounded-lg ${className}`} `}
      {...props}
    >
      {IconLeft && <IconLeft />}

      {children}

      {IconRight && <IconRight />}
    </AnimatedTouchableOpacity>
  );
};

export default GoButton;
