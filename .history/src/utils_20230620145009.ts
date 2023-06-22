// Add the properties to the Dashboard
// This is a continuation of the Challenge, in which you are asked to add
// the 3 properties image and title to the dashboard based on the 
// properties array


const returningUserDisplay = document.querySelector('#returning-user') as HTMLDivElement
const userNameDisplay = document.querySelector('#user') as HTMLDivElement
const reviewTotalDisplay = document.querySelector('#reviews') as HTMLDivElement
const propertyDisplay = document.querySelector('#propertyDisplay') as HTMLDivElement

export function showReviewTotal(value: number, reviewer: string, isLoyalty: boolean) {
    const iconDisplay = isLoyalty ? '⭐' : ''
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay
}

export function populateUser(isReturning: boolean, firstName:string ) {
    if (isReturning){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = firstName
}

export function displayProperties(properties) {
    properties.map(property => {
        propertyDisplay.innerHTML += `<div>
        <img class='img_property' src="${property.image}" />
        <h3>${property.title}</h3>
        </div>`
    })

}