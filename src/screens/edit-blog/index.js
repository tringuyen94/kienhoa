import { Fragment, useEffect, useRef, useState } from "react"
import DashboardHeader from "../../layout/header/dashboard.header"
import {
   List, Chip, Divider, InputAdornment, makeStyles,
   TextField, Grid, InputLabel,
   Typography, FormControl, CircularProgress, NativeSelect
} from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts, fetchTags, filterPostByTag, filterPostByTitle, sortPostsByDate } from "../../redux/actions/post.actions"
import { SearchRounded } from "@material-ui/icons"
import BlogItems from "../../components/BlogItem"


const EditBlog = () => {
   const classes = styles()
   const dispatch = useDispatch()
   const tags = useSelector(state => state.post.tags)
   const isLoading = useSelector(state => state.post.isLoading)
   const posts = useSelector(state => state.post.posts)
   const [searchTitle, setSearchTitle] = useState()
   const [selectedTag, setSelectedTag] = useState({ default: true, tagItem: '' })
   const typingTimeoutTitle = useRef(null)
   useEffect(() => {
      dispatch(fetchTags())
      dispatch(fetchPosts())
   }, [dispatch])
   const handleDateSort = (e) => {
      if (e.target.value === 'sorted') {
         return dispatch(sortPostsByDate())
      }
      else dispatch(fetchPosts())
   }
   const handleSearchByTitle = (e) => {
      const value = e.target.value.toLowerCase()
      setSearchTitle(value)
      if (typingTimeoutTitle.current) {
         clearTimeout(typingTimeoutTitle.current)
      }
      typingTimeoutTitle.current = setTimeout(() => {
         if (value.length === 0) return dispatch(fetchPosts())
         dispatch(filterPostByTitle(value))
      }, 1200);
   }
   const handleFilterByTag = (e) => {
      setSelectedTag({ default: false, tagItem: e.target.innerText })
      dispatch(filterPostByTag(e.target.innerText))
   }
   const handleDefaultTag = () => {
      setSelectedTag({ default: true, tagItem: '' })
      dispatch(fetchPosts())
   }
   return (
      <Fragment>
         <DashboardHeader />
         <div className={classes.blogContainer}>
            <Grid container className={classes.filterContainer} spacing={2}>
               <Grid item md={4} sm={12}>
                  <TextField
                     fullWidth
                     variant="filled"
                     value={searchTitle}
                     onChange={handleSearchByTitle}
                     placeholder="Nhập tiêu đề blog..."
                     InputProps={{
                        startAdornment: (
                           <InputAdornment position="start">
                              <SearchRounded />
                           </InputAdornment>
                        )
                     }}
                  />
               </Grid>
               <Grid item md={6} sm={12}>
                  <Typography variant="subtitle2">Tags:</Typography>
                  <Chip
                     className={classes.searchChips}
                     label="Tất cả"
                     color={selectedTag.default ? "primary" : "default"}
                     onClick={handleDefaultTag} />
                  {
                     tags && tags.map(tag => (
                        <Chip
                           key={tag._id}
                           label={tag.tagName}
                           color={tag.tagName === selectedTag.tagItem ? "primary" : "default"}
                           className={classes.searchChips}
                           onClick={handleFilterByTag} />
                     ))
                  }

               </Grid>
               <Grid item md={2} sm={12}>
                  <FormControl className={classes.formControl}>
                     <InputLabel htmlFor="date-sort">Sắp xếp theo</InputLabel>
                     <NativeSelect defaultValue='default' onChange={handleDateSort} inputProps={{ id: "date-sort" }} >
                        <option value='default'>Mới nhất</option>
                        <option value='sorted'>Cũ nhất</option>
                     </NativeSelect>
                  </FormControl>
                  {posts && <Typography variant="subtitle2">Tổng số bài viết:{posts.length}</Typography>}
               </Grid>

            </Grid>
            <Divider />
            <List className={classes.blogs}>
               {isLoading ? <CircularProgress />
                  : posts.length !== 0 ? <BlogItems posts={posts} /> : <em>Không có bài viết nào</em>}
            </List>

         </div>

      </Fragment>
   )
}
const styles = makeStyles({
   blogContainer: {
      padding: "15px 20px"
   },
   filterContainer: {
      alignItems: "center",
      padding: "15px 0",
      justifyContent: 'center'
   },
   formControl: {
      minWidth: "120px"
   },
   searchChips: {
      margin: "8px",
      cursor: "pointer",
      "&:hover": {
         border: "2px solid #3F50B5"
      }
   },
   blogs: {
      display: 'flex',
      justifyContent: 'center'
   }
})
export default EditBlog