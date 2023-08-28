import { createContext, useContext, useReducer, useEffect} from "react";
import { useProductContext } from "./Productcontext";

//import the filterReducer as reducer
import reducer from "../reducer/FilterReducer"

const FilterContext = createContext();

const initialState = {
    filter_products : [],
    all_products : [],
    grid_view: true,

    filters : {
        text: "",
        category: "all",
        company : "all",
        maxPrice: 0,
        price: 0,
        minPrice: 0,
    },

}

const FilterContextProvider = ({children}) => {

    const { products } = useProductContext();

    // add items use the useReducer hook 
    const [state , dispatch] = useReducer(reducer , initialState);

    //to set grid view
    const setGridView = () => {
        return dispatch({type : "SET_GRID_VIEW"});
    }

    //to set list view
    const setListView = () => {
        return dispatch({type : "SET_LIST_VIEW"});
    }

    // update the filter values :
    const updateFilterValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        return dispatch({type : "UPDATE_FILTER_VALUE" , payload : {name , value}})
    }

    //to clear the filters 
    const clearFilters = () => {
        dispatch({type : "CLEAR_FILTERS"})
    }

    useEffect(() => {
        dispatch({type : "FILTER_PRODUCT"})
    }, [state.filters])

    useEffect(() => {
        dispatch({type:"LOAD_FILTER_PRODUCTS" , payload : products})
    },[products])

    return <FilterContext.Provider value={{...state , setGridView, setListView, updateFilterValue , clearFilters}}>
        {children}
    </FilterContext.Provider>
} 

//custom hook
export const useFilterContext = () => {
    return useContext(FilterContext)
};

export { FilterContextProvider }
