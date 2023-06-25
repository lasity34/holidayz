import { loyalty_types } from "./enum"


export type differentTown = "Green Point" | "Hout Bay" | "Sea Point"
export type price = 150 | 300 | 350
export type star = 5 | 3 | 4

export type Review = {
    name: string; 
    stars: star; 
    loyaltyUser: loyalty_types;
    date: string
}