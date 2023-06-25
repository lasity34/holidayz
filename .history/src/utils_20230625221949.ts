
import { loyalty_types, permissions } from "./enum"
import { star } from "./types"

const returningUserDisplay = document.querySelector('#returning-user') as HTMLDivElement
const userNameDisplay = document.querySelector('#user') as HTMLDivElement
const reviewTotalDisplay = document.querySelector('#reviews') as HTMLDivElement
const propertyDisplay = document.querySelector('#propertyDisplay') as HTMLDivElement
const reviewDisplay = document.querySelector(".reviewDisplay") as HTMLDivElement


export function showReviewTotal(value: number, reviewer: string, isLoyalty: loyalty_types) {
    const iconDisplay = loyalty_types.GOLD_USER ? '⭐' : ''
    reviewTotalDisplay.innerHTML = `${value.toString()} review${makeMultiple(value)} | last reviewed by  ${reviewer} ${iconDisplay}`
}

export function populateUser(isReturning: boolean, firstName:string ) {
    if (isReturning){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = firstName
}

export function displayProperties(isLogged: boolean | permissions, properties: any) {
        properties.map(property => {
        propertyDisplay.innerHTML += `<div class="property-card">
        <h2 class="property-title">${property.title}</h2>
        <img class='property-image' src="${property.image}" alt="${property.title}" />
        ${isLogged ? `${property.pricePerNight} per night` : ""}
    </div>
    `
    }) 

}


export function makeMultiple(value: number) : string {
    if (value > 1 || value == 0 ) {
        return 's'
    } else return ''
}

// name: string; 
// stars: star; 
// loyaltyUser: loyalty_types 
// date: string
// }[]


export function addReviews(array: {name, stars, loyaltyUser, date}) : void { 
        const topTwo = getTopTwoReviews(array)
        getTopTwoReviews.map(review => {
            reviewDisplay.innerHTML += `<div>
            ${review.name} ${review.stars} ${review.date}
            </div>`
        })
        
    
}

export function getTopTwoReviews(reviews : { 
    name: string; 
     date: string;
     stars: star; 
     }[]) : { 
         name: string; 
         stars: number; 
         date: string; 
         }  {
 const sortedReviews = reviews.sort((a, b) => b.stars - a.stars)
 return sortedReviews.slice(0,2)
}
