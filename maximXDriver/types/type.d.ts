import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import {
  TextInputProps,
  TouchableOpacityProps,
  GestureResponderEvent,
} from "react-native";
import { MaskInputProps } from "react-native-mask-input";

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

declare interface MaskInputFieldProps extends MaskInputProps {
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
  bgVariant?:
    | "primary"
    | "secondary"
    | "danger"
    | "success"
    | "inactive"
    | "tertiary";
  textVariant?:
    | "primary"
    | "default"
    | "secondary"
    | "danger"
    | "success"
    | "inactive"
    | "tertiary";
  IconLeft?: React.ComponentType<any>;
  IconRight?: React.ComponentType<any>;
  className?: string;
  active: boolean;
}

declare interface GoButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
  bgVariant?:
    | "primary"
    | "secondary"
    | "danger"
    | "success"
    | "inactive"
    | "tertiary";
  textVariant?:
    | "primary"
    | "default"
    | "secondary"
    | "danger"
    | "success"
    | "inactive"
    | "tertiary";
  IconLeft?: React.ComponentType<any>;
  IconRight?: React.ComponentType<any>;
  className?: string;
  active: boolean;
}

declare interface DropDownBottomSheetProps {
  handleFilter: (val: string) => void;
  data: string[];
  setData: React.Dispatch<React.SetStateAction<string>>;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  dataIcon?: any;
  icon?: "location-sharp";
  open: boolean;
}

declare interface DropDownProps {
  label: string;
  setShow: (value: React.SetStateAction<boolean>) => void;
  placeholder: string;
}

declare interface OSMMapProps {
  latitude: number;
  longitude: number;
  showEarlyMarker: boolean;
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
