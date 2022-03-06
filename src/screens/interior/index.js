import { Typography, Tabs, Tab, Box, Container } from "@material-ui/core"
import { Fragment, useEffect, useState } from "react"
import RoutePanel from "../../components/RoutePanel"
import { useDispatch, useSelector } from "react-redux";
import TabPanel from "../../components/TabPanel";
import { fetchRooms } from "../../redux/actions/product.actions";

const Interior = () => {
   const dispatch = useDispatch()
   const rooms = useSelector(state => state.product.rooms)
   const [value, setValue] = useState(0);
   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   useEffect(() => {
      dispatch(fetchRooms())
   }, [dispatch])
   return (
      <Fragment>
         <RoutePanel namePanel="Nội thất" />
         <Container maxWidth="lg">
            <Box
               sx={{ flexGrow: 1,
                   bgcolor: 'background.paper',
                    display: 'flex', height: 224,
                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
            >
               <Tabs
                  orientation="vertical"
                  variant="scrollable"
                  value={value}
                  onChange={handleChange}
                  aria-label="Vertical tabs example"
                  sx={{ borderRight: 2, borderColor: 'divider' }}
               >
                  {
                     rooms && rooms.map(room => (
                        <Tab label={room.nameRoom} key={room._id} />
                     ))
                  }
               </Tabs>
               <TabPanel value={value} index={0}>
                  Item One
               </TabPanel>
               <TabPanel value={value} index={1}>
                  Item Two
               </TabPanel>
               <TabPanel value={value} index={2}>
                  Item Three
               </TabPanel>
               <TabPanel value={value} index={3}>
                  Item Four
               </TabPanel>
               <TabPanel value={value} index={4}>
                  Item Five
               </TabPanel>
            </Box>
         </Container>


      </Fragment>
   )
}
export default Interior
