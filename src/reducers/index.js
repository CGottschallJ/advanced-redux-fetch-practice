import {combineReducers} from "redux";

//Reducer to Load Contacts

function contacts(state = [], action) {
  if(action.type === "CONTACTS_LOADED") {
    return action.value;
  };
  return state;
}

//Reducer to Load Products

function products(state = [], action) {
  if(action.type === "PRODUCTS_LOADED") {
    return action.value;
  };
  return state;
}

//Reducer to Load Vehicles

function vehicles(state = [], action) {
  if(action.type === "VEHICLES_LOADED") {
    return action.value;
  };
  return state;
}

//Reducer to Load Comments

function comments(state = [], action) {
  if(action.type === "COMMENTS_LOADED") {
    return action.value;
  };
  return state;
}


const rootReducer = combineReducers({
  contacts, products, vehicles, comments
});
export default rootReducer;
