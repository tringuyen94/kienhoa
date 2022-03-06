import { DELETE_PRODUCT_BY_ID, FETCH_PRODUCTS, FETCH_PRODUCT_BY_NAME, FETCH_ROOMS } from "../actions/type.actions"

let initialState = {
   rooms: [],
   products: [],
   product: null,
   isLoading: false
}

const ProductReducer = (state = initialState, action) => {
   switch (action.type) {
      case FETCH_ROOMS:
         state.rooms = action.payload
         return { ...state }
      case FETCH_PRODUCTS:
         state.products = action.payload
         return { ...state }
      case FETCH_PRODUCT_BY_NAME:
         state.product = action.payload
         return { ...state }
      case DELETE_PRODUCT_BY_ID:
         let indexNeedDelete = state.products.findIndex(prod => prod._id === action.payload)
         let result = [...state.products.slice(0, indexNeedDelete), ...state.products.slice(indexNeedDelete + 1)]
         return { ...state, products: result }
      default:
         return state
   }
}

export default ProductReducer