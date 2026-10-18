import { combineReducers } from "@reduxjs/toolkit";
import openInfoReducer from "./openInfoReducer/openInfoReducer";

const reducers = {
  openInfo: openInfoReducer,
};

export const rootReducers = combineReducers<typeof reducers>(reducers);
