import {
   CircularProgress, FormControl,
   TextField, Grid, IconButton, FormHelperText, Button,
   makeStyles, RadioGroup, FormControlLabel, Radio, NativeSelect, Paper
} from "@material-ui/core"
import { Fragment, useEffect, useState } from "react"
import ImageUploading from "react-images-uploading"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import DashboardHeader from "../../layout/header/dashboard.header"
import { fetchProjectByName } from "../../redux/actions/project.actions"
import { PhotoCamera, Delete, Update } from "@material-ui/icons"
import { DOMAIN } from "../../services/baseURL.services"
import { _DISTRICTS } from "../../utils/locationData"
import * as _ from 'lodash'

 

const EditableProject = () => {
   const classes = styles()
   const MAX_NUMBER = 69
   const { slugNameProject } = useParams()
   const dispatch = useDispatch()
   const [projectData, setProjectData] = useState()
   const [projectImages, setProjectImages] = useState([])
   const needEditProject = useSelector(state => state.project.project)
   const isLoading = useSelector(state => state.project.isLoading)
   const handleProjectImages = (imageList) => {
      setProjectImages(imageList)
   }
   const handleChange = (e) => {
      setProjectData({
         ...needEditProject,
         [e.target.name]: e.target.value
      })
   }
   const handleUpdateProject = () => {
      if (projectData.inCity === 'false') {
         delete projectData['tagDistrict']
      }
      console.log(projectData)
   }
   const handleUpdateImageProject = () => {
      let _formData = new FormData()
      let temp = _.map(projectImages, 'file')
      for (let i = 0; i <= projectImages.length; i++) {
         _formData.append('projectImages', temp[i])
      }
      
   }
   useEffect(() => {
      dispatch(fetchProjectByName(slugNameProject))
   }, [dispatch, slugNameProject])
   return (
      <Fragment>
         <DashboardHeader />
         {isLoading ? <CircularProgress /> : needEditProject &&
            <Grid container>
               <Grid item md={6}>
                  <Paper>
                     <FormControl>
                        <TextField label='Tên dự án'
                           name="nameProject"
                           defaultValue={needEditProject.nameProject}
                           onChange={handleChange}
                        />
                     </FormControl>
                     <FormControl>
                        <TextField
                           label='Tên kỹ sư'
                           defaultValue={needEditProject.nameArchitect}
                           name="nameArchitect"
                           onChange={handleChange}
                        />
                     </FormControl>
                     <FormControl>
                        <TextField label='Địa chỉ'
                           name="address"
                           onChange={handleChange}
                           defaultValue={needEditProject.address} />
                     </FormControl>
                     <FormControl>
                        <RadioGroup defaultValue={String(needEditProject.inCity)} name="inCity" onChange={handleChange}>
                           <FormControlLabel value="false" control={<Radio color="primary" />} label="Ngoài thành phố" />
                           <FormControlLabel value="true" control={<Radio color="primary" />} label="Trong thành phố" />
                        </RadioGroup>
                     </FormControl>
                     {String(needEditProject.inCity) === 'true' &&
                        <FormControl>
                           <NativeSelect disabled={!needEditProject.inCity} defaultValue={needEditProject.tagDistrict} name='tagDistrict' onChange={handleChange}>
                              {_DISTRICTS.map((item, index) => (
                                 <option key={index}>{item.nameDistrict}</option>
                              ))}
                           </NativeSelect>
                        </FormControl>
                     }
                     <FormControl>
                        <NativeSelect defaultValue={needEditProject.tagProject} name='tagProject' onChange={handleChange}>
                           <option>Biệt thự</option>
                           <option>Nhà phố</option>
                           <option>Căn hộ</option>
                           <option>Các hạng mục khác</option>
                        </NativeSelect>
                     </FormControl>
                  </Paper>
                  <Button color="primary" variant="contained" onClick={handleUpdateProject}>Cập nhật </Button>
               </Grid>
               <Grid item md={4}>
                  <Paper>
                     <FormControl>
                        <ImageUploading
                           multiple
                           value={projectImages}
                           onChange={handleProjectImages}
                           maxNumber={MAX_NUMBER}
                           dataURLKey="data_url"
                        >
                           {({
                              imageList,
                              onImageUpload,
                              onImageRemoveAll,
                              onImageUpdate,
                              onImageRemove,
                              isDragging,
                              dragProps
                           }) => (
                              // write your building UI
                              <div className={classes.imageUploadWrapper}>
                                 <IconButton
                                    className={classes.buttonUploadImage}
                                    style={isDragging ? { color: "red" } : null}
                                    onClick={onImageUpload}
                                    {...dragProps}
                                 >
                                    <PhotoCamera />
                                 </IconButton>
                                 &nbsp;
                                 {imageList.length !== 0 &&
                                    <Button variant="outlined" color="secondary" onClick={onImageRemoveAll}>Xoá tất cả ảnh</Button>}
                                 <div className={classes.imageItemWrapper}>
                                    {imageList.map((image, index) => (
                                       <div key={index} className={classes.imageItem}>
                                          <img src={image.data_url} alt="" width="200" height="120" />
                                          <div className="image-item__btn-wrapper">
                                             <IconButton color="primary" onClick={() => onImageUpdate(index)}><Update /></IconButton>
                                             <IconButton color="secondary" onClick={() => onImageRemove(index)}><Delete /></IconButton>
                                          </div>
                                       </div>
                                    ))}
                                    {
                                       imageList.length === 0 && needEditProject.projectImages.map((image, index) => (
                                          <div key={index} className={classes.imageItem}>
                                             <img src={DOMAIN + "/" + image} alt="" width="200" height="120" />
                                          </div>
                                       ))
                                    }

                                 </div>
                              </div>
                           )}
                        </ImageUploading>
                        <FormHelperText>Nhấp để chọn ảnh hoặc kéo ảnh vào icon</FormHelperText>
                        <Button color="primary" variant="contained" onClick={handleUpdateImageProject}>Cập nhật ảnh</Button>
                     </FormControl>

                  </Paper>
               </Grid>
            </Grid>
         }
      </Fragment>
   )
}
const styles = makeStyles({
   imageUploadWrapper: {
      margin: "20px"
   },
   imageItemWrapper: {
      display: "flex",
      flexWrap: "wrap",
      maxWidth: "100%"
   },
   imageItem: {
      display: 'flex',
      alignItems: 'center',
   },
   buttonUploadImage: {
      border: "2px dotted black",
      padding: '45px',
      "& svg": {
         fontSize: "45px"
      }
   },
})
export default EditableProject
