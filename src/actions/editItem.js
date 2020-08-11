export function editItem(data) {
    //  debugger;
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/items/${data.id}`, {
            headers: {
                "Content-Type": "application/json",
                "Accept" : "application/json"
            },
            method: "PATCH",
            body: JSON.stringify(data)
        })
        
    .then(resp => resp.json())
    .then(item => dispatch({type:"EDIT_ITEM", payload: item}))
    }
}