import { createContext } from "react";

export const ProductContext = createContext()
export const ProductReducer = ({state,action}) =>{
    switch (action.type) {
        case "Create Product":
            return {product:action.payload }
        case"Delete Product":
        return {product:state.product.filter((p)=>{p._id !==p.action.payload})}
        default:
            return state
    }
}
const ProductContextProvider = ({children}) =>{
    const [state,dispatch] = AuthReducer(ProductReducer,
        {user:null}
    )
    return <ProductContext.Provider value={{...state ,dispatch}}>
     {children}
    </ProductContext.Provider>
}