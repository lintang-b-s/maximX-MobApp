import ChooseLocation from "@/components/ChooseLocation";
import ChooseLocationLayout from "@/components/ChooseLocationLayout";
import { useFavoriteAddressStore, useLocationStore } from "@/store";
import { OSMMapProps } from "@/types/type";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const ChooseFavoriteLocation = () => {
  const { userLatitude, userLongitude, userAddress } = useLocationStore();
  const {
    favoriteAddress,
    favoriteLatitude,
    favoriteLocationName,
    favoriteLongitude,
    setFavoriteLocation,
  } = useFavoriteAddressStore();
  const params = useLocalSearchParams<{ query?: string }>();
  const [showMarker, setShowMarker] = useState<boolean>(true);

  useEffect(() => {
    if (favoriteLatitude == undefined) {
      setFavoriteLocation({
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
          latitude: favoriteLatitude!,
          longitude: favoriteLongitude!,
          showEarlyMarker: showMarker,
        }}
        setLocation={setFavoriteLocation}
      >
        <ChooseLocation
          title="Address"
          locationName={favoriteLocationName!}
          locationAddress={favoriteAddress!}
        />
      </ChooseLocationLayout>
    </GestureHandlerRootView>
  );
};

export default ChooseFavoriteLocation;
