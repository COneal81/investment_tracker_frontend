// thunk 
// use to make async requests to the backend
// its allows us to call dispatch from inside of the actin creator(fetchItems) which 
// allows the request to finish before dispatching it to our reducer
// returns a function from the action creator that you can use it other places easily

export function fetchItems(action) {
    // fetch('http://127.0.0.1:3000/api/v1/items')
    // .then(resp => resp.json())
    // .then(data =>(console.log(data)))
   
}