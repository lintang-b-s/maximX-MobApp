import { LocationStore, RideRequest, RideRequestStore } from "@/types/type";
import { create } from "zustand";

export const useLocationStore = create<LocationStore>()((set) => ({
  userAddress: null,
  userLatitude: null,
  userLongitude: null,
  sourceAddress: null,
  sourceLocationName: null,
  sourceLatitude: null,
  sourceLongitude: null,
  destinationAddress: null,
  destinationLocationName: null,
  destinationLatitude: null,
  destinationLongitude: null,
  setUserLocation: ({
    latitude,
    longitude,
    address,
  }: {
    latitude: number;
    longitude: number;
    address: string;
  }) => {
    set(() => ({
      userLatitude: latitude,
      userLongitude: longitude,
      userAddress: address,
    }));
  },

  setSourceLocation: ({
    latitude,
    longitude,
    locationName,
    address,
  }: {
    latitude: number;
    longitude: number;
    locationName: string;
    address: string;
  }) => {
    set(() => ({
      sourceLatitude: latitude,
      sourceLongitude: longitude,
      sourceLocationName: locationName,
      sourceAddress: address,
    }));
  },
  setDestinationLocation: ({
    latitude,
    longitude,
    locationName,
    address,
  }: {
    latitude: number;
    longitude: number;
    locationName: string;
    address: string;
  }) => {
    set(() => ({
      destinationLatitude: latitude,
      destinationLongitude: longitude,
      destinationLocationName: locationName,
      destinationAddress: address,
    }));
  },
}));

export const useRideRequestStore = create<RideRequestStore>()((set) => ({
  rideRequest: {
    destinationLatitude: 0,
    destinationLongitude: 0,
    destinationName: "",
    riderLocationName: "",
    riderLocationLatitude: 0,
    riderLocationLongitude: 0,

    riderRating: 0,
    pickupETA: 0,
    pickupDistance: 0,
    routeETA: 0,
    routeDistance: 0,
    fare: 0,
  },
  setRideRequest: (rideRequest: RideRequest) => {
    set(() => ({
      rideRequest: rideRequest,
    }));
  },
}));
