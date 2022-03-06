import restConnector from "./baseURL.services"

class AuthServices {
   login(value) {
      return restConnector({
         url: 'auth/login',
         method: "POST",
         data: value
      })
   }
   createUser(data) {
      return restConnector({
         url: 'auth/create-user',
         method: 'POST',
         data
      })
   }

}
export default new AuthServices()