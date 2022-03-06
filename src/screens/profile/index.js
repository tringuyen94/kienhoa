import { Fragment, useEffect, useState } from "react"
import {
   Avatar, Button, FormControl,
   FormHelperText, Grid, makeStyles,
   Paper, TextField, Typography
} from "@material-ui/core"
import DashboardHeader from "../../layout/header/dashboard.header"
import jwt from 'jsonwebtoken'
import { DOMAIN } from "../../services/baseURL.services"


const Profile = () => {
   const classes = styles()
   const [profile, setProfile] = useState()

   useEffect(() => {
      let token = JSON.parse(localStorage.getItem('token'))
      setProfile(jwt.verify(token, "KIENHOA_APP"))
   }, [])
   const handleNameChange=( e)=>{
      setProfile({
         ...profile,
         [e.target.name]:e.target.value
      })
   }
   return profile ? (
      <Fragment>
         <DashboardHeader />
         <Grid container className={classes.profileWrapper} spacing={2}>
            <Grid item md={5} sm={12}>
               <Paper className={classes.infoWrapper}>
                  <Typography variant="h5" className={classes.title}>Cập nhật thông tin</Typography>
                  <FormControl className={classes.formControl}>
                     <TextField label='Tên đăng nhập' variant="filled"
                        disabled value={profile.username} fullWidth />
                     <FormHelperText>Tên đăng nhập không thể cập nhật được</FormHelperText>
                  </FormControl>
                  <Grid item>
                     <TextField label='Tên' name="firstName" style={{ margin: '0px 20px' }}
                      helperText="Cập nhật Tên" onChange={handleNameChange}
                       defaultValue={profile.firstName} />
                     <TextField label='Họ' name="lastName"
                        onChange={handleNameChange}
                      helperText="Cập nhật Họ" defaultValue={profile.lastName} />
                  </Grid>
                  <Grid item>
                     <FormControl className={classes.formControl}>
                        <TextField label="Phân loại tài khoản" disabled variant="filled" value={profile.role} />
                        <FormHelperText>Đây là vai trò của bạn không thể cập nhật được</FormHelperText>
                     </FormControl>
                  </Grid>
                  <Button color="primary" variant="contained" style={{ margin: '15px 0' }}>Cập nhật thông tin</Button>
               </Paper>
            </Grid>
            <Grid item md={5} sm={12}>
               <Paper className={classes.avatarWrapper}>
                  <Typography className={classes.title} variant="h5">Cập nhật ảnh đại diện</Typography>
                  <FormControl className={classes.formControl}>
                     <TextField onChange type="file" fullWidth/>
                     <FormHelperText>Chọn ảnh đại diện</FormHelperText>
                     <Avatar
                        className={classes.previewAvatar}
                        src={DOMAIN + "/" + profile.avatar}
                        alt="ảnh đại diện" />
                     <FormHelperText id="preview-imge">Ảnh xem trước</FormHelperText>
                     <Button variant="contained" color="primary"> Cập nhật ảnh đai diện</Button>
                  </FormControl>
               </Paper>
               <Paper className={classes.passwordWrapper}>
                  <Typography variant="h5" className={classes.title}>Đổi mật khẩu</Typography>
                  <TextField label='Mật khẩu mới' helperText="Nhập mật khẩu mới" />
                  <Button color="primary" variant="contained" style={{ margin: "15px 0" }}>Đổi mật khẩu</Button>
               </Paper>

            </Grid>

         </Grid>
      </Fragment>
   ) : null
}
const styles = makeStyles({
   profileWrapper: {
      width: "100vw",
      height: "80vh",
      justifyContent: "center",
      alignItems: 'center',
   },
   title: {
      textAlign: 'center'
   },
   infoWrapper: {
      height: '100%',
      display: 'flex',
      flexDirection: "column",
      padding: '10px 20px',
   },
   previewAvatar: {
      width: '60px',
      height: "60px"
   },
   passwordWrapper: {
      padding: '20px 25px',
      display: 'flex',
      flexDirection: 'column',
   },
   formControl: {
      margin: "15px"
   }
})
export default Profile