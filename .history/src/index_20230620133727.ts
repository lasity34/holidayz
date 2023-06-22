// Fixing the Website

// Can you fix my code to show 'Welcome back Bobby' in the Nav Bar for 
// our couch surfing website? Do this by assigning types to the parameters
// we pass to our populateUser function, so that we can be aware of
// errors in our user objects in the future.

import { showReviewTotal, populateUser } from "./utils"

const reviews: {
    name:string,
    stars: number,
    loyaltyUser: boolean,
    date: string
}[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
]




showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)




const you: {
    firstName: string,
    lastName: string,
    isReturning: boolean,
    age: number,
    stayedAt: string[]
} = {
    firstName: "Bobby",
    lastName: "Brown",
    isReturning: true,
    age: 23,
    stayedAt: ['constantia-villa', 'clifton-flat', 'paarl-house']
}




populateUser(you.isReturning, you.firstName)