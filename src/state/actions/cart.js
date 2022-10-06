const addToCart = (item) => {
    return {
        type: 'ADD_TO_CART',
        payload: item,
    }
}

const removeFromCart = (item) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: item
    }
}


const increaseQuantity = (itemId) => {
    return {
        type: 'INCREASE_QUANTITY',
        payload: itemId,
    }
}

const decreaseQuantity = (itemId) => {
    return {
        type: 'DECREASE_QUANTITY',
        payload: itemId,
    }
}

export {
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
}