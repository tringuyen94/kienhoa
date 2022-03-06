import { Fragment, useEffect, useState } from "react"
import { Button, makeStyles, TextField, Typography, InputAdornment, IconButton } from "@material-ui/core"
import { AccountCircle, LockRounded, Visibility, VisibilityOff } from "@material-ui/icons"
import * as Yup from 'yup'
import { Formik } from "formik"
import LogoKienHoa from '../../assets/images/logo_kienhoa.jpg'
import { useDispatch } from "react-redux"
import { login } from "../../redux/actions/auth.actions"
import { useHistory } from "react-router"
import authCheck from "../../utils/authCheck"


const LoginSchema = Yup.object().shape({
   username: Yup.string().required('Tên đăng nhập trống'),
   password: Yup.string()
      .required('Mật khẩu trống')
      .min(6, 'Độ dài mật khẩu từ 6 đến 20')
      .max(20, 'Độ dài mật khẩu từ 6 đến 20')
})
const Login = () => {
   const classes = styles()
   const dispatch = useDispatch()
   const history = useHistory()
   const handleLogin = (values) => {
      dispatch(login(values, history))
   }
   useEffect(() => {
      if (authCheck()) {
         history.push('/admin')
      }
   }, [history])
   const [showPassword, setShowPassword] = useState(false)
   return (
      <Fragment>
         <div className={classes.loginScreen}>
            <Button color="inherit" onClick={()=>history.push("/")}>Về trang chủ</Button>
            <Formik initialValues={{
               username: "",
               password: ""
            }}
               validationSchema={LoginSchema}
               onSubmit={values => handleLogin(values)}
            >
               {({ errors, handleChange, handleSubmit, values }) => (
                  <form className={classes.loginForm} onSubmit={handleSubmit}>
                     <div className={classes.logoWrapper}>
                        <img src={LogoKienHoa} alt="#logo" className={classes.logo} />
                        <Typography variant="h5" className={classes.title}>Kiến Hoa</Typography>
                     </div>
                     <TextField error={!!errors.username} variant="outlined" autoFocus
                        onChange={handleChange('username')} helperText={errors.username}
                        value={values.username} label="Tên đăng nhập" className={classes.input}
                        InputProps={{
                           startAdornment: (
                              <InputAdornment position="start">
                                 <AccountCircle color="inherit" />
                              </InputAdornment>
                           ),
                        }}
                     />
                     <TextField type={showPassword ? 'text' : 'password'} error={!!errors.password}
                     variant="outlined" helperText={errors.password}
                     onChange={handleChange('password')} value={values.password}
                     label="Mật khẩu" className={classes.input}
                     InputProps={{
                        startAdornment: (
                           <InputAdornment position="start">
                              <LockRounded color="inherit" />
                           </InputAdornment>
                        ),
                        endAdornment: (
                           <InputAdornment position="end">
                              <IconButton onClick={() => setShowPassword(!showPassword)}>
                                 {showPassword ? <Visibility  /> : <VisibilityOff />}
                              </IconButton>
                           </InputAdornment>
                        )
                     }} />
                     <Button type="submit"
                        onClick={handleSubmit} variant="contained"
                        color='primary' className={classes.button}>Đăng nhập</Button>
                  </form>
               )}

            </Formik>


         </div>
      </Fragment >
   )
}
const styles = makeStyles({
   loginScreen: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
   },
   loginForm: {
      display: "flex",
      width: "600px",
      flexDirection: 'column',
      alignItems: "center",
      padding: "40px 0",
      borderRadius: "12px",
      boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
   },
   logoWrapper: {
      display: "flex",
      alignItems: "center",
   },
   logo: {
      borderRadius: '10px',
      width: '80px',
      height: "80px"
   },
   title: {
      fontFamily: "MyFont",
      fontSize: '43px',
      marginLeft: "30px"
   },
   input: {
      marginTop: "35px",
      margin: "0 10px",
      width: "60%",
   },
   button: {
      width: "50%",
      marginTop: "25px",
   }
})
export default Login