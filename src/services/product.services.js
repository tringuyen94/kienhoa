import restConnector from "./baseURL.services"

class ProductServices {
   fetchRooms() {
      return restConnector({
         url: '/interiors',
         method: "GET"
      })
   }
   fetchProducts() {
      return restConnector({
         url: '/products',
         method: "GET"
      })
   }
   fetchProductByName(nameProduct) {
      return restConnector({
         url: 'products/fetch-product-by-name',
         method: "GET",
         params: { nameProduct }
      })
   }
   createProduct(token, productData) {
      return restConnector({
         url: '/products/create-product',
         method: "POST",
         headers: { "Authentication": `Bearer ${token}` },
         data: productData
      })
   }
   deleteProductById(token, productId) {
      return restConnector({
         url: `/products/delete-product-by-id/${productId}`,
         method: "DELETE",
         headers: { "Authentication": `Bearer ${token}` }
      })
   }
   updateProductById(token, productId, updateData) {
      return restConnector({
         url: `/update-proudct-by-id/${productId}`,
         method: "PUT",
         headers: { "Authentication": `Bearer ${token}` },
         data: updateData
      })
   }
   updateImageProductById(token, productId, updateImage) {
      return restConnector({
         url: `/update-image-product-by-id/${productId}`,
         method: "PUT",
         headers: { "Authentication": `Bearer ${token}` },
         data: updateImage
      })

   }
}
export default new ProductServices()