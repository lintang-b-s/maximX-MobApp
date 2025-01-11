import { images, rideHistory } from "@/constants";
import { useLocationStore } from "@/store";
import { FlatList, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RideCard from "@/components/RideCard";

const Orders = () => {
  const {
    setUserLocation,
    setSourceLocation,
    userAddress,
    userLatitude,
    userLongitude,
    sourceAddress,
    sourceLocationName,
    destinationAddress,
    destinationLocationName,
  } = useLocationStore();

  return (
    <SafeAreaView className="flex-1 ">
      <View className="flex flex-row items-start justify-between px-6 bg-white">
        <Image
          className="w-[100px] h-[100px]"
          source={images.maximBig}
          resizeMode="contain"
        />

        <View className="mt-12">
          <Text className="font-Roboto text-lg text-general-900">
            {userAddress}
          </Text>
        </View>
      </View>
      <View className="w-full bg-secondary-200 h-[1px]" />

      <FlatList
        data={rideHistory}
        className="bg-general-600 p-4"
        renderItem={({ item }) => <RideCard ride={item} />}
        keyExtractor={(item, index) => index.toString()}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      />
    </SafeAreaView>
  );
};

export default Orders;
