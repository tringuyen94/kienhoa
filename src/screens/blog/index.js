import { Fragment, useEffect, useState } from "react"
import RoutePanel from "../../components/RoutePanel"
import { CircularProgress, Grid, Chip } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts, fetchTags, filterPostByTag } from "../../redux/actions/post.actions"
import { makeStyles } from "@material-ui/styles"
import { DOMAIN } from "../../services/baseURL.services"
import { useHistory } from "react-router-dom"

const Blog = () => {
   const classes = styles()
   const dispatch = useDispatch()
   const history = useHistory()
   const posts = useSelector(state => state.post.posts)
   const tags = useSelector(state => state.post.tags)
   const isLoading = useSelector(state => state.post.isLoading)
   const [selectedTag, setSelectedTag] = useState({ default: true, item: null })
   useEffect(() => {
      dispatch(fetchPosts())
      dispatch(fetchTags())
   }, [dispatch])
   const handleSelectTag = tagName => {
      setSelectedTag({ default: false, item: tagName })
      dispatch(filterPostByTag(tagName))
   }
   const handleSelectDefaultTag = () => {
      setSelectedTag({ default: true, item: null })
   }
   return (
      <Fragment>
         <RoutePanel namePanel="Blog" />
         <Grid container justifyContent="center" className={classes.blogContainer}>
            <Grid item md={5}>
               {isLoading ? <CircularProgress /> :  posts.map(post => (
                  <div className={classes.post} key={post._id} onClick={() => history.push(`blog/detail/${post.titleSlug}`)}>
                     <div className={classes.postWriter}>
                        <img className={classes.postWriterAvatar} src={DOMAIN + "/" + post.postedBy.avatar} alt='#avatar' />
                        <p className={classes.postWriterNames}>{post.postedBy.firstName + " " + post.postedBy.lastName}</p>
                     </div>
                     <div className={classes.postBody}>
                        <h3 className={classes.postTitle}>{post.title}</h3>
                        <img alt="post-title" className={classes.postBodyImage} src={DOMAIN + "/" + post.postThumb} />
                     </div>
                     <div className={classes.postFooter}>
                        <div className={classes.postFooterTime}>{new Date(post.createdAt).toLocaleString('en-gb')}</div>
                        <div className={classes.postFooterTag}> <small> Tags:</small> {post.tags.map(tag => <Chip label={tag} key={tag} className={classes.chips} />)}</div>
                     </div>
                  </div>
               ))}
            </Grid>
            <Grid item md={3} >
               <Chip label="Tất cả" className={classes.chips} clickable color={selectedTag.default ? "primary" : 'default'} onClick={handleSelectDefaultTag} />
               {tags && tags.map(tag => <Chip label={tag.tagName} key={tag._id} className={classes.chips} clickable onClick={() => handleSelectTag(tag.tagName)} color={selectedTag.item === tag.tagName ? "primary" : "default"} />)}
            </Grid>
         </Grid>
      </Fragment>
   )
}
const styles = makeStyles({
   blogContainer: { marginTop: "20px" },
   post: {
      borderRadius: "10px",
      border: '1px #eee solid',
      padding: "8px 0",
      display: "flex",
      flexDirection: "column",
      margin: "10px 30px 30px 0px",
      cursor: 'pointer',
      transition: 'all .5s ease',
      "&:hover": {
         boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
      }
   },
   postWriter: {
      display: "flex",
      alignItems: "center",
      padding: "0px 0px 0px 15px",
   },
   postWriterAvatar: {
      width: '20px',
      height: '20px',
      marginRight: "10px"
   },
   postWriterNames: {
      fontWeight: "bold",
      fontSize: "12px"
   },
   postBody: {
      display: "flex",
      padding: "0px 0px 0px 15px",
      justifyContent: "space-between",
   },
   postTitle: {
      fontSize: "28px"
   },
   postContent: {
      color: "rgba(117, 117, 117, 1)"
   },
   postBodyImage: {
      width: "200px",
      height: "150px",
   },
   postFooter: {
      display: "flex",
      padding: "0px 0px 0px 15px",
      alignItems: 'center'
   },
   postFooterTime: {
      fontSize: "12px",
      fontStyle: "italic",
      marginRight: "15px"
   },
   chips: { margin: "5px" },
})
export default Blog