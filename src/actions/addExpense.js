// async request

export const addExpense = (expense, itemId) => {

    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/items/${itemId}/expenses`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept" : "application/json"
            },
            body: JSON.stringify(expense)
        })
       .then(resp => resp.json())
    //    the item that is coming back will have the expense in it because it is nested
       .then(item => dispatch({type: "ADD_EXPENSE", payload: item}))

    }
}