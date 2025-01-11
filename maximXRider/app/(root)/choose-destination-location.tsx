import ChooseLocation from "@/components/ChooseLocation";
import ChooseLocationLayout from "@/components/ChooseLocationLayout";
import { useLocationStore } from "@/store";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const ChooseDestinationLocation = () => {
  const {
    userLatitude,
    userLongitude,
    userAddress,
    destinationLatitude,
    destinationLongitude,
    destinationAddress,
    destinationLocationName,
    setDestinationLocation,
  } = useLocationStore();
  const params = useLocalSearchParams<{ query?: string }>();
  const [showMarker, setShowMarker] = useState<boolean>(false);

  useEffect(() => {
    if (destinationLatitude == undefined) {
      setDestinationLocation({
        latitude: userLatitude!,
        longitude: userLongitude!,
        address: "",
        locationName: "",
      });
    }
  }, []);

  useEffect(() => {
    // fetch osm-search api & return list lokasi
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
        setLocation={setDestinationLocation}
      >
        <ChooseLocation
          title="Destination"
          locationName={params.query || destinationLocationName!}
          locationAddress={params.query || destinationAddress!}
        />
      </ChooseLocationLayout>
    </GestureHandlerRootView>
  );
};

export default ChooseDestinationLocation;
