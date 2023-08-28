const FilterReducer = (state , action) => {
    if(action.type === "LOAD_FILTER_PRODUCTS"){

        // for maximum value of product 
        let priceArr = action.payload.map((curElem) => curElem.price);
        let maxPrice = Math.max(...priceArr);

        return{
            ...state,
            filter_products :[...action.payload],
            all_products : [...action.payload],
            filters: { ...state.filters, maxPrice, price: maxPrice },
        }
    }

    if(action.type === "SET_GRID_VIEW"){
        return{
            ...state,
            grid_view : true,
        }
    }

    if(action.type === "SET_LIST_VIEW"){
        return{
            ...state,
            grid_view : false,
        }
    }

    //update filter function
    if(action.type === "UPDATE_FILTER_VALUE"){
        const { name, value } = action.payload;

        return{
            ...state,
            filters : {
                ...state.filters,
                [name] : value,
            }
        }
    }

    // search box function to show items :
    if(action.type === "FILTER_PRODUCT"){
        let { all_products } = state;
        let tempFilterProduct = [...all_products];

        const {text , category , company , price} = state.filters;

        if(text){
            tempFilterProduct = tempFilterProduct.filter((currentElem) => {
                return currentElem.name.toLowerCase().includes(text);
            })
        }

        if(category !== "all"){
            tempFilterProduct = tempFilterProduct.filter((currentElem) => {
                return currentElem.category === category;
            })
        }

        if(company !== "all"){
            tempFilterProduct = tempFilterProduct.filter((currEle) => {
                return currEle.company === company;
            })
        }

        if (price === 0) {
            tempFilterProduct = tempFilterProduct.filter(
              (curElem) => curElem.price === price
            );
          } else {
            tempFilterProduct = tempFilterProduct.filter(
              (curElem) => curElem.price <= price
            );
          }

        return{
            ...state,
            filter_products : tempFilterProduct,
        }
    }

    if(action.type ===  "CLEAR_FILTERS"){
        return{
            ...state,
            filters : {
                ...state.filters,
                text: "",
                category: "all",
                company : "all",
                maxPrice: 0,
                price: state.filters.maxPrice,
                minPrice: state.filters.maxPrice,
            }
        }
    }
}

export default FilterReducer;