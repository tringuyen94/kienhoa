import { useState } from 'react';
import { Paper, Tabs, Tab, makeStyles, Box, Typography, Grid, Divider } from '@material-ui/core';
import PriceTabOne from './PriceTabOne';
import PriceTabTwo from './PriceTabTwo';

const Price = () => {
   const classes = styles();
   const [value, setValue] = useState(0);

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };
   return (
      <Paper className={classes.root}>
         <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
         >
            <Tab label="Giá thiết kế" className={classes.tabLabel} />
            <Tab label="Giá xây dựng" className={classes.tabLabel} />
            <Tab label="Hợp đồng" className={classes.tabLabel} />
         </Tabs>
         <TabPanel value={value} index={0} >
            <PriceTabOne />
         </TabPanel>
         <TabPanel value={value} index={1}>
            <PriceTabTwo />
         </TabPanel>
         <TabPanel value={value} index={2}>
            Hợp đồng
         </TabPanel>
      </Paper>

   )
}
function TabPanel(props) {
   const { children, value, index, ...other } = props;
   return (
      <div
         role="tabpanel"
         hidden={value !== index}
         {...other}
      >
         {value === index && (
            <Box p={3}>
               {children}
            </Box>
         )}
      </div>
   );
}

const styles = makeStyles({
   root: {
      margin:"40px 0",
      flexGrow: 1,
      backgroundColor: "rgb(240,240,240)"
   },
   tabLabel: {
      fontWeight: "bold",
      fontSize: "20px"
   }

});
export default Price

