// Union Types Challenge
// 1. Fix the function to show the price per night for each property card only
// if isLoggedIn is true, or the you object has Permissions. (all permissions should work)
// 2. See what happens when a null object to be passed to the you objects permissions.

import { showReviewTotal, populateUser, displayProperties } from './utils';

import { permissions, loyalty_types } from './enum';
const footer = document.querySelector(".footer") as HTMLDivElement

let isLoggedIn: boolean;


const reviews: { 
  name: string; 
  stars: number; 
  loyaltyUser: loyalty_types 
  date: string
  }[] = [
  {
    name: 'Sheia',
    stars: 5,
    loyaltyUser: loyalty_types.GOLD_USER,
    date: '01-04-2021',
  },
  {
    name: 'Andrzej',
    stars: 3,
    loyaltyUser: loyalty_types.SILVER_USER,
    date: '28-03-2021',
  },
  {
    name: 'Omar',
    stars: 4,
    loyaltyUser: loyalty_types.BRONZE_USER,
    date: '27-03-2021',
 
  },
];

const you = {
  firstName: 'Bobby',
  lastName: 'Brown',
  permissions: false,
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

let authorityStatus : any;
isLoggedIn = true

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);

populateUser(you.isReturning, you.firstName);

displayProperties(you.permissions, homes)

let currentLocation: [string, string, number] = ["Cape Town", "06.22", 16]
footer.innerHTML = `<div>
<p>${currentLocation[0]}</p>
<p> ${currentLocation[1]}</p>
<p> ${currentLocation[2]}°C</p>
</div>`
