import RideLayout from "@/components/RideLayout";
import { icons, images } from "@/constants";
import { useLocationStore } from "@/store";
import { Image, Text, View } from "react-native";
import Feather from "@react-native-vector-icons/feather";
import FontAwesome6 from "@react-native-vector-icons/fontawesome6";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

const Ride = () => {
  const { userLatitude, userLongitude } = useLocationStore();
  return (
    <RideLayout
      location={{
        latitude: userLatitude!,
        longitude: userLongitude!,
        showEarlyMarker: false,
      }}
    >
      <Text className="font-RobotoSemiBold text-xl mb-3">
        Pengemudi sedang dalam perjalanan
      </Text>
      <View className="my-4 flex gap-4 flex-1 ">
        {/* driver info */}
        <View className="flex flex-row items-center justify-between w-full">
          <View className="flex flex-row items-center gap-2">
            <Image source={images.driver} className="w-14 h-14 rounded-full" />
            <View className="flex items-start  ml-4 justify-start">
              <Text className="font-RobotoLight text-base text-secondary-500">
                Pengemudi Anda
              </Text>
              <Text className="font-RobotoBold text-lg text-secondary-600">
                Abdulmigos
              </Text>
            </View>
          </View>

          <View className="flex flex-row justify-between items-center gap-4">
            <View className="flex items-center justify-center  rounded-full p-5 bg-[#F5F5FF]">
              <Feather name="phone" color={"#5256E8"} size={14} />
            </View>
            <View className="flex items-center justify-center  rounded-full p-5 bg-[#F5F5FF]">
              <Feather name="mail" color={"#5256E8"} size={14} />
            </View>
          </View>
        </View>

        <View className="w-full h-[1.5px] bg-general-800 "></View>
        {/* lokasi penjemputan */}
        <View className="flex flex-row items-start justify-start gap-4 w-full">
          <Image source={icons.eclipse} className="w-6 h-6 mt-2" />
          <View className="flex justify-start items-start ">
            <Text className="font-RobotoLight text-base text-secondary-500">
              lokasi penjemputan
            </Text>
            <Text className="font-RobotoBold text-lg text-secondary-600">
              TPU Tanah Kusir
            </Text>
          </View>
        </View>

        <View className="flex flex-row pl-2  ">
          <View className="flex">
            {[...Array(8)].map((_, index) => {
              if (index === 3) {
                return (
                  <View key={9999} className="flex flex-row gap-[1px]">
                    <View
                      key={index}
                      className="w-[2px] h-2 bg-general-800 mt-[3px]"
                    />
                    {[...Array(35)].map((_, index) => (
                      <View
                        key={index}
                        className="w-[5px] h-[2px] mr-1 bg-general-800 mt-[2px]"
                      />
                    ))}
                  </View>
                );
              }
              return (
                <View
                  key={index}
                  className="w-[2px] h-2 bg-general-800 mt-[3px]"
                />
              );
            })}
          </View>
          <View className="rounded-full w-12 h-12  p-1 border-2 border-general-800 mt-3">
            <Image source={icons.car} className="w-10 h-10" />
          </View>
        </View>

        {/* lokasi destination */}

        <View className="flex flex-row items-center justify-start gap-4 w-full">
          <FontAwesome6
            name="location-dot"
            color={"red"}
            iconStyle="solid"
            size={22}
          />
          <View className="flex justify-start items-start ">
            <Text className="font-RobotoLight text-base text-secondary-500">
              lokasi penjemputan
            </Text>
            <Text className="font-RobotoBold text-lg text-secondary-600">
              Alun-Alun
            </Text>
          </View>
        </View>

        <View className="w-full h-[1.5px] bg-general-800 "></View>
        <View className="flex flex-row items-center justify-between gap-4 w-full">
          <View className="flex justify-start items-start ">
            <Text className="font-RobotoLight text-base text-secondary-500">
              Pembayaran
            </Text>
            <Text className="font-RobotoBold text-base text-secondary-600">
              Saldo Gopay: 082 146 022 211
            </Text>
          </View>
          <Text className="font-RobotoLight text-xl text-secondary-700 mt-4">
            Rp. 1.000.000
          </Text>
        </View>

        <CustomButton title="order summary (dummy)" onPress={() => {
          router.push("/(root)/order-summary")
        }} />
      </View>
    </RideLayout>
  );
};

export default Ride;
