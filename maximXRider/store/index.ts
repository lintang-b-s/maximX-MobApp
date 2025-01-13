import {
  FavoriteAdressStore,
  FavoriteRouteStore,
  LocationStore,
  OrderDetailStore,
} from "@/types/type";

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

export const useOrderDetailStore = create<OrderDetailStore>()((set) => ({
  isTip: false,
  tipValue: 0,
  differentPhoneNumber: "",
  additionalInformation: "",
  setTip: () => {
    set((state) => ({ isTip: !state.isTip }));
  },
  setTipValue: ({ tip }: { tip: number }) => {
    set(() => ({
      tipValue: tip,
    }));
  },
  setDifferentPhone: ({ phone }: { phone: string }) => {
    set(() => ({
      differentPhoneNumber: phone,
    }));
  },
  setAdditionalInformation: ({ info }: { info: string }) => {
    set(() => ({
      additionalInformation: info,
    }));
  },
}));

export const useFavoriteAddressStore = create<FavoriteAdressStore>()((set) => ({
  favoriteName: "",
  favoriteItemColor: "",
  favoriteAddress: null,
  favoriteLocationName: null,
  favoriteLatitude: null,
  favoriteLongitude: null,

  setFavoriteLocation: ({
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
      favoriteLatitude: latitude,
      favoriteLongitude: longitude,
      favoriteLocationName: locationName,
      favoriteAddress: address,
    }));
  },

  setFavoriteName: ({
    favoriteName,
    favoriteItemColor,
  }: {
    favoriteItemColor: string;
    favoriteName: string;
  }) => {
    set(() => ({
      favoriteName: favoriteName,
      favoriteItemColor: favoriteItemColor,
    }));
  },
}));

export const useFavoriteRouteStore = create<FavoriteRouteStore>()((set) => ({
  favoriteName: "",
  favoriteItemColor: "",
  sourceAddress: null,
  sourceLocationName: null,
  sourceLatitude: null,
  sourceLongitude: null,

  setFavoriteRouteName: ({
    favoriteName,
    favoriteItemColor,
  }: {
    favoriteName: string;
    favoriteItemColor: string;
  }) => {
    set(() => ({
      favoriteName: favoriteName,
      favoriteItemColor: favoriteItemColor,
    }));
  },

  setFavoriteSourceLocation: ({
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

  destinationAddress: null,
  destinationLocationName: null,
  destinationLatitude: null,
  destinationLongitude: null,

  setFavoriteDestinationLocation: ({
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

export const useEditFavoriteAddressStore = create<FavoriteAdressStore>()(
  (set) => ({
    favoriteName: "",
    favoriteItemColor: "",
    favoriteAddress: null,
    favoriteLocationName: null,
    favoriteLatitude: null,
    favoriteLongitude: null,

    setFavoriteLocation: ({
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
        favoriteLatitude: latitude,
        favoriteLongitude: longitude,
        favoriteLocationName: locationName,
        favoriteAddress: address,
      }));
    },
    setFavoriteName: ({
      favoriteName,
      favoriteItemColor,
    }: {
      favoriteItemColor: string;
      favoriteName: string;
    }) => {
      set(() => ({
        favoriteName: favoriteName,
        favoriteItemColor: favoriteItemColor,
      }));
    },
  })
);

export const useEditFavoriteRouteStore = create<FavoriteRouteStore>()(
  (set) => ({
    favoriteName: "",
    favoriteItemColor: "",
    sourceAddress: null,
    sourceLocationName: null,
    sourceLatitude: null,
    sourceLongitude: null,

    setFavoriteRouteName: ({
      favoriteName,
      favoriteItemColor,
    }: {
      favoriteName: string;
      favoriteItemColor: string;
    }) => {
      set(() => ({
        favoriteName: favoriteName,
        favoriteItemColor: favoriteItemColor,
      }));
    },

    setFavoriteSourceLocation: ({
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

    destinationAddress: null,
    destinationLocationName: null,
    destinationLatitude: null,
    destinationLongitude: null,

    setFavoriteDestinationLocation: ({
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
  })
);
