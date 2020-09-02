
export function addItem(data) {
    console.log('C')
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/items', {
            headers: {
                "Content-Type": "application/json",
                "Accept" : "application/json"
            },
            method: "POST",
            body: JSON.stringify(data)
        })
        
    .then(resp => resp.json())
    .then(item => {
        console.log('D')
        dispatch({
        type:"ADD_ITEM",
        payload: item
    })})
    }
    console.log('E')
}

