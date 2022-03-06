import { Fragment, useEffect, useState } from "react"
import RoutePanel from "../../components/RoutePanel"
import { Tabs, Tab, Box, makeStyles } from '@material-ui/core'
import TabPanel from "../../components/TabPanel"
import { useDispatch, useSelector } from "react-redux"
import { fetchProjects, fetchProjectsByTagName } from "../../redux/actions/project.actions"
import TagProject from "./tag.projects"
const Projects = () => {
   const classes = styles()
   const [value, setValue] = useState(0);
   const dispatch = useDispatch()
   const projects = useSelector(state => state.project.projects)
   useEffect(() => {
      if (value === 0) {
         dispatch(fetchProjects())
      }
      else if (value === 1) {
         dispatch(fetchProjectsByTagName('Biệt thự'))
      }
      else if (value === 2) {
         dispatch(fetchProjectsByTagName('Nhà phố'))
      }
      else if (value === 3) {
         dispatch(fetchProjectsByTagName('Căn hộ'))
      }
      else {
         dispatch(fetchProjectsByTagName('Các hạng mục khác'))
      }
   }, [dispatch, value])
   const handleChange = (event, newValue) => {
      setValue(newValue)
   }
   return (
      <Fragment>
         <RoutePanel namePanel="Dự án" />
         <Box className={classes.tabContainer} sx={{ bgcolor: 'background.paper' }}>
            <Tabs
               className={classes.tabsWrapper}
               value={value}
               onChange={handleChange}
               indicatorColor="primary"
               textColor="primary"
               aria-label="scrollable auto tabs example"
            >
               <Tab label="Tất cả" />
               <Tab label="Biệt thự" />
               <Tab label="Nhà phố" />
               <Tab label="Căn hộ" />
               <Tab label="Các hạng mục khác" />
            </Tabs>
            <TabPanel value={value} index={0}>
               <TagProject projects={projects} />
            </TabPanel>
            <TabPanel value={value} index={1} >
               <TagProject projects={projects} />
            </TabPanel>
            <TabPanel value={value} index={2}>
               <TagProject projects={projects} />
            </TabPanel>
            <TabPanel value={value} index={3}>
               <TagProject projects={projects} />
            </TabPanel>
            <TabPanel value={value} index={4} >
               <TagProject projects={projects} />
            </TabPanel>
         </Box>
      </Fragment>
   )
}
const styles = makeStyles({
   tabContainer: {
      display: "flex",
      flexDirection: 'column',
   },
   tabsWrapper: {
      margin: "0 auto",
   }
})
export default Projects