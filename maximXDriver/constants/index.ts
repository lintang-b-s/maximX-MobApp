import indonesianFlag from "@/assets/images/idn.png";
import next from "@/assets/icons/next.png";
import formChecklist from "@/assets/images/form-ok.png";
import steer from "@/assets/icons/steer.png";
import paid from "@/assets/icons/paid.png";
import { SlidesDataWeeklyChallenge } from "@/components/Slider";
import { SlidesDataOportunity } from "@/components/Oportunity";
import { SlidesDataLearningHub } from "@/components/LearningHub";
import uberDriverInCarOne from "@/assets/images/uber-driver-in-car-1.jpg";
import dapatUangTip from "@/assets/images/dapat-uang-tip.jpg";
import { RideHistoryActivity, WeeklySummary } from "@/types/type";

export const images = {
  indonesianFlag,
  formChecklist,
  uberDriverInCarOne,
  dapatUangTip,
};

export const icons = {
  next,
  steer,
  paid,
};

export const ID_PHONE = [
  `+`,
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
  /\d/,

  /\d/,

  /\d/,
  " ",
  /\d/,
  /\d/,
  /\d/,
];

export const citiesInIndonesia: string[] = [
  "Jakarta",
  "Surabaya",
  "Bandung",
  "Medan",
  "Semarang",
  "Makassar",
  "Yogyakarta",
  "Palembang",
  "Denpasar",
  "Pekanbaru",
  "Banjarmasin",
  "Pontianak",
  "Balikpapan",
  "Malang",
  "Manado",
  "Padang",
  "Batam",
  "Samarinda",
  "Tasikmalaya",
  "Mataram",
  "Kupang",
  "Surakarta",
  "Klaten",
];

export const carMakeDummy: string[] = [
  "Audi",
  "Toyota",
  "BMW",
  "Bugatti",
  "Aston Martin",
  "Suzuki",
  "Daihatsu",
  "Ford",
  "Wuling",
  "Volkswagen",
  "BYD",
  "Tesla",
  "Mazda",
  "Subaru",
];

export const carModels: string[] = [
  "model 1",
  "model 2",
  "model 3",
  "model 4",
  "model 5",
];

export const carColors: string[] = [
  "black",
  "gray",
  "blue",
  "yellow",
  "red",
  "white",
];

export const carColorIcons = {
  black: "#000000",
  gray: "#6b7280",
  blue: "#3b82f6",
  yellow: "#eab308",
  red: "#ef4444",
  white: "#fffff",
};

export const KTP = [
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

export const SlidesWeeklyChallengeData: SlidesDataWeeklyChallenge[] = [
  {
    endsOn: new Date(2025, 1, 12),
    item: 10,
    target: 20,
    extra: 35,
  },
  {
    endsOn: new Date(2025, 1, 12),
    item: 10,
    target: 30,
    extra: 50,
  },
  {
    endsOn: new Date(2025, 1, 12),
    item: 10,
    target: 50,
    extra: 70,
  },
];

export const slidesOportunities: SlidesDataOportunity[] = [
  {
    title: "Soccer night at Jonty's FCB",
    description:
      "Get faster requests from 10:00PM at Jonty's FCS, Hamline Ave N",
  },
  {
    title: "Soccer night at Manahan Stadium",
    description:
      "Get faster requests from 10:00PM at Jonty's FCS, Hamline Ave N",
  },
];

export const slidesDataLearningHubs: SlidesDataLearningHub[] = [
  {
    title: "Tips to get 5-star ratings from your customers",
    image: images.uberDriverInCarOne,
  },
  {
    title: "Tips untuk mendapatkan uang tip banyak dari customers anda",
    image: images.dapatUangTip,
  },
];

export const todaysActivity: RideHistoryActivity[] = [
  {
    description: "Ride to West Field Cafe",
    rideDateTime: new Date(2025, 1, 18, 12, 0),
    fare: 2.35,
  },

  {
    description: "Ride to East Field Cafe",
    rideDateTime: new Date(2025, 1, 18, 13, 0),
    fare: 3.35,
  },
  {
    description: "Ride to Dike",
    rideDateTime: new Date(2025, 1, 18, 14, 0),
    fare: 5.35,
  },
];

export const weeklyActivity: WeeklySummary[] = [
  {
    startDate: new Date(2025, 1, 7, 14, 0),
    endDate: new Date(2025, 1, 14, 14, 0),
    earnings: 52.32,
    onlineMinutes: 120,
    rides: 8,
    rideHistory: [
      {
        description: "Ride to West Field Cafe",
        rideDateTime: new Date(2025, 1, 7, 12, 0),
        fare: 2.35,
      },

      {
        description: "Ride to East Field Cafe",
        rideDateTime: new Date(2025, 1, 10, 13, 0),
        fare: 3.35,
      },
      {
        description: "Ride to Dike",
        rideDateTime: new Date(2025, 1, 11, 14, 0),
        fare: 5.35,
      },
    ],
  },

  {
    startDate: new Date(2025, 1, 18, 14, 0),
    endDate: new Date(2025, 1, 25, 14, 0),
    earnings: 52.32,
    onlineMinutes: 120,
    rides: 8,
    rideHistory: [
      {
        description: "Ride to North Field Cafe",
        rideDateTime: new Date(2025, 1, 18, 12, 0),
        fare: 2.35,
      },

      {
        description: "Ride to South Field Cafe",
        rideDateTime: new Date(2025, 1, 19, 13, 0),
        fare: 3.35,
      },
      {
        description: "Ride to Mountain",
        rideDateTime: new Date(2025, 1, 20, 14, 0),
        fare: 5.35,
      },
    ],
  },
];

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
