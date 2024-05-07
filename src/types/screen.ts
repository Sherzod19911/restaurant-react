import { BoArticle } from "./boArticle";
import { createSlice } from "@reduxjs/toolkit";
import { Product } from "./product";
import { Restaurant } from "./user";
export interface AppRootState {
    homePage: HomePageState;

}

export interface HomePageState {
    
    //topRestaurants: Restaurant[];
    todaysMenus: Restaurant[];
    //bestRestaurants: Restaurant[];
    menuPanel: Restaurant[];
    // trendProducts: Product[];
    specialMenu: Product[];
    bestBoarticles: BoArticle[];
    trendBoarticles: BoArticle[];
    newsBoarticles: BoArticle[];
}