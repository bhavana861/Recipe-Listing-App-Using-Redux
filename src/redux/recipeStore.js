import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from '../redux/slices/recipeSlice'

const recipeStore = configureStore({
    reducer:{
        RecipeReducer:recipeSlice
    }
})

export default recipeStore