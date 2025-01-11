import {
  TextInputProps,
  TouchableOpacityProps,
  GestureResponderEvent,
} from "react-native";

declare interface InputFieldProps extends TextInputProps {
  label: string;
  iconLeft?: any;
  iconRight?: any;
  secureTextEntry?: boolean;
  labelStyle?: string;
  containerStyle?: string;
  inputStyle?: string;
  iconLeftStyle?: string;
  iconRightStyle?: string;
  IconRightOnPress?: ((event: GestureResponderEvent) => void) | undefined;
  className?: string;
}

declare interface ButtonProps extends TouchableOpacityProps {
  title: string;
  bgVariant?: "primary" | "secondary" | "danger" | "success";
  textVariant?: "primary" | "default" | "secondary" | "danger" | "success";
  IconLeft?: React.ComponentType<any>;
  IconRight?: React.ComponentType<any>;
  className?: string;
}

declare interface LocationStore {
  userLatitude: number | null;
  userLongitude: number | null;
  userAddress: string | null;
  sourceLatitude: number | null;
  sourceLongitude: number | null;
  sourceLocationName: string | null;
  sourceAddress: string | null;
  destinationLatitude: number | null;
  destinationLongitude: number | null;
  destinationLocationName: string | null;
  destinationAddress: string | null;
  setUserLocation: ({
    latitude,
    longitude,
    address,
  }: {
    latitude: number;
    longitude: number;
    address: string;
  }) => void;
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
  }) => void;
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
  }) => void;
}

declare interface OSMMapProps {
  latitude: number;
  longitude: number;
  showEarlyMarker: boolean;
}

declare interface ChooseLocationProps {
  title: string;
  locationName: string;
  locationAddress: string;
}

declare interface StarRatingProps {
  defaultRating: number;
  setDefaultRating: React.Dispatch<React.SetStateAction<number>>;
  className: string;
}

declare interface HeaderProps {
  title: string;
}

declare interface OrderDetail {
  isTip: boolean;
  tipValue: number;
  differentPhoneNumber: string;
  additionalInformation: string;
  setTip: () => void;
  setTipValue: ({ tip }: { tip: number }) => void;
  setDifferentPhone: ({ phone }: { phone: string }) => void;
  setAdditionalInformation: ({ info }: { info: string }) => void;
}

declare interface RideProps {
  source: string;
  destination: string;
  sourceLatLng: number[];
  destinationLatLng: number[];
  rideDate: Date;
  rideCompleteDate: Date;
  status: RideStatus;
}
