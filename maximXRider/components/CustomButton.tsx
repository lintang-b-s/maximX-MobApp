import { ButtonProps } from "@/types/type";
import { TouchableOpacity, Text, TouchableHighlight } from "react-native";

const getBgVariantStyle = (variant: ButtonProps["bgVariant"]) => {
  switch (variant) {
    case "primary":
      return "bg-general-700";
    case "secondary":
      return "bg-general-100";
    case "danger":
      return "bg-red-500";
    case "success":
      return "bg-green-500";
  }
};

const getTextVariantStyle = (variant: ButtonProps["textVariant"]) => {
  switch (variant) {
    case "primary":
      return "text-secondary-400";
    case "secondary":
      return "text-black";
    case "danger":
      return "text-red-100";
    case "success":
      return "text-green-100";
  }
};

const CustomButton = ({
  onPress,
  title,
  bgVariant = "primary",
  textVariant = "secondary",
  IconLeft,
  IconRight,
  className,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`my-2 w-full rounded-full p-4 flex flex-row justify-center
                items-center ${getBgVariantStyle(bgVariant)}  ${className}`}
      {...props}
    >
      {IconLeft && <IconLeft />}

      <Text
        className={`text-lg font-RobotoSemiBold ${getTextVariantStyle(textVariant)} `}
      >
        {title}
      </Text>

      {IconRight && <IconRight />}
    </TouchableOpacity>
  );
};

export default CustomButton;
