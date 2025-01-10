import ChooseLocation from "@/components/ChooseLocation";
import ChooseLocationLayout from "@/components/ChooseLocationLayout";
import { useLocationStore } from "@/store";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const ChooseDestinationLocation = () => {
  const { setDestinationLocation } = useLocationStore();
  const params = useLocalSearchParams<{ query?: string }>();

  useEffect(() => {
    setDestinationLocation({
      latitude: -7.549057987722248,
      longitude: 110.78252626461193,
      locationName: params.query!,
      address: params.query!,
    });
  }, [params.query]);

  return (
    <GestureHandlerRootView className="items-center absolute top-0 left-0 right-0 bottom-0 justify-end ">
      <ChooseLocationLayout>
        <ChooseLocation
          title="Destination"
          locationName="Galabo Culinary Solo"
          locationAddress="Jalan Mayor Sunaryo"
        />
      </ChooseLocationLayout>
    </GestureHandlerRootView>
  );
};

export default ChooseDestinationLocation;
