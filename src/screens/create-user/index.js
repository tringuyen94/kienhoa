import { makeStyles, Grid, Paper, TextField, Button } from "@material-ui/core"
import { Fragment } from "react"
import DashboardHeader from "../../layout/header/dashboard.header"
import * as yup from 'yup'
import { Formik } from "formik"
import { useHistory } from "react-router-dom"
import { createUser } from "../../redux/actions/auth.actions"


const CreateUserSchema = yup.object().shape({
   firstName: yup.string().required("Không được để trống"),
   lastName: yup.string().required("Không được để trống"),
   username: yup.string().required('Tên đăng nhập trống')
      .matches(/^[a-z0-9_]+$/, "Tên đăng nhập chứa ký tự không hợp lệ"),
   password: yup.string().required('Mật khẩu trống')
      .min(6, 'Độ dài mật khẩu từ 6 đến 20 ký tự')
      .max(20, "Độ dài mật khẩu từ 6 đến 20 ký tự")

})


const CreateUser = () => {
   const history = useHistory()
   const classes = styles()
   const handleSubmitForm = (data) => {
      createUser(data, history)
   }
   return (
      <Fragment>
         <DashboardHeader />
         <Grid container className={classes.formCreateUserContainer}>
            <Formik
               initialValues={{
                  firstName: '',
                  lastName: '',
                  username: '',
                  password: ''
               }}
               validationSchema={CreateUserSchema}
               onSubmit={values => handleSubmitForm(values)}
               >
               {({ values, handleSubmit, handleChange, errors }) => (
                  <Grid item md={6} sm={12} xs={12}>
                     <Paper className={classes.fieldWrapper}>
                        <TextField fullWidth
                           value={values.lastName}
                           error={!!errors.lastName}
                           helperText={errors.lastName}
                           onChange={handleChange('lastName')}
                           label="Họ*" variant="outlined" />
                     </Paper>
                     <Paper className={classes.fieldWrapper}>
                        <TextField
                           error={!!errors.firstName}
                           helperText={errors.firstName}
                           value={values.firstName}
                           onChange={handleChange('firstName')}
                           fullWidth label="Tên*" variant="outlined" />
                     </Paper>
                     <Paper className={classes.fieldWrapper}>
                        <TextField
                           error={!!errors.username}
                           helperText={errors.username}
                           value={values.username}
                           onChange={handleChange('username')}
                           fullWidth label="Tên đăng nhập*" variant="outlined" />
                     </Paper>
                     <Paper className={classes.fieldWrapper}>
                        <TextField
                           error={!!errors.password}
                           helperText={errors.password}
                           value={values.password}
                           onChange={handleChange('password')}
                           fullWidth label="Mật khẩu*" type="password" variant="outlined" />
                     </Paper>
                     <Button color="primary" variant="contained" onClick={handleSubmit}>Tạo tài khoản</Button>
                  </Grid>
               )}
            </Formik>


         </Grid>
      </Fragment>
   )
}

const styles = makeStyles({
   formCreateUserContainer: {
      marginTop: '20px',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: "center",
   },
   fieldWrapper: {
      width: "450px",
      marginBottom: "20px",
      padding: '20px 25px',
   }

})
export default CreateUser