import { ActionReducerMap } from "@ngrx/store";
import { AuthFeatureKey, reducer as authReducer, State as AuthState} from "./auth/auth.reducer";

export interface AppState { 
    [AuthFeatureKey]: AuthState;
}

export const appReducer: ActionReducerMap<AppState> = {
    [AuthFeatureKey]: authReducer,
};