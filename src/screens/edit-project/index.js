import {
   Grid, NativeSelect, Radio,
   RadioGroup, FormControl,
   FormLabel, FormControlLabel, InputLabel,
   TextField, makeStyles, InputAdornment, CircularProgress, IconButton, Typography

} from "@material-ui/core"
import { Fragment, useEffect, useState, useRef } from "react"
import DashboardHeader from "../../layout/header/dashboard.header"
import { Edit, SearchRounded } from "@material-ui/icons"
import { _DISTRICTS } from "../../utils/locationData"
import { useDispatch, useSelector } from "react-redux"
import { fetchProjects, fetchProjectsByTagName, filterProjectByInCity, filterProjectByName, filterProjectByTagDistrict } from "../../redux/actions/project.actions"
import { DOMAIN } from "../../services/baseURL.services"
import DeleteModalConfirm from "../../components/DeleteModalConfirm"
import { useHistory } from 'react-router-dom'
const EditProject = () => {
   const classes = styles()
   const dispatch = useDispatch()
   const history = useHistory()
   const projects = useSelector(state => state.project.projects)
   const isLoading = useSelector(state => state.project.isLoading)
   const [projectTitle, setProjectTitle] = useState()
   const [inCity, setInCity] = useState('')
   const typingTimeoutTitle = useRef(null)

   const handleInCityChange = e => {
      setInCity(e.target.value)
      if (e.target.value === '') return dispatch(fetchProjects())
      else dispatch(filterProjectByInCity(e.target.value))
   }
   const handleTagDistrictChange = e => {
      if (e.target.value === '') return dispatch(filterProjectByInCity('true'))
      dispatch(filterProjectByTagDistrict(e.target.value))
   }
   const handleTagProjectChange = e => {
      if (e.target.value === '') return dispatch(fetchProjects())
      dispatch(fetchProjectsByTagName(e.target.value))
   }
   const handleSearchByNameProject = e => {
      let value = e.target.value.toLowerCase()
      setProjectTitle(value)
      if (typingTimeoutTitle.current) {
         clearTimeout(typingTimeoutTitle)
      }
      typingTimeoutTitle.current = setTimeout(() => {
         if (value.length === 0) return dispatch(fetchProjects())
         dispatch(filterProjectByName(value))
      }, 1200)
   }
   useEffect(() => {
      dispatch(fetchProjects())
   }, [dispatch])
   return (
      <Fragment>
         <DashboardHeader />
         <Grid container>
            <Grid item md={3} className={classes.filterContainer}>
               <FormControl className={classes.formSearch}>
                  <TextField
                     onChange={handleSearchByNameProject}
                     placeholder="Nhập tên dự án"
                     variant="filled"
                     InputProps={{
                        startAdornment: (
                           <InputAdornment position="start">
                              <SearchRounded />
                           </InputAdornment>
                        )
                     }} />
               </FormControl>
               <FormControl component="fieldset" className={classes.formRadio}>
                  <FormLabel component="legend">Khu vực</FormLabel>
                  <RadioGroup
                     defaultValue=""
                     name="radio-buttons-group"
                     onChange={handleInCityChange}
                  >
                     <FormControlLabel value="" control={<Radio />} label="Tất cả" />
                     <FormControlLabel value="false" control={<Radio />} label="Ngoài thành phố" />
                     <FormControlLabel value="true" control={<Radio />} label="Trong thành phố" />
                  </RadioGroup>
               </FormControl>
               {inCity === 'true' && <FormControl className={classes.formDistrict} >
                  <NativeSelect
                     name="tagDistrict"
                     onChange={handleTagDistrictChange}
                     defaultValue=''
                  >
                     <option value=''>
                        Chọn quận
                     </option>
                     {_DISTRICTS.map((district, index) =>
                        <option key={index} value={district.nameDistrict}>
                           {district.nameDistrict}
                        </option>
                     )}
                  </NativeSelect>
               </FormControl>}
               <FormControl className={classes.formTagProject}>
                  <InputLabel>Chọn 1 hạng mục</InputLabel>
                  <NativeSelect
                     onChange={handleTagProjectChange}
                  >
                     <option value=''>Tất cả</option>
                     <option value="Biệt thự">Biệt thự</option>
                     <option value="Nhà phố">Nhà phố</option>
                     <option value="Căn hộ">Căn hộ </option>
                     <option value="Các hạng mục khác">Các hạng mục khác</option>
                  </NativeSelect>
               </FormControl>
            </Grid>
            <Grid container item md={9} className={classes.projectsContainer}>
               {isLoading ? <CircularProgress /> : projects.length !== 0 ?
                  projects.map((item, index) => (
                     <Grid item md={4} key={index} className={classes.projectWrapper}>
                        <div className={classes.projectInteract}>
                           <IconButton color="primary" onClick={() => history.push(`projects/${item.slugNameProject}`)}> <Edit /> </IconButton>
                           <DeleteModalConfirm projectId={item._id} />
                        </div>
                        <img src={DOMAIN + "/" + item.projectImages[0]} alt="project" className={classes.projectImage} />
                        <div className={classes.projectDetail}>
                           <Typography className={classes.projectNameProject}>{item.nameProject}</Typography>
                           <Typography className={classes.projectTagProject}>{item.tagProject}</Typography>
                        </div>
                     </Grid>
                  )) : <em>Không có dự án nào</em>}
            </Grid>
         </Grid>
      </Fragment>
   )
}
const styles = makeStyles({
   filterContainer: {
      padding: '20px 25px',
      display: 'flex',
      flexDirection: "column",
      height: '100vh',
      boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
   },
   formSearch: {
      marginBottom: "80px"
   },
   formRadio: {
      marginTop: "20px"
   },
   formDistrict: {
      marginBottom: "40px"
   },
   formTagProject: {
      marginTop: "80px"
   },
   projectsContainer: {
      display: 'flex',
      marginTop: "10px",
   },
   projectWrapper: {
      height: "220px",
      marginRight: '14.1px',
      flexBasis: '32%',
      cursor: 'pointer',
      position: "relative",
      boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
      "&:hover div:nth-of-type(1)": {
         opacity: 1
      }
   },
   projectInteract: {
      position: 'absolute',
      top: 0,
      right: 0,
      opacity: 0,
      transition: "all .25s ease",
   },
   projectImage: {
      width: "100%",
      height: "100%",
   },
   projectDetail: {
      display: 'flex',
      position: "absolute",
      bottom: 0,
      left: 0,
      padding: '8px 10px',
      flexDirection: 'column',
      justifyContent: "space-between"
   },
   projectNameProject: {
      color: "#f1f1f1",
      textTransform: "uppercase",
      fontSize: "12px",
      fontWeight: 'bold'
   },
   projectTagProject: {
      color: "#AAAAAA",
      textTransform: "uppercase",
      fontSize: "11px",
      fontWeight: 'bold'
   }
})
export default EditProject