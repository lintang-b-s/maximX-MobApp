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
import {
  RideHistoryActivity,
  RideRequest,
  Transaction,
  WeeklySummary,
} from "@/types/type";
import mandiriBank from "@/assets/images/mandiri.png";
import { TransactionStatus } from "@/types/enum";
import riderPhoto from "@/assets/images/rider.jpg";

export const images = {
  indonesianFlag,
  formChecklist,
  uberDriverInCarOne,
  dapatUangTip,
  mandiriBank,
  riderPhoto,
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
    endsOn: new Date(2025, 0, 12),
    item: 10,
    target: 20,
    extra: 35,
  },
  {
    endsOn: new Date(2025, 0, 12),
    item: 10,
    target: 30,
    extra: 50,
  },
  {
    endsOn: new Date(2025, 0, 12),
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
    destination: "Ride to West Field Cafe",
    rideDateTime: new Date(2025, 0, 18, 12, 0),
    fare: 2.35,
    source: "New York",
  },

  {
    destination: "Ride to East Field Cafe",
    rideDateTime: new Date(2025, 0, 18, 13, 0),
    fare: 3.35,
    source: "New York",
  },
  {
    destination: "Ride to Dike",
    rideDateTime: new Date(2025, 0, 18, 14, 0),
    fare: 5.35,
    source: "New York",
  },
];

export const weeklyActivity: WeeklySummary[] = [
  {
    startDate: new Date(2025, 0, 1, 14, 0),
    endDate: new Date(2025, 0, 7, 14, 0),
    earnings: 60.32,
    onlineMinutes: 150,
    rides: 11,
    rideHistory: [
      {
        destination: "Ride to West Field Cafe",
        rideDateTime: new Date(2025, 0, 2, 12, 0),
        fare: 2.35,
        source: "New York",
      },

      {
        destination: "Ride to East Field Cafe",
        rideDateTime: new Date(2025, 0, 3, 13, 0),
        fare: 3.35,
        source: "New York",
      },
      {
        destination: "Ride to Dike",
        rideDateTime: new Date(2025, 0, 4, 14, 0),
        fare: 5.35,
        source: "New York",
      },
    ],
  },
  {
    startDate: new Date(2025, 0, 7, 14, 0),
    endDate: new Date(2025, 0, 14, 14, 0),
    earnings: 90.32,
    onlineMinutes: 110,
    rides: 12,
    rideHistory: [
      {
        destination: "Ride to West Field Cafe",
        rideDateTime: new Date(2025, 0, 7, 12, 0),
        fare: 2.35,
        source: "New York",
      },

      {
        destination: "Ride to East Field Cafe",
        rideDateTime: new Date(2025, 0, 10, 13, 0),
        fare: 3.35,
        source: "New York",
      },
      {
        destination: "Ride to Dike",
        rideDateTime: new Date(2025, 0, 11, 14, 0),
        fare: 5.35,
        source: "New York",
      },
    ],
  },

  {
    startDate: new Date(2025, 0, 18, 14, 0),
    endDate: new Date(2025, 0, 25, 14, 0),
    earnings: 52.32,
    onlineMinutes: 120,
    rides: 8,
    rideHistory: [
      {
        destination: "Ride to North Field Cafe",
        rideDateTime: new Date(2025, 0, 18, 12, 0),
        fare: 2.35,
        source: "New York",
      },

      {
        destination: "Ride to South Field Cafe",
        rideDateTime: new Date(2025, 0, 19, 13, 0),
        fare: 3.35,
        source: "New York",
      },
      {
        destination: "Ride to Mountain",
        rideDateTime: new Date(2025, 0, 20, 14, 0),
        fare: 5.35,
        source: "New York",
      },
    ],
  },
  {
    startDate: new Date(2025, 0, 25, 14, 0),
    endDate: new Date(2025, 1, 1, 14, 0),
    earnings: 0,
    onlineMinutes: 0,
    rides: 0,
    rideHistory: [],
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

export const allTransactions: Transaction[] = [
  {
    date: new Date(2025, 0, 19, 12, 0, 0),
    description: "Bank account ending **** 1234",
    fare: -2,
    type: TransactionStatus.WITHDRAWN,
  },
  {
    date: new Date(2025, 0, 19, 11, 0, 0),
    description: "Ride - 2.1km",
    fare: 3.3,
    type: TransactionStatus.RIDE,
  },
  {
    date: new Date(2025, 0, 19, 10, 30, 0),
    description: "Weekly Challenge Reward",
    fare: 25,
    type: TransactionStatus.WEEKLY_CHALLENGE_REWARD,
  },
  {
    date: new Date(2025, 0, 19, 10, 0, 0),
    description: "Ride 2.9km",
    fare: 3.5,
    type: TransactionStatus.RIDE,
  },

  {
    date: new Date(2025, 0, 18, 12, 0, 0),
    description: "Bank account ending **** 1234",
    fare: -2,
    type: TransactionStatus.WITHDRAWN,
  },
  {
    date: new Date(2025, 0, 18, 11, 0, 0),
    description: "Ride - 2.0km",
    fare: 3.3,
    type: TransactionStatus.RIDE,
  },
  {
    date: new Date(2025, 0, 18, 10, 30, 0),
    description: "Weekly Challenge Reward",
    fare: 25,
    type: TransactionStatus.WEEKLY_CHALLENGE_REWARD,
  },
  {
    date: new Date(2025, 0, 18, 10, 0, 0),
    description: "Ride 4.5km",
    fare: 6.5,
    type: TransactionStatus.RIDE,
  },

  {
    date: new Date(2025, 0, 17, 12, 0, 0),
    description: "Bank account ending **** 1234",
    fare: -2,
    type: TransactionStatus.WITHDRAWN,
  },
  {
    date: new Date(2025, 0, 17, 11, 0, 0),
    description: "Ride - 2.0km",
    fare: 3.3,
    type: TransactionStatus.RIDE,
  },
  {
    date: new Date(2025, 0, 17, 10, 30, 0),
    description: "Weekly Challenge Reward",
    fare: 25,
    type: TransactionStatus.WEEKLY_CHALLENGE_REWARD,
  },
  {
    date: new Date(2025, 0, 17, 23, 0, 0),
    description: "Ride 4.5km",
    fare: 6.5,
    type: TransactionStatus.RIDE,
  },
];

export const allTransactionsDecember: Transaction[] = [
  {
    date: new Date(2024, 11, 19, 12, 0, 0),
    description: "Bank account ending **** 1234",
    fare: -2,
    type: TransactionStatus.WITHDRAWN,
  },
  {
    date: new Date(2024, 11, 19, 11, 0, 0),
    description: "Ride - 2.1km",
    fare: 3.3,
    type: TransactionStatus.RIDE,
  },
  {
    date: new Date(2024, 11, 19, 10, 30, 0),
    description: "Weekly Challenge Reward",
    fare: 25,
    type: TransactionStatus.WEEKLY_CHALLENGE_REWARD,
  },
  {
    date: new Date(2024, 11, 19, 10, 0, 0),
    description: "Ride 2.9km",
    fare: 3.5,
    type: TransactionStatus.RIDE,
  },

  {
    date: new Date(2024, 11, 18, 12, 0, 0),
    description: "Bank account ending **** 1234",
    fare: -2,
    type: TransactionStatus.WITHDRAWN,
  },
  {
    date: new Date(2024, 11, 18, 11, 0, 0),
    description: "Ride - 2.0km",
    fare: 3.3,
    type: TransactionStatus.RIDE,
  },
  {
    date: new Date(2024, 11, 18, 10, 30, 0),
    description: "Weekly Challenge Reward",
    fare: 25,
    type: TransactionStatus.WEEKLY_CHALLENGE_REWARD,
  },
  {
    date: new Date(2024, 11, 18, 10, 0, 0),
    description: "Ride 4.5km",
    fare: 6.5,
    type: TransactionStatus.RIDE,
  },

  {
    date: new Date(2024, 11, 17, 12, 0, 0),
    description: "Bank account ending **** 1234",
    fare: -2,
    type: TransactionStatus.WITHDRAWN,
  },
  {
    date: new Date(2024, 12, 17, 11, 0, 0),
    description: "Ride - 2.0km",
    fare: 3.3,
    type: TransactionStatus.RIDE,
  },
  {
    date: new Date(2024, 12, 17, 10, 30, 0),
    description: "Weekly Challenge Reward",
    fare: 25,
    type: TransactionStatus.WEEKLY_CHALLENGE_REWARD,
  },
  {
    date: new Date(2024, 12, 17, 23, 0, 0),
    description: "Ride 4.5km",
    fare: 6.5,
    type: TransactionStatus.RIDE,
  },
];

export const shortDayName = (date: Date, locale: string) =>
  date.toLocaleDateString(locale, { weekday: "short" });

export const rideRequestExample: RideRequest = {
  destinationLatitude: -7.767863681312354,
  destinationLongitude: 110.37689547399437,
  destinationName: "DIKE UGM",
  riderLocationName: "pogung",
  riderLocationLatitude: -7.761428,
  riderLocationLongitude: 110.376314,

  riderRating: 4.4,
  pickupETA: 4,
  pickupDistance: 2,
  routeETA: 12,
  routeDistance: 5.5,
  fare: 10,
};
