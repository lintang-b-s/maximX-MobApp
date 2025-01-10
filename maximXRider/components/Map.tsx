import { icons } from "@/constants";
import { useLocationStore } from "@/store";


import { useEffect, useState } from "react";
import {  Dimensions, View } from "react-native";
import MapView, { MAP_TYPES, Marker, PROVIDER_DEFAULT, Region, UrlTile } from "react-native-maps";
const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;

const OSMMap = () => {
  const { userLatitude, userLongitude } = useLocationStore();
  const [region, setRegion] = useState<Region>({
    latitude: userLatitude!,
    longitude: userLongitude!,
    latitudeDelta: 0.00922,
    longitudeDelta: 0.00922 * ASPECT_RATIO,
  });
  useEffect(() => {
    if (userLatitude && userLongitude) {

      setRegion({
        latitude: userLatitude,
        longitude: userLongitude,
        latitudeDelta: 0.00922,
        longitudeDelta: 0.00922 * ASPECT_RATIO,
      });
    }
  }, [userLatitude, userLongitude]);
  return (
    <MapView
      mapType={MAP_TYPES.STANDARD}
      className="w-full h-full "
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      initialRegion={region}
      provider={PROVIDER_DEFAULT}
      showsUserLocation={true}
      userInterfaceStyle="light"
    >
      <UrlTile
        urlTemplate="http://localhost:3000/java-latest/{z}/{x}/{y}"
        zIndex={-1}
        maximumZ={14}
        minimumZ={8}
      />
    </MapView>
  );
};

export default OSMMap;
