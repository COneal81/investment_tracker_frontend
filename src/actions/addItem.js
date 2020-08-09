// the data arguement is coming from the component ItemInput's setState 

export function addItem(data) {
    
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/api/v1/items', {
            headers: {
                "Content-Type": "application/json",
                "Accept" : "application/json"
            },
            method: "POST",
            body: JSON.stringify(data)
        })
        
    .then(resp => resp.json())
    .then(item => dispatch({
        type:"ADD_ITEM",
        payload: item
    }))
    }
}

// adds to the redux store without having to refetch that data