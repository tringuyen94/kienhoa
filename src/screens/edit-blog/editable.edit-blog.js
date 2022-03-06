import {
   CircularProgress, FormControl, TextField,
   Grid, makeStyles, Chip, MenuItem, Select, Button
} from "@material-ui/core"
import JoditEditor from "jodit-react"
import { Fragment, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import DashboardHeader from "../../layout/header/dashboard.header"
import { fetchPostBySlugTitle, fetchTags, updatePostById, updatePostThumbById } from "../../redux/actions/post.actions"
import { DOMAIN } from "../../services/baseURL.services"
import { Save } from "@material-ui/icons"



const EditableBlog = () => {
   let { titleSlug } = useParams()
   const classes = styles()
   const dispatch = useDispatch()
   const isLoading = useSelector(state => state.post.isLoading)
   const post = useSelector(state => state.post.postByTitle)
   const tags = useSelector(state => state.post.tags)
   const [postData, setPostData] = useState({})
   const [postThumb,setPostThumb] =useState()
   const [imgPreview, setImgPreview] = useState('')



   const handleChangePostData = e => {
      setPostData({
         ...post,
         [e.target.name]: e.target.value
      })
   }

   const handlePostThumb = e => {
      let reader = new FileReader()
      let file = e.target.files[0]
      reader.addEventListener('load', () => setImgPreview(String(reader.result), false))
      reader.readAsDataURL(file)
      setPostThumb(file)   
   }
   const handleUpdate = () => {
      updatePostById(post._id, postData)
   }
   const handleUpdatePostThumb= ()=>{
      let _formData =new FormData()
      _formData.append('postThumb',postThumb)
      updatePostThumbById(post._id,_formData)
   }

   useEffect(() => {
      dispatch(fetchPostBySlugTitle(titleSlug))
      dispatch(fetchTags())
   }, [dispatch, titleSlug])


   return (
      <Fragment>
         <DashboardHeader />
         {isLoading ?
            <Grid container className={classes.editBlogFormWrapper}>
               <CircularProgress />
            </Grid>
            : post ? <Grid container className={classes.editBlogFormWrapper}>
               <Grid item md={6} sm={12} className={classes.editBlogTextFieldWrapper}>
                  <FormControl>
                     <TextField label="Tiêu đề bài viết"
                        onChange={handleChangePostData} variant="filled"
                        name="title"
                        defaultValue={post.title} fullWidth />
                  </FormControl>
                  <FormControl>
                     <Select
                        name='tags'
                        defaultValue={post.tags}
                        onChange={handleChangePostData}
                        multiple
                        variant="filled"
                        // error={tagSelected.length === 0 ? true : false}
                        // className={classes.input}
                        renderValue={(selected) => (
                           <Fragment>
                              {selected.map((value) => (
                                 <Chip key={value}
                                    label={value}
                                    className={classes.chip}
                                 />
                              ))}
                           </Fragment>
                        )}
                     >
                        {tags && tags.map((tag) => (
                           <MenuItem key={tag._id} value={tag.tagName}>
                              {tag.tagName}
                           </MenuItem>
                        ))}
                     </Select>
                  </FormControl>
                  <JoditEditor
                     value={post.content}
                     onChange={newContent => setPostData({ ...post, content: newContent })}
                  />
                  <Button size="large"
                     color="primary" startIcon={<Save />}
                     variant="contained"
                     onClick={handleUpdate}
                  >Lưu </Button>
               </Grid>
               <Grid item md={6} sm={12} >
                  <FormControl>
                     <TextField variant="filled" onChange={handlePostThumb} type="file" name='postThumb' />
                     <img className={classes.preview} src={imgPreview === '' ? DOMAIN + "/" + post.postThumb : imgPreview} alt="preview" />
                     <Button color='primary' size="large" variant="contained"  onClick={handleUpdatePostThumb}>Cập nhật ảnh</Button>
                  </FormControl>
               </Grid>
            </Grid>
               : null
         }
      </Fragment >
   )
}
const styles = makeStyles({
   editBlogFormWrapper: {
      justifyContent: 'center',
   },
   editBlogTextFieldWrapper: {
      display: "flex",
      flexDirection: 'column',
   },
   preview:{
      width:'400px',
      height:"200px"
   }
})

export default EditableBlog