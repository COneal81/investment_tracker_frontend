// async request

export const addExpense = (expense, itemId) => {

    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/items/${itemId}/expenses`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(expense)
        })
        .then(response => response.json())
       .then(item => dispatch({type: "ADD_EXPENSE", payload: item}))

    }
}