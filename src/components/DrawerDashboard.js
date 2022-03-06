import React from 'react';
import { makeStyles, Drawer, List, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { ListAlt, PostAdd, Person, MeetingRoom, Dashboard, House, Weekend } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { logout } from '../redux/actions/auth.actions';
import { useDispatch } from 'react-redux';

const styles = makeStyles({
   list: {
      width: 250,
   }
});

const DrawerDashboard = ({ toggleDrawer, setToggleDrawer }) => {
   const classes = styles();
   const history = useHistory()
   const dispatch =useDispatch()
   const list = () => (
      <div
         className={classes.list}
         onClick={() => setToggleDrawer(false)}
         onKeyDown={() => setToggleDrawer(false)}
      >
         <List >
            <ListItem button onClick={() => history.push('/admin')}>
               <ListItemIcon><Dashboard /></ListItemIcon>
               <ListItemText primary="Dashboard" />
            </ListItem>
         </List>
         <Divider />
         <List>
            <ListItem button onClick={() => history.push('/admin/create-blog')}>
               <ListItemIcon><PostAdd /></ListItemIcon>
               <ListItemText primary="Thêm bài viết" />
            </ListItem>
            <ListItem button onClick={() => history.push('/admin/blogs')}>
               <ListItemIcon><ListAlt /></ListItemIcon>
               <ListItemText primary="Danh sách bài viết" />
            </ListItem>
         </List>
         <Divider />
         <List>
            <ListItem button onClick={() => history.push('/admin/create-project')}>
               <ListItemIcon><House /></ListItemIcon>
               <ListItemText primary="Thêm dự án" />
            </ListItem>
            <ListItem button onClick={() => history.push('/admin/projects')}>
               <ListItemIcon><ListAlt /></ListItemIcon>
               <ListItemText primary="Danh sách dự án" />
            </ListItem>
         </List>
         <Divider />
         <List>
            <ListItem button onClick={() => history.push('/admin/create-product')}>
               <ListItemIcon><Weekend /></ListItemIcon>
               <ListItemText primary="Thêm nội thất" />
            </ListItem>
            <ListItem button onClick={()=>history.push('/admin/products')}>
               <ListItemIcon><ListAlt /></ListItemIcon>
               <ListItemText primary="Danh sách nội thất" />
            </ListItem>
         </List>
         <Divider />
         <List>
            <ListItem button onClick={() => history.push('/admin/profile')}>
               <ListItemIcon><Person /></ListItemIcon>
               <ListItemText primary="Tài khoản" />
            </ListItem>
            <ListItem button onClick={() => dispatch(logout(history))} >
               <ListItemIcon><MeetingRoom /></ListItemIcon>
               <ListItemText primary="Đăng xuất" />
            </ListItem>
         </List>
      </div>
   );

   return (
      <Drawer open={toggleDrawer} onClose={() => setToggleDrawer(false)}>
         {list()}
      </Drawer>
   );
}
export default DrawerDashboard