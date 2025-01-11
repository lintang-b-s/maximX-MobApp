import { TouchableOpacity, View } from "react-native";

import FontAwesome6 from "@react-native-vector-icons/fontawesome6";
import { StarRatingProps } from "@/types/type";

const StarRating = ({
  defaultRating,
  setDefaultRating,
  className,
}: StarRatingProps) => {
  return (
    <View className="flex flex-row gap-2 ">
      {[...Array(5)].map((star, i) => {
        return (
          <TouchableOpacity
            key={i*2}
            className={`${i + 1 <= defaultRating ? "bg-[#FECB2F]" : "bg-[#CBD5E1]"}  rounded-full size-10 flex justify-center items-center ${className}`}
            onPress={() => setDefaultRating(i + 1)}
          >
            <FontAwesome6
              key={i}
              name="star"
              color={"white"}
              iconStyle="solid"
              size={20}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default StarRating;
