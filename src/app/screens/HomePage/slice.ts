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
        setspecialMenu: (state, action)=> {
            state.specialMenu = action.payload
        },
        setbestBoarticles: (state, action)=> {
            state.bestBoarticles = action.payload
        },
        settrendBoarticles: (state, action)=> {
            state.trendBoarticles = action.payload
        },
        setnewsBoarticles: (state, action)=> {
            state.newsBoarticles = action.payload
        }
    }
});

export const {
    setTodaysMenus, 
    menu, 
    settrendBoarticles, 
    setbestBoarticles,
    setnewsBoarticles
} = HomePageSlice.actions;

const HomePageReducer = HomePageSlice.reducer;

export default HomePageReducer;