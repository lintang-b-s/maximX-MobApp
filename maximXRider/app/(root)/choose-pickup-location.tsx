import ChooseLocation from "@/components/ChooseLocation";
import ChooseLocationLayout from "@/components/ChooseLocationLayout";
import { useLocationStore } from "@/store";
import { OSMMapProps } from "@/types/type";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const ChoosePickUpLocation = () => {
  const {
    userLatitude,
    userLongitude,
    userAddress,
    sourceLatitude,
    sourceLongitude,
    sourceAddress,
    sourceLocationName,
    setSourceLocation,
  } = useLocationStore();
  const params = useLocalSearchParams<{ query?: string }>();

  useEffect(() => {
    setSourceLocation({
      latitude: userLatitude!, // replace dg hasil search
      longitude: userLongitude!,
      locationName: params.query!,
      address: params.query!,
    });
  }, [params.query]);

  return (
    <GestureHandlerRootView >
      <ChooseLocationLayout
        location={{
          latitude: sourceLatitude!,
          longitude: sourceLongitude!,
          showEarlyMarker: true,
        }}
        setLocation={setSourceLocation}
      >
        <ChooseLocation
          title="Pick-up point"
          locationName={params.query || sourceLocationName!}
          locationAddress={params.query || sourceAddress!}
        />
      </ChooseLocationLayout>
    </GestureHandlerRootView>
  );
};

export default ChoosePickUpLocation;
