const CartReducer = (state, action) => {
    if(action.type === "ADD_TO_CART"){
        let {id, color, amount, product} = action.payload;

        // tackle the existing producu:
        let existingProduct = state.cart.find((curItem) => {
           return curItem.id === id + color;
        })

        if(existingProduct){

            let updatedProduct = state.cart.map((currEle) => {
                if(currEle.id === id + color){
                    let newAmount = currEle.amount + amount;

                    // max limit for product
                    if(newAmount >= currEle.max){
                        newAmount = currEle.max;
                    }

                    return{
                        ...currEle,
                        amount : newAmount,
                    }
                }else{
                    return currEle;
                }
            });

            return{
                ...state,
                cart: updatedProduct,
            }

        }else{
            
            let cartProduct = {
                id: id + color,
                name: product.name,
                color,
                amount,
                image : product.image[0].url,
                price : product.price,
                max: product.stock,
            }

            return{
                ...state,
                cart:[...state.cart, cartProduct],
            }
        }
    }

    //to set the increment and decrement : 
    if(action.type === "SET_INCREMENT"){
        let updatedProduct = state.cart.map((currEle) => {
            if(currEle.id === action.payload){
                let increaseAmount = currEle.amount + 1;

                if(increaseAmount >= currEle.max){
                    increaseAmount = currEle.max;
                }

                return{
                    ...currEle,
                    amount : increaseAmount,
                }
            }else{
                return currEle;
            }
        })

        return{
            ...state,
            cart : updatedProduct,

        }
    }

    if(action.type === "SET_DECREMENT"){
        let updatedProduct = state.cart.map((currEle) => {
            if(currEle.id === action.payload){
                let decreaseAmount = currEle.amount - 1;

                if(decreaseAmount <= 1){
                    decreaseAmount = 1;
                }

                return{
                    ...currEle,
                    amount : decreaseAmount,
                }
            }else{
                return currEle;
            }
        })

        return{
            ...state,
            cart : updatedProduct,
        }
    }    
    
    // to remove the item
    if(action.type === "REMOVE_ITEM"){

        let updatedCart = state.cart.filter((curEle) => {
            return curEle.id !== action.payload
        })

        return {
            ...state,
            cart:updatedCart,
        }
    }

    // to clear the cart : 
    if(action.type === "CLEAR_CART"){
        return{
            ...state,
            cart : [],
        }
    }

    //calculate the total price
    if(action.type === "CART_TOTAL_PRICE"){
       let total_amount = state.cart.reduce((initialVal , curEle) => {
            let {price , amount } = curEle;

            initialVal = initialVal + price * amount ;

            return initialVal;
       } , 0)

       return{
        ...state,
        total_price : total_amount,
       }
        
    }
}

export default CartReducer;