export const initialState = {
    basket: [],
    user: null
}

export const getBasketTotal = (basket) => 
    basket?.reduce((currentTotal, basketItem) => basketItem.price + currentTotal, 0)

const reducer = (state, action) => {
    console.log(action)
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            }

        case 'REMOVE_FROM_BASKET':
            const indexFinder = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            )
            let newBasket = [...state.basket]

            if(indexFinder >= 0){
                newBasket.splice(indexFinder, 1)
            }else{
                console.warn(`Can't remove product (id: ${action.id}) as
                it is not in the basket`)
            }

            return{
                ...state,
                basket: newBasket
            }

        case 'SET_USER':
            return{
                ...state,
                user: action.user
            }

        default:
            return state
    }
}

export default reducer