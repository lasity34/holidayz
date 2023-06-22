// Enum Types mini-challenge
// Replace the value of loyaltyUser to a GOLD_USER, SILVER_USER or BRONZE_USER, making sure to
// use what we learnt about Enums in the previous lesson. Make Sheia GOLD, Andrzej BRONZE 
// and Omar SILVER.
// 2. export the enum
// 3. Fix the function in the utils to show Sheias star as she is a GOLD_USER.

import { showReviewTotal, populateUser, displayProperties } from './utils';

const footer = document.querySelector(".footer") as HTMLDivElement

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

let currentLocation: [string, string, number] = ["Cape Town", "06.22", 16]
footer.innerHTML = `<div>
<p>${currentLocation[0]}</p>
<p> ${currentLocation[1]}</p>
<p> ${currentLocation[2]}°C</p>
</div>`
