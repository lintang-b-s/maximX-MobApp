import { icons } from "@/constants";
import { RideProps } from "@/types/type";
import { Image, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";

function formatDate(now: Date) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();
  const hour = String(now.getHours()).padStart(2, "0");
  const minute = String(now.getMinutes()).padStart(2, "0");

  return `${day} ${month} ${year}, ${hour}:${minute}`;
}

function formatDateOnlyHour(now: Date) {
  const hour = String(now.getHours()).padStart(2, "0");
  const minute = String(now.getMinutes()).padStart(2, "0");

  return `${hour}:${minute}`;
}
const RideCard = ({ ride }: { ride: RideProps }) => {
  return (
    <View className="flex  justify-between items-start bg-white shadow-md  shadow-slate-500 p-4 rounded-2xl mt-3 gap-4 ">
      <View className="flex flex-row w-full justify-between items-start ">
        <View className="flex flex-row jstify-start items-start gap-4">
          <View className="flex justify-start items start">
            <Image source={icons.circle} className="w-6 h-6" />
            <View className="h-6 w-[3px] bg-general-900 ml-[9px]" />
            <View className="rounded-full h-6 w-6 items-center justify-center bg-general-900 ">
              <Image source={icons.flag} className="w-4 h-4" />
            </View>
          </View>
          <View className="flex justify-between items-start h-[60px]">
            <Text className="font-Roboto text-base text-secondary-900 ">
              {ride.source}
            </Text>
            <Text className="font-Roboto text-base text-secondary-900 ">
              {ride.destination}
            </Text>
          </View>
        </View>
        <TouchableOpacity>
          <Image source={icons.more} className="h-6 w-6" />
        </TouchableOpacity>
      </View>
      <Text className="font-RobotoLight text-base text-secondary-800 ml-2">
        {formatDate(ride.rideDate)} - {formatDateOnlyHour(ride.rideCompleteDate)} / {ride.status}
      </Text>
    </View>
  );
};

export default RideCard;
