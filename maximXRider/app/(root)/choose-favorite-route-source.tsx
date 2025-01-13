import ChooseLocation from "@/components/ChooseLocation";
import ChooseLocationLayout from "@/components/ChooseLocationLayout";
import { useFavoriteRouteStore, useLocationStore } from "@/store";
import { OSMMapProps } from "@/types/type";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const ChooseFavoriteRouteSource = () => {
  const { userLatitude, userLongitude, userAddress } = useLocationStore();
  const {
    sourceAddress,
    sourceLocationName,
    sourceLatitude,
    sourceLongitude,
    setFavoriteSourceLocation,
  } = useFavoriteRouteStore();
  const params = useLocalSearchParams<{ query?: string }>();
  const [showMarker, setShowMarker] = useState<boolean>(true);

  useEffect(() => {
    if (sourceLatitude == undefined) {
      setFavoriteSourceLocation({
        latitude: userLatitude!,
        longitude: userLongitude!,
        address: userAddress!,
        locationName: userAddress!,
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
          latitude: sourceLatitude!,
          longitude: sourceLongitude!,
          showEarlyMarker: showMarker,
        }}
        setLocation={setFavoriteSourceLocation}
      >
        <ChooseLocation
          title="Address"
          locationName={sourceLocationName!}
          locationAddress={sourceAddress!}
        />
      </ChooseLocationLayout>
    </GestureHandlerRootView>
  );
};

export default ChooseFavoriteRouteSource;
