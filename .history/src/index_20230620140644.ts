// Fixing the Website

// Can you fix my code to show 'Welcome back Bobby' in the Nav Bar for
// our couch surfing website? Do this by assigning types to the parameters
// we pass to our populateUser function, so that we can be aware of
// errors in our user objects in the future.

import { showReviewTotal, populateUser } from './utils';

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
  contactDetails: string;
  availableToRent: boolean;
}[] = [
  {
    image: './public/images/green_point_home.png',
    title: 'Cozy Beachfront Cottage',
    pricePerNight: 150,
    location: {
      firstLineAddress: '21 Ocean View Dr',
      townCity: 'Green Point',
      country: 'South Africa',
    },
    contactDetails: '+27 987 654 3210',
    availableToRent: true,
  },
  {
    image: './public/images/hout_bay.jpg',
    title: 'Luxury Villa with Pool',
    pricePerNight: 300,
    location: {
      firstLineAddress: '17 Bellevue Ave',
      townCity: 'Hout Bay',
      country: 'South Africa',
    },
    contactDetails: '+27 123 456 7890',
    availableToRent: false,
  },
  {
    image: "URL_TO_IMAGE_4",
    title: "Seaside Penthouse",
    pricePerNight: 350,
    location: {

        firstLineAddress: "89 Beach Rd",
        townCity: "Sea Point",
        country: "South Africa",
    },
    contactDetails: "+27 345 678 9012",
    availableToRent: false,
  }
];

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);

populateUser(you.isReturning, you.firstName);
