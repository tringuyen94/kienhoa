import { Fragment, useState } from "react"
import {
   FormControl, FormHelperText, makeStyles,
   Select, TextField, Grid, RadioGroup,
   FormControlLabel, Radio,
   Button, IconButton, MenuItem, InputLabel, NativeSelect
} from "@material-ui/core"
import DashboardHeader from "../../layout/header/dashboard.header"
import { _DISTRICTS } from "../../utils/locationData"
import ImageUploading from "react-images-uploading";
import { Delete, PhotoCamera, Update } from "@material-ui/icons";
import { createProject } from "../../redux/actions/project.actions";
import { useHistory } from "react-router-dom";
import authCheck from "../../utils/authCheck"
import * as _ from 'lodash'

const CreateProject = () => {
   const history = useHistory()
   const classes = styles()
   const [projectData, setProjectData] = useState({
      nameProject: '',
      nameArchitect: '',
      address: '',
      inCity: "false",
      tagDistrict: '',
      tagProject: 'Biệt thự',
   })
   const [projectImages, setProjectImages] = useState([])
   const handleChange = (e) => {
      setProjectData({
         ...projectData,
         [e.target.name]: e.target.value
      })
   }
   const handleProjectImages = (imageList) => {
      setProjectImages(imageList);
   };
   const handleSubmit = () => {
      let _formData = new FormData()
      let temp = _.map(projectImages, 'file')
      if (projectData.inCity === 'false') {
         delete projectData['tagDistrict']
      }
      else {
         _formData.append('tagDistrict', projectData.tagDistrict)
      }
      _formData.append('nameProject', projectData.nameProject)
      _formData.append('nameArchitect', projectData.nameArchitect)
      _formData.append('address', projectData.address)
      _formData.append('inCity', projectData.inCity)
      _formData.append('tagProject', projectData.tagProject)
      for (let i = 0; i <= projectImages.length; i++) {
         _formData.append('projectImages', temp[i])
      }
      const token = authCheck()
      createProject(token, _formData, history)
   }
   const MAX_NUMBER = 69

   return (
      <Fragment>
         <DashboardHeader />
         <Grid container className={classes.formProjectWrapper}>
            <Grid item md={4} sm={12} xs={12} className={classes.formTextFieldProjectWrapper}>
               <FormControl className={classes.formTextFieldControl}>
                  <TextField variant="outlined"
                     name="nameProject"
                     value={projectData.nameProject}
                     helperText="Nhập tên dự án"
                     error={projectData.nameProject === '' ? true : false}
                     onChange={handleChange} label='Tên dự án*' fullWidth />
               </FormControl>
               <FormControl className={classes.formTextFieldControl}>
                  <TextField variant="outlined" label='Tên kỹ sư*'
                     helperText="Nhập tên kỹ sư"
                     name="nameArchitect"
                     value={projectData.nameArchitect}
                     error={projectData.nameArchitect === '' ? true : false}
                     onChange={handleChange}
                     fullWidth />
               </FormControl>
               <FormControl className={classes.formTextFieldControl}>
                  <TextField variant="outlined" label="Địa chỉ*"
                     helperText="Nhập địa chỉ dự án"
                     name="address"
                     value={projectData.address}
                     error={projectData.address === '' ? true : false}
                     onChange={handleChange}
                     fullWidth />
               </FormControl>
            </Grid>
            <Grid item md={4} sm={12} xs={12} className={classes.formSelectProjectWrapper}>
               <FormControl component="fieldset" className={classes.formSelectControl}>
                  <RadioGroup defaultValue={projectData.inCity} onChange={handleChange} name="inCity">
                     <FormControlLabel value="false" control={<Radio color="primary" />} label="Ngoài thành phố" />
                     <FormControlLabel value="true" control={<Radio color="primary" />} label="Trong thành phố" />
                  </RadioGroup>
                  <FormHelperText>Chọn địa điểm</FormHelperText>
               </FormControl>
               {projectData.inCity === 'true' && <FormControl className={classes.formSelectControl}>
                  <InputLabel id="label-district">Quận*</InputLabel>
                  <Select
                     labelId="label-district"
                     name="tagDistrict"
                     onChange={handleChange}>
                     <MenuItem value=''>
                        <em>Chọn quận </em>
                     </MenuItem>
                     {_DISTRICTS.map((district, index) =>
                        <MenuItem key={index} value={district.nameDistrict}>
                           {district.nameDistrict}
                        </MenuItem>
                     )}
                  </Select>
               </FormControl>}
               <FormControl>
                  <NativeSelect name="tagProject" onChange={handleChange} defaultValue={projectData.tagProject}>
                     <option value="Biệt thự">Biệt thự</option>
                     <option value="Nhà phố">Nhà phố</option>
                     <option value="Căn hộ">Căn hộ</option>
                     <option value="Các hạng mục khác">Các hạng mục khác</option>
                  </NativeSelect>
                  <FormHelperText>Chọn hạng mục</FormHelperText>
               </FormControl>
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
                           </div>
                        </div>
                     )}
                  </ImageUploading>
                  <FormHelperText>Nhấp để chọn ảnh hoặc kéo ảnh vào icon</FormHelperText>
               </FormControl>
               <Button
                  className={classes.buttonSubmitProjectForm}
                  variant="contained"
                  color="primary"
                  disabled={
                     projectData.nameProject === '' ||
                     projectData.nameArchitect === '' ||
                     projectData.address === '' ||
                     projectImages.length === 0
                  }
                  onClick={handleSubmit}
               >Tạo dự án</Button>
            </Grid>
         </Grid>
      </Fragment >
   )
}
const styles = makeStyles({
   formProjectWrapper: {
      justifyContent: 'space-evenly',
      alignItems: "center",
      marginTop: '20px'
   },
   formTextFieldProjectWrapper: {
      display: "flex",
      flexDirection: "column",
      padding: "15px 25px",
      boxShadow: "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px"
   },
   formSelectProjectWrapper: {
      display: 'flex',
      flexDirection: 'column',
      padding: "15px 25px",
      boxShadow: "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px"
   },
   formTextFieldControl: {
      marginTop: "18px"
   },
   formSelectControl: {
      margin: '18px 0px',
   },
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
   buttonSubmitProjectForm: {
      marginTop: "20px"
   }
})
export default CreateProject