const productReducer = (state ,action) => {
    // function for set loading  means initial start :
    if(action.type === "SET_LOADING"){
        return {
            ...state,
            isLoading : true,
        };
    } 
    
    // function for set api when url works fine :
    if(action.type === "SET_API_DATA"){

        const featureData = action.payload.filter((currElement) => {
            return currElement.featured === true;
        })

        return{
            ...state,
            isLoading : false,
            products : action.payload,
            featureProducts : featureData,
        }
    }

    // function when url throws an error : 
    if(action.type === "API_ERROR"){
        return{
            ...state,
            isLoading : false,
            isError : true,
        };
    }

    // 2. function for single product  //
    if(action.type === "SET_SINGLE_LOADING"){
        return{
            ...state,
            isSingleLoading : true,
        };
    }

    //function for "SET_SINGLE_PRODUCT"
    if(action.type === "SET_SINGLE_PRODUCT"){
        return{
            ...state,
            isSingleLoading : false,
            SingleProduct : action.payload,
        }
    }

    // "SET_SINGLE_ERROR"
    if(action.type === "SET_SINGLE_ERROR"){
        return{
            ...state,
            isSingleLoading : false,
            isError : true,
        }
    }
}

export default productReducer;