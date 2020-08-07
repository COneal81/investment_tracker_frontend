// responsibe for updating the parts of our store that have to do with the an item
// reducer = if a function that takes in the previous state as a 1st arguement, then the action object as 
// a second arguement.  Then inside the reducer, we will object the reducer according to the action type.  


// 1st need to set the inital state, or the previous state is the state has already been established.
//  - should always be an object{}, set it up as an object with an items key pointing to an empty array
export default function itemReducer(state = {items:[]}, action) {
    
   

    return action.payload
    // This was to make certain that our action was coming in correctly, and that the
    // store could properly be updated by our reducer
}
