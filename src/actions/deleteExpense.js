// in all async transactions, you need to return dispatch

export const deleteExpense = (expenseId, itemId) => {

    return (dispatch) => {
       return fetch(`http://localhost:3000/api/v1/items/${itemId}/expenses/${expenseId}`, {
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then(item => dispatch({type: 'DELETE_EXPENSE', payload: item}))
    }
}