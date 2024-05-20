import { legacy_createStore } from "redux";
import { RootStore } from "./CombineStore";
// import { composeWithDevTools } from "redux-devtools-extension";




export const ReduxStore=legacy_createStore(RootStore)