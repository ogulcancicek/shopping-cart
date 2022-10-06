const cartReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            let tempState = {...state}
            if (action.payload.id in state) {
                tempState[action.payload.id]['quantity'] += 1; 
            } else {
            tempState[action.payload.id] = action.payload;
            tempState[action.payload.id]['quantity'] = 1;
            }
            return tempState;
        case 'REMOVE_FROM_CART':
            let tempState2 = {...state};
            delete tempState2[action.payload.id];
            return tempState2;
        case 'INCREASE_QUANTITY':
            let tempState3 = {...state};
            tempState3[action.payload]['quantity'] += 1;
            return tempState3;
        case 'DECREASE_QUANTITY':
            let tempState4 = {...state};
            tempState4[action.payload]['quantity'] -= 1;
            return tempState4; 
        default:
            return state;
    }
}

export default cartReducer;