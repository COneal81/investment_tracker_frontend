export default function itemReducer(state = {items: []}, action) {
//    debugger;
    switch (action.type) {
        case "FETCH_ITEMS":
            return {items: action.payload}
        case "ADD_ITEM":
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

        case "DELETE_EXPENSE":
        let delete_item = state.items.map(item => {
            if (item.id === action.payload.id) {
                return action.payload
            } else {
                return item
            }
        })
        return {...state, items: delete_item}

        case "EDIT_ITEM":
        let edit_item = state.items.map(item => {
            if (item.id === action.payload.id) {
                return action.payload
            } else {
                return item
            }
        })
        return {...state, items: edit_item}

    default:
    return state
    }
}
 
