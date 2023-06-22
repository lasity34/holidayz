/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const reviewTotalDisplay = document.querySelector('#reviews') as HTMLDivElement
const displayFirstNameReview = document.querySelector('#name') as HTMLDivElement
const reviews = [
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

function all_number_reviews(value: number, name: string) {
  reviewTotalDisplay.innerHTML = `Review total: ${value.toString()}`
  displayFirstNameReview.innerHTML = `First Reviewers name: ${name.toString()}`
}
console.log(reviews[0].name)
all_number_reviews(reviews.length, reviews[0].name)