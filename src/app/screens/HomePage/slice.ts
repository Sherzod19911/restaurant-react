import { createSlice} from "@reduxjs/toolkit";
import { HomePageState } from "../../../types/screen";
import { SpecialMenu } from "./specialMenu";

const initialState :  HomePageState = {
    todaysMenus: [],
    menu: [],
    specialMenu: [],
    bestBoarticles: [],
    trendBoarticles: [],
    newsBoarticles: [],

}

const HomePageSlice = createSlice({
    name: 'homePage',
    initialState,
    reducers: {
        setTodaysMenus: (state, action)=> {
            state.todaysMenus = action.payload
        },
        menu: (state, action)=> {
            state.menu = action.payload
        },
        specialMenu: (state, action)=> {
            state.specialMenu = action.payload
        },
        bestBoarticles: (state, action)=> {
            state.bestBoarticles = action.payload
        },
        trendBoarticles: (state, action)=> {
            state.trendBoarticles = action.payload
        },
        newsBoarticles: (state, action)=> {
            state.newsBoarticles = action.payload
        }
    }
});

export const {
    setTodaysMenus, 
    menu, 
    trendBoarticles, 
    bestBoarticles,
    newsBoarticles
} = HomePageSlice.actions;

const HomePageReducer = HomePageSlice.reducer;

export default HomePageReducer;