// Function Return Types + Void Types mini-challenge
// Instead of having a long 'review total 3', can you make the line say '3 reviews', or '1 review'
// if there is only one? Use a function to do this and assing a type to the functions return.

import { loyalty_types, permissions } from "./enum"

const returningUserDisplay = document.querySelector('#returning-user') as HTMLDivElement
const userNameDisplay = document.querySelector('#user') as HTMLDivElement
const reviewTotalDisplay = document.querySelector('#reviews') as HTMLDivElement
const propertyDisplay = document.querySelector('#propertyDisplay') as HTMLDivElement

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
