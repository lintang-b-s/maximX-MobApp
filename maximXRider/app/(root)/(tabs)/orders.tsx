import { images, rideHistory } from "@/constants";
import { useLocationStore } from "@/store";
import { FlatList, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RideCard from "@/components/RideCard";
import LocationHeader from "@/components/LocationHeader";
import EmptyList from "@/components/EmptyList";

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
      <LocationHeader />
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
        ListEmptyComponent={() => (
          <EmptyList title="order history" />
        )}
      />
    </SafeAreaView>
  );
};

export default Orders;
