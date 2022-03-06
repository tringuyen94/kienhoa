import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import authCheck from '../../utils/authCheck'
import { makeStyles } from '@material-ui/core/styles';
import ConsoleDashBoard from './console.dashboard';
import DashboardHeader from '../../layout/header/dashboard.header';
const Dashboard = () => {
   const classes = styles()
   const history = useHistory()
   useEffect(() => {
      if (!authCheck()) {
         history.push('/login')
      }
   }, [history])
   return (
      <div className={classes.root}>
         <DashboardHeader/>
         <ConsoleDashBoard/>
      </div>
   )
}
const styles = makeStyles((theme) => ({
   root: {
      flexGrow: 1,
   },
}));
export default Dashboard



