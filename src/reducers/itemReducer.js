export default function itemReducer(state = {items: []}, action) {
    
    switch (action.type) {
        case "FETCH_ITEMS":
        return {items: action.payload}
        // you are returning an object with a key of items: that points to an array.  You bring items in from 
        // the initial arguement
       
    
        // this will always return a version of the state, even if it is empty
   default:
    return state
    }
}

// responsibe for updating the parts of our store that have to do with the an item
// reducer = if a function that takes in the previous state as a 1st arguement, then the action object as 
// a second arguement.  Then inside the reducer, we will object the reducer according to the action type.  


// 1st need to set the inital state, or the previous state is the state has already been established.
//  - should always be an object{}, set it up as an object with an items key pointing to an empty array
 // whatever we return from our reducer is our new redux state
