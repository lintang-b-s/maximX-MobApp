import React, { Component, useState } from "react";
import MapLibreGL, {
  MarkerView,
  PointAnnotation,
  UserLocation,
} from "@maplibre/maplibre-react-native";
import { OSMMapProps } from "@/types/type";
import * as Location from "expo-location";

import FontAwesome6 from "@react-native-vector-icons/fontawesome6";

const MapLibre = ({
  location: { latitude, longitude, showEarlyMarker },
  setLocation,
}: {
  location: OSMMapProps;
  setLocation?: ({
    latitude,
    longitude,
    locationName,
    address,
  }: {
    latitude: number;
    longitude: number;
    locationName: string;
    address: string;
  }) => void | null;
}) => {
  MapLibreGL.setAccessToken(null);

  const updateLocation = async (latitude: number, longitude: number) => {
    const address = await Location.reverseGeocodeAsync({
      latitude: latitude,
      longitude: longitude,
    });

    setLocation!({
      latitude: latitude,
      longitude: longitude,
      address: `${address[0].formattedAddress!.split(",").slice(1, 4).join(", ")}`,
      locationName: `${address[0].formattedAddress!.split(",").slice(0, 1).join(", ")}`,
    });
  };

  const handleLocationMarkerChange = async (
    longitude: number,
    latitude: number
  ) => {
    await updateLocation(latitude, longitude);
  };

  return (
    <MapLibreGL.MapView
      style={{
        flex: 1,
        alignSelf: "stretch",
      }}
      zoomEnabled={true}
      logoEnabled={false}
      styleURL={"https://tiles.openfreemap.org/styles/liberty"}
    >
      <MapLibreGL.Camera
        defaultSettings={{
          centerCoordinate: [longitude, latitude],
          zoomLevel: 15,
        }}
      />

      {showEarlyMarker && (
        <PointAnnotation
          key={"1"}
          id="1"
          coordinate={[longitude, latitude]}
          draggable
          onDragEnd={(payload) => {
            handleLocationMarkerChange(
              payload.geometry.coordinates[0],
              payload.geometry.coordinates[1]
            );
          }}
          anchor={{ x: 0.5, y: 1 }}
        >
          <FontAwesome6
            name="location-dot"
            color={"red"}
            iconStyle="solid"
            size={24}
          />
        </PointAnnotation>
      )}

      <UserLocation />
    </MapLibreGL.MapView>
  );
};

export default MapLibre;
