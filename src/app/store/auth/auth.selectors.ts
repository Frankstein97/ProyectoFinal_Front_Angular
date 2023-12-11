import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthFeatureKey, State } from "./auth.reducer";

export const selectAuthState = createFeatureSelector<State>(AuthFeatureKey);

export const selectAuthUser = createSelector(selectAuthState, (state) => state.authUser);