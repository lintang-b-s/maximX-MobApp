import ChooseLocation from "@/components/ChooseLocation";
import ChooseLocationLayout from "@/components/ChooseLocationLayout";
import { useFavoriteRouteStore, useLocationStore } from "@/store";
import { OSMMapProps } from "@/types/type";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const ChooseFavoriteRouteDestination = () => {
  const { userLatitude, userLongitude } = useLocationStore();
  const {
    destinationAddress,
    destinationLocationName,
    destinationLatitude,
    destinationLongitude,
    setFavoriteDestinationLocation,
  } = useFavoriteRouteStore();
  const params = useLocalSearchParams<{ query?: string }>();
  const [showMarker, setShowMarker] = useState<boolean>(false);

  useEffect(() => {
    if (destinationLatitude == undefined) {
      setFavoriteDestinationLocation({
        latitude: userLatitude!,
        longitude: userLongitude!,
        address: "",
        locationName: "",
      });
    }
  }, []);

  useEffect(() => {
    if (params.query != undefined) {
      setShowMarker(true);
    }
  }, [params.query]);

  return (
    <GestureHandlerRootView>
      <ChooseLocationLayout
        location={{
          latitude: destinationLatitude!,
          longitude: destinationLongitude!,
          showEarlyMarker: showMarker,
        }}
        setLocation={setFavoriteDestinationLocation}
      >
        <ChooseLocation
          title="Address"
          locationName={destinationLocationName!}
          locationAddress={destinationAddress!}
        />
      </ChooseLocationLayout>
    </GestureHandlerRootView>
  );
};

export default ChooseFavoriteRouteDestination;
