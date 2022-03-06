import AuthServices from "../../services/auth.services"
import { toast } from 'react-hot-toast'
import { LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT } from "./type.actions"
export const login = (values, history) => {
   return dispatch => {
      AuthServices.login(values)
         .then(res => {
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.token })
            toast.success(res.data.message)
            history.push('/admin')
         })
         .catch(err => {
            dispatch({ type: LOGIN_FAILED })
            toast.error(err.response.data.message)
         })
   }
}
export const logout = (history) => {
   return dispatch => {
      dispatch({ type: LOGOUT })
      toast.success('Hẹn gặp lại !!')
      history.push('/')
   }
}
export const createUser = (data, history) => {
   AuthServices.createUser(data)
      .then(res => {
         history.push('/admin')
         toast.success(`Tạo tài khoản ${res.data.username} thành công`)
      })
      .catch(err => {
         toast.error(`${err.response.data.message}`)
      })
}