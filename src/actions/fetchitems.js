

export function fetchItems(action) {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/api/v1/items')
    .then(resp => resp.json())
    .then(items => dispatch({
        type:"FETCH_ITEMS",
        payload: items
    }))
    }
}