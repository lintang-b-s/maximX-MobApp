import maximLogo from "@/assets/images/maxim.png";
import indonesianFlag from "@/assets/images/idn.png";
import phone from "@/assets/icons/phone.png";
import email from "@/assets/icons/mail.png";
import password from "@/assets/icons/password.png";
import close from "@/assets/icons/close.png";
import home from "@/assets/icons/home.png";
import orders from "@/assets/icons/orders.png";
import favorites from "@/assets/icons/favorites.png";
import menu from "@/assets/icons/menu.png";
import car from "@/assets/icons/ic_car.png";
import cargo from "@/assets/icons/ic_cargo.png";
import delivery from "@/assets/icons/ic_delivery.png";
import essentials from "@/assets/icons/ic_essentials.png";
import food_shop from "@/assets/icons/ic_food_shop.png";
import motorcycle from "@/assets/icons/ic_motorcycle.png";
import maximBig from "@/assets/icons/maxim_big.png";
import circle from "@/assets/icons/circle.png";
import forwardArrow from "@/assets/icons/forward_arrow.png";
import flag from "@/assets/icons/flag.png";
import schedule from "@/assets/icons/schedule.png";
import cash from "@/assets/icons/cash.png";
import tune from "@/assets/icons/tune.png";
import arrowBack from "@/assets/icons/arrow_back.png";
import mic from "@/assets/icons/mic.png";
import profile from "@/assets/icons/profile.png";
import check from "@/assets/icons/check.png";
import location from "@/assets/icons/location.png";
import driver from "@/assets/images/driver.jpg";
import eclipse from "@/assets/icons/eclipse.png";
import ojek from "@/assets/icons/ojek.png";
import mapSource from "@/assets/icons/map_source.png";
import mapDest from "@/assets/icons/map_dest.png";
import contact from "@/assets/icons/contact.png";
import chat from "@/assets/icons/chat.png";
import more from "@/assets/icons/more.png";
import mascot from "@/assets/images/mascot.png";
import plus from "@/assets/icons/plus.png";
import { FavoriteAddress, FavoriteRoute } from "@/types/type";
import pencil from "@/assets/icons/pencil.png";
import circleDestination from "@/assets/icons/circle_destination.png";
import trash from "@/assets/icons/trash.png";
import maximLogo2 from "@/assets/images/logo.png";
import maximOjek from "@/assets/images/maxim_ojek.png";
import kaspro from "@/assets/images/kaspro.png";
import settings from "@/assets/icons/gear.png";
import support from "@/assets/icons/support.png";
import notification from "@/assets/icons/notifications.png";
import creditCard from "@/assets/icons/credit_card.png";
import person from "@/assets/icons/person.png";
import call from "@/assets/icons/call.png";
import gender from "@/assets/icons/gender.png";
import calendar from "@/assets/icons/calendar.png";
import mailFill from "@/assets/icons/mail-fill.png";
import lookingForCar from "@/assets/images/looking-for-car.png";
import chatBg from "@/assets/images/chat-bg.jpg";

export const images = {
  maximLogo,
  indonesianFlag,
  maximBig,
  driver,
  mascot,
  maximLogo2,
  maximOjek,
  kaspro,
  lookingForCar,
  chatBg,
};

export const icons = {
  phone,
  email,
  password,
  close,
  home,
  plus,
  gender,
  calendar,
  mailFill,
  orders,
  favorites,
  menu,
  car,
  cargo,
  delivery,
  essentials,
  food_shop,
  motorcycle,
  circle,
  forwardArrow,
  flag,
  schedule,
  tune,
  cash,
  arrowBack,
  mic,
  call,
  profile,
  check,
  location,
  eclipse,
  ojek,
  mapSource,
  mapDest,
  contact,
  chat,
  more,
  pencil,
  circleDestination,
  trash,
  settings,
  support,
  notification,
  creditCard,
  person,
};

export const menuItems: { id: number; title: string; icon: any }[] = [
  {
    id: 1,
    title: "Motorcycles",
    icon: icons.motorcycle,
  },
  {
    id: 2,
    title: "Passenger cars",
    icon: icons.car,
  },
  {
    id: 3,
    title: "Food",
    icon: icons.food_shop,
  },
  {
    id: 4,
    title: "Delivery",
    icon: icons.delivery,
  },
  {
    id: 5,
    title: "Trucks",
    icon: icons.cargo,
  },
  {
    id: 6,
    title: "Life",
    icon: icons.essentials,
  },
];

enum RideStatus {
  COMPLETED = "COMPLETED",
  CANCELED = "CANCELED",
  PROGRESS = "IN PROGRESS",
}

export const rideHistory: {
  source: string;
  destination: string;
  sourceLatLng: number[];
  destinationLatLng: number[];
  rideDate: Date;
  rideCompleteDate: Date;
  status: RideStatus;
}[] = [
  {
    source: "sans guest house",
    destination: "solo balapan",
    sourceLatLng: [1, 2],
    destinationLatLng: [1, 2],
    rideDate: new Date(),
    rideCompleteDate: new Date(),
    status: RideStatus.PROGRESS,
  },
  {
    source: "pogung",
    destination: "fmipa ugm",
    sourceLatLng: [1, 2],
    destinationLatLng: [1, 2],
    rideDate: new Date(2025, 1, 1, 16, 30),
    rideCompleteDate: new Date(2025, 1, 1, 17, 0),
    status: RideStatus.COMPLETED,
  },
  {
    source: "los angeles",
    destination: "san fransisco",
    sourceLatLng: [1, 2],
    destinationLatLng: [1, 2],
    rideDate: new Date(2025, 1, 4, 12, 0),
    rideCompleteDate: new Date(1, 4, 13, 0),
    status: RideStatus.COMPLETED,
  },
  {
    source: "berlin",
    destination: "paris",
    sourceLatLng: [1, 2],
    destinationLatLng: [1, 2],
    rideDate: new Date(2025, 1, 2, 1, 0),
    rideCompleteDate: new Date(2025, 1, 2, 2, 0),
    status: RideStatus.CANCELED,
  },
  {
    source: "washington",
    destination: "tokyo",
    sourceLatLng: [1, 2],
    destinationLatLng: [1, 2],
    rideDate: new Date(2025, 1, 3, 2, 0),
    rideCompleteDate: new Date(2025, 1, 3, 3, 0),
    status: RideStatus.COMPLETED,
  },
  {
    source: "orlando",
    destination: "san fransisco",
    sourceLatLng: [1, 2],
    destinationLatLng: [1, 2],
    rideDate: new Date(2025, 1, 3, 2, 0),
    rideCompleteDate: new Date(2025, 1, 3, 3, 0),
    status: RideStatus.COMPLETED,
  },
  {
    source: "orlando2",
    destination: "san fransisco2",
    sourceLatLng: [1, 2],
    destinationLatLng: [1, 2],
    rideDate: new Date(2025, 1, 3, 2, 0),
    rideCompleteDate: new Date(2025, 1, 3, 3, 0),
    status: RideStatus.COMPLETED,
  },
];

export const favoriteAddressesDummy: FavoriteAddress[] = [
  {
    favoriteName: "rumah",
    favoriteItemColor: "bg-sky-500",
    favoriteAddress: "rumah jalan mulwo",
    favoriteLatitude: -7.5678798860174075,
    favoriteLongitude: 110.816718895165,
    favoriteLocationName: "rumah",
  },
];

export const favoriteRoutesDummy: FavoriteRoute[] = [
  {
    favoriteName: "rumah",
    favoriteItemColor: "bg-green-500",
    favoriteSourceAddress: "rumah jalan mulwo",
    favoriteSourceLatitude: -7.5678798860174075,
    favoriteSourceLongitude: 110.816718895165,
    favoriteSourceLocationName: "rumah",

    favoriteDestinationAddress:
      "Jl. Masjid Agung No.1, Kauman, Kec. Ps. Kliwon, Kota Surakarta, Jawa Tengah 57122",
    favoriteDestinationLatitude: -7.574126168226208,
    favoriteDestinationLongitude: 110.82655346366388,
    favoriteDestinationLocationName: "Masjid Agung Pasar Kliwon",
  },
];

export const chatDummy = [
  {
    id: "6139e7c6580e9b39d1c6b222",
    from: 1,
    date: "Wed Aug 25 2025  04:35:00 ",
    msg: "ya sesuai",
  },
  {
    id: "6139e7c6580e9b39d1c6b266",
    from: 0,
    date: "Wed Aug 25 2025  04:34:32 ",
    msg: "apakah titik antar sesuai?",
  },
];


