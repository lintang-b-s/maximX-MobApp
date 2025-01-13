// import { tailwindColors } from "@/constants";
import { ScrollView, TouchableOpacity, View } from "react-native";
const tailwindColors = {
  red: ["bg-red-600", "bg-red-700", "bg-red-800", "bg-red-400", "bg-red-500"],
  blue: [
    "bg-blue-600",
    "bg-blue-700",
    "bg-blue-800",
    "bg-blue-400",
    "bg-blue-500",
  ],
  green: [
    "bg-green-600",
    "bg-green-700",
    "bg-green-800",
    "bg-green-400",
    "bg-green-500",
  ],
  yellow: [
    "bg-yellow-600",
    "bg-yellow-700",
    "bg-yellow-800",
    "bg-yellow-400",
    "bg-yellow-500",
  ],
  orange: [
    "bg-orange-600",
    "bg-orange-700",
    "bg-orange-800",
    "bg-orange-400",
    "bg-orange-500",
  ],

  lime: [
    "bg-lime-600",
    "bg-lime-700",
    "bg-lime-800",
    "bg-lime-400",
    "bg-lime-500",
  ],

  sky: ["bg-sky-600", "bg-sky-700", "bg-sky-800", "bg-sky-400", "bg-sky-500"],

  emerald: [
    "bg-emerald-600",
    "bg-emerald-700",
    "bg-emerald-800",
    "bg-emerald-400",
    "bg-emerald-500",
  ],

  teal: [
    "bg-teal-600",
    "bg-teal-700",
    "bg-teal-800",
    "bg-teal-400",
    "bg-teal-500",
  ],

  violet: [
    "bg-violet-600",
    "bg-violet-700",
    "bg-violet-800",
    "bg-violet-400",
    "bg-violet-500",
  ],
};

const FavoriteObjectColors = ({
  pickedColor,
  setPickedColor,
}: {
  pickedColor: string;
  setPickedColor: (color: string) => void;
}) => {
  return (
    <View className="h-16 mt-2">
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {Object.entries(tailwindColors).map(([colorName, shades]) =>
          shades.map((shade) => {
            return (
              <TouchableOpacity
                key={`${colorName}-${shade}`}
                className={`w-12 h-12 rounded-full  ${shade} ${pickedColor === `${shade}` ? "border-4 border-gray-300 " : ""} `}
                onPress={() => setPickedColor(`${shade}`)}
              />
            );
          })
        )}
      </ScrollView>
    </View>
  );
};

export default FavoriteObjectColors;
