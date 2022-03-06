import { LOGIN_FAILED, LOGIN_SUCCESS,LOGOUT } from "../actions/type.actions"

const initialState = {
   isLogged: false,
   token: null
}
const AuthReducer = (state = initialState, actions) => {
   switch (actions.type) {
      case LOGIN_SUCCESS:
         state.isLogged = true
         state.token = actions.payload
         localStorage.setItem('token', JSON.stringify(state.token))
         return { ...state }
      case LOGIN_FAILED:
         return state
      case LOGOUT:
         state.token = null
         state.isLogged = false
         localStorage.removeItem('token')
         return { ...state }
      default:
         return state
   }
}

export default AuthReducer