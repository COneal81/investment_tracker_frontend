export default function itemReducer(state = {items: []}, action) {
  
    switch (action.type) {
        // you are returning an object with a key of items: that points to an array.  You bring items in from 
        // the initial arguement
        case "FETCH_ITEMS":
            return {items: action.payload}
        case "ADD_ITEM":
            // use the spread operator ...state to ensure that you always get everything back,
            // items it the key that points to an array that is returning the previous state with all 
            // of the items along with the new item that is being brought in with action.payload 
            return {...state, items: [...state.items, action.payload]}
       case "ADD_EXPENSE":
        let items = state.items.map(item => {
            if (item.id === action.payload.id) {
                return action.payload
            } else {
                return item
            }
        })
        return {...state, items: items}
    default:
    return state
    }
}
 // default will always return a version of the state, even if it is empty
// responsibe for updating the parts of our store that have to do with the an item
// reducer = if a function that takes in the previous state as a 1st arguement, then the action object as 
// a second arguement.  Then inside the reducer, we will object the reducer according to the action type.  


// 1st need to set the inital state, or the previous state is the state has already been established.
//  - should always be an object{}, set it up as an object with an items key pointing to an empty array
 // whatever we return from our reducer is our new redux state
