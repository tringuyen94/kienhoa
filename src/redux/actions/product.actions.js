import { DELETE_PRODUCT_BY_ID, FETCH_PRODUCTS, FETCH_PRODUCT_BY_NAME, FETCH_ROOMS } from "./type.actions"
import ProductServices from "../../services/product.services"
import toast  from "react-hot-toast"


export const fetchRooms = () => {
   return dispatch => {
      ProductServices.fetchRooms()
         .then(res => dispatch({ type: FETCH_ROOMS, payload: res.data }))
         .catch(err => console.log(err))
   }
}

export const createProduct = (token, productData, history) => {
   ProductServices.createProduct(token, productData)
      .then(res => {
         toast.success(res.data.message)
         history.push('/admin/products')
      })
      .catch(err => console.log(err))
}


export const fetchProducts = () => {
   return dispatch => {
      ProductServices.fetchProducts()
         .then(res => dispatch({ type: FETCH_PRODUCTS, payload: res.data }))
         .catch(err => toast.error(err.response.data.message))
   }
}
export const fetchProductByName = (nameProduct) => {
   return dispatch => {
      ProductServices.fetchProductByName(nameProduct)
         .then(res => {
            dispatch({ type: FETCH_PRODUCT_BY_NAME, payload: res.data })
         })
         .catch(err => console.log(err))
   }
}


export const deleteProductById = (token, productId) => {
   return dispatch => {
      ProductServices.deleteProductById(token, productId)
         .then(res => {
            dispatch({ type: DELETE_PRODUCT_BY_ID, payload: productId })
            toast.success(res.data.message)
         })
         .catch(err=>toast.error('Đã có lỗi xảy ra'))
   }
}