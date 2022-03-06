import React from 'react';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem'; import { DOMAIN } from '../services/baseURL.services';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/actions/auth.actions'


const StyledBadge = withStyles((theme) => ({
   badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
         position: 'absolute',
         top: 0,
         left: 0,
         width: '100%',
         height: '100%',
         borderRadius: '50%',
         animation: '$ripple 1.2s infinite ease-in-out',
         border: '1px solid currentColor',
         content: '""',
      },
   },
   '@keyframes ripple': {
      '0%': {
         transform: 'scale(.8)',
         opacity: 1,
      },
      '100%': {
         transform: 'scale(2.4)',
         opacity: 0,
      },
   },
}))(Badge);


const useStyles = makeStyles((theme) => ({
   root: {
      display: 'flex',
      '& > *': {
         margin: theme.spacing(1),
      },
   },
   avatar: {
      width: '60px',
      height: "60px"
   }
}));

export default function AdminAvatar({ sourceAvatar }) {
   const classes = useStyles();
   const [anchorEl, setAnchorEl] = React.useState(null);
   const history = useHistory()
   const dispatch = useDispatch()
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };
   return (
      <div className={classes.root}>
         <StyledBadge
            overlap="circular"
            onClick={handleClick}
            anchorOrigin={{
               vertical: 'bottom',
               horizontal: 'right',
            }}
            variant="dot"
         >
            <Avatar src={DOMAIN + sourceAvatar} className={classes.avatar} />
         </StyledBadge>
         <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
         >
            <MenuItem onClick={() => history.push("/admin/profile")}>Tài khoản</MenuItem>
            <MenuItem onClick={() => dispatch(logout(history))}>Đăng xuất</MenuItem>
         </Menu>
      </div>
   );
}
