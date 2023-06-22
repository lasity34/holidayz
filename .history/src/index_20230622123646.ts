// Tuples challenge
// 1. Add an array to the variable of currentLocation I have added. This array
// must have your current location, time, and degrees celcius of your location
// NOTE: make sure to make this a Tuple, to only allow those types in that
// structure.
// 2. Add this visually to a footer on your site

import { showReviewTotal, populateUser, displayProperties } from './utils';

const footer = document.querySelector(".footer")

const reviews: {
  name: string;
  stars: number;
  loyaltyUser: boolean;
  date: string;
}[] = [
  {
    name: 'Sheia',
    stars: 5,
    loyaltyUser: true,
    date: '01-04-2021',
  },
  {
    name: 'Andrzej',
    stars: 3,
    loyaltyUser: false,
    date: '28-03-2021',
  },
  {
    name: 'Omar',
    stars: 4,
    loyaltyUser: true,
    date: '27-03-2021',
  },
];

const you: {
  firstName: string;
  lastName: string;
  isReturning: boolean;
  age: number;
  stayedAt: string[];
} = {
  firstName: 'Bobby',
  lastName: 'Brown',
  isReturning: true,
  age: 23,
  stayedAt: ['constantia-villa', 'clifton-flat', 'paarl-house'],
};

const homes: {
  image: string;
  title: string;
  pricePerNight: number;
  location: {
    firstLineAddress: string;
    townCity: string;
    country: string;
  };
  contactDetails: [string, string];
  availableToRent: boolean;
}[] = [
  {
    image: './images/green_point_home.jpg',
    title: 'Cozy Beachfront Cottage',
    pricePerNight: 150,
    location: {
      firstLineAddress: '21 Ocean View Dr',
      townCity: 'Green Point',
      country: 'South Africa',
    },
    contactDetails: ['greenpointcosy@gmail.com','+27 987 654 3210'],
    availableToRent: true,
  },
  {
    image: './images/hout_bay.jpg',
    title: 'Luxury Villa with Pool',
    pricePerNight: 300,
    location: {
      firstLineAddress: '17 Bellevue Ave',
      townCity: 'Hout Bay',
      country: 'South Africa',
    },
    contactDetails: ['tyga@gmail.com','+27 123 456 7890'],
    availableToRent: false,
  },
  {
    image: "./images/sea_point.jpg",
    title: "Seaside Penthouse",
    pricePerNight: 350,
    location: {

        firstLineAddress: "89 Beach Rd",
        townCity: "Sea Point",
        country: "South Africa",
    },
    contactDetails: ["maryjules@gmail.com","+27 345 678 9012"],
    availableToRent: false,
  }
];

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);

populateUser(you.isReturning, you.firstName);

displayProperties(homes)


