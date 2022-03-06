import { useEffect, useState } from 'react';
import { makeStyles, AppBar, Toolbar, Typography, Button} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AdminAvatar from '../../components/AdminAvatar';
import DrawerDashboard from '../../components/DrawerDashboard';
import jwt from 'jsonwebtoken'
import { useHistory } from 'react-router-dom';
const DashboardHeader = () => {
   const classes = styles()
   const history = useHistory()
   const [toggleDrawer, setToggleDrawer] = useState(false)
   const [profile, setProfile] = useState()
   useEffect(() => {
      let token = JSON.parse(localStorage.getItem('token'))
      setProfile(jwt.verify(token, "KIENHOA_APP"))
   }, [])
   return profile ? (
      <AppBar position="static">
         <Toolbar className={classes.headerWrapper}>
            <IconButton edge="start" color="inherit" className={classes.menuButton} onClick={() => setToggleDrawer(true)}>
               <MenuIcon className={classes.icon} />
            </IconButton>
            <Typography variant="h4" className={classes.title}><a href="/admin">Dashboard</a></Typography>
            {profile.role === "administrator" &&
               <Button variant="outlined"
                  color="secondary"
                  onClick={() => history.push('/admin/create-user')}
                  className={classes.buttonCreateUserLink}>Tạo tài khoản</Button>}
            <div className={classes.profileWrapper}>
               <Typography variant="body1"> {profile.firstName}  {profile.lastName}</Typography>
               <AdminAvatar sourceAvatar={profile.sourceAvatar} />
            </div>
         </Toolbar>
         <DrawerDashboard toggleDrawer={toggleDrawer} setToggleDrawer={setToggleDrawer} />
      </AppBar>
   ) : null
}
const styles = makeStyles(theme => ({
   menuButton: {
      marginRight: theme.spacing(2),
   },
   icon: {
      fontSize: "30px",
   },
   headerWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: 'space-between'
   },
   title: {
      cursor: 'pointer',
      "& a": {
         textDecoration: "none",
         color: "#fff",
         transition: 'color .25s ease',
      },
      "&:hover a": {
         color: '#FF851B'
      },
   },
   profileWrapper: {
      display: "flex",
      alignItems: "center",
   },
   buttonCreateUserLink: {
      marginRight: "10px"
   }
}))
export default DashboardHeader