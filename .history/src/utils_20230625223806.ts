
import { loyalty_types, permissions } from "./enum"
import { Review, Property, star } from "./types"

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

export function displayProperties(isLogged: boolean | permissions, properties: Property[]) {
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


export function addReviews(array: Review[]) : void {
    const topTwo = getTopTwoReviews(array);
    reviewTotalDisplay.innerHTML = "";
    topTwo.map(review => {
      reviewDisplay.innerHTML += `<h4>
      ${review.stars} ⭐ from ${review.name} ${review.date}
      </h4>`;
    });
  }


export function getTopTwoReviews(reviews: Review[]) : Review[] { 
 const sortedReviews = reviews.sort((a, b) => b.stars - a.stars)
 return sortedReviews.slice(0,2)
}



  
  