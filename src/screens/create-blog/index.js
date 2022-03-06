
import { useEffect, useRef } from "react"
import {
   Grid, makeStyles, TextField,
   MenuItem, Select, FormHelperText,
   Chip, Paper, Button
} from "@material-ui/core"
import { Fragment, useState } from "react"
import DashboardHeader from "../../layout/header/dashboard.header"
import { createPost, fetchTags } from "../../redux/actions/post.actions";
import { useDispatch, useSelector } from "react-redux";
import authCheck from "../../utils/authCheck";
import { useHistory } from "react-router-dom";
import JoditEditor from "jodit-react";


const CreateBlog = () => {
   const classes = styles()
   const editor = useRef(null)
   const tags = useSelector(state => state.post.tags)
   const [title, setTitle] = useState('')
   const [imgPreview, setImgPreview] = useState()
   const [tagSelected, setTagSelected] = useState([])
   const [postThumb, setPostThumb] = useState('')
   const [editorState, setEditorState] = useState('')
   const dispatch = useDispatch()
   const history = useHistory()
   useEffect(() => {
      dispatch(fetchTags())
   }, [dispatch])
   const handleFile = (e) => {
      let file = e.target.files[0]
      let reader = new FileReader()
      reader.addEventListener(
         "load",
         () => setImgPreview(String(reader.result), false))
      if (file) {
         reader.readAsDataURL(file)
      }
      setPostThumb(file)
   }
   const handleTitle = e => {
      setTitle(e.target.value)
   }
   const handleTagSelected = e => {
      setTagSelected(e.target.value)
   }
   const handlePostBlog = () => {
      let _formData = new FormData()
      _formData.append('title', title)
      _formData.append('tags', tagSelected)
      _formData.append('postThumb', postThumb)
      _formData.append('content', editorState)
      let token = authCheck()
      createPost(token, _formData, history)
   }
   return (
      <Fragment>
         <DashboardHeader />
         <Grid container className={classes.editorContainer}>
            <Grid item md={5} sm={12} >
               <Paper className={classes.infoWrapper}>
                  <TextField
                     value={title}
                     autoFocus error={title.length === 0 ? true : false}
                     variant="outlined" label="Tiêu đề"
                     onChange={handleTitle}
                     helperText="Nhập tiêu đề bài viết"
                     className={classes.input} />
                  <Select
                     value={tagSelected}
                     onChange={handleTagSelected}
                     multiple
                     labelId='multi-select'
                     variant="outlined"
                     error={tagSelected.length === 0 ? true : false}
                     className={classes.input}
                     renderValue={(selected) => (
                        <div className={classes.chips}>
                           {selected.map((value) => (
                              <Chip key={value}
                                 label={value}
                                 className={classes.chip}
                              />
                           ))}
                        </div>
                     )}
                  >
                     {tags && tags.map((tag) => (
                        <MenuItem key={tag._id} value={tag.tagName}>
                           {tag.tagName}
                        </MenuItem>
                     ))}
                  </Select>
                  <FormHelperText id='multi-select'>Chọn tag để phân loại bài viết</FormHelperText>
                  <TextField error={postThumb === '' ? true : false} type='file' variant="outlined" onChange={handleFile} className={classes.input} />
                  <FormHelperText>Chọn ảnh bìa</FormHelperText>
                  <img className={classes.previewImage} src={imgPreview} alt="Ảnh xem trước" />
               </Paper>
            </Grid>
            <Grid item md={7} sm={12} className={classes.contentWrapper} >
               <JoditEditor
                  ref={editor}
                  className={classes.editor}
                  value={editorState}
                  onChange={newContent => setEditorState(newContent)}
               />

               <Button className={classes.button}
                  disabled={title.length === 0 || tagSelected.length === 0 || postThumb === '' || editorState.length === 0 ? true : false}
                  variant="contained" color="primary"
                  onClick={handlePostBlog}>Đăng bài viết</Button>
            </Grid>
         </Grid>
      </Fragment >
   )
}

const styles = makeStyles({
   editorContainer: {
      justifyContent: "center",
      alignItems: "center",
      padding: "10px 0"
   },
   infoWrapper: {
      marginTop: "10px",
      display: "flex",
      flexDirection: "column",
      padding: "20px",
   },
   wrapper: {
      marginTop: "10px"
   },
   chips: {
      display: 'flex',
      flexWrap: 'wrap',
   },
   chip: {
      margin: 2,
   },
   input: {
      marginTop: "20px",
   },
   previewImage: {
      width: "100%",
      flexShrink: 0,
      height: "320px",
      border: "1px solid #eee"
   },
   contentWrapper: {
      display: 'flex',
      flexDirection: "column",
      alignItems: 'center',
      padding: '10px'
   },
   button: {
      width: "20%",
      padding: "10px 0",
      marginTop: '55px'
   }
})
export default CreateBlog