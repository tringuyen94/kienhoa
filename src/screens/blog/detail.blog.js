import { Fragment, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import RoutePanel from "../../components/RoutePanel"
import { fetchPostBySlugTitle } from "../../redux/actions/post.actions"
import { CircularProgress, makeStyles, Typography, Grid,Box } from "@material-ui/core"
import { DOMAIN } from "../../services/baseURL.services"

const DetailBlog = () => {
   const classes = styles()
   const { titleSlug } = useParams()
   const dispatch = useDispatch()
   const isLoading = useSelector(state => state.post.isLoading)
   const post = useSelector(state => state.post.postByTitle)
   const relatedPosts = useSelector(state => state.post.posts)
   useEffect(() => {
      dispatch(fetchPostBySlugTitle(titleSlug))
   }, [dispatch, titleSlug])
   return (
      <Fragment>
         {isLoading ? <CircularProgress /> : post &&
            <Fragment>
               <RoutePanel namePanel={post.title} />
               <img src={DOMAIN + "/" + post.postThumb} alt="post-thumb" className={classes.postThumb} />
               <Grid container>
                  <Grid item md={8}>
                     <p dangerouslySetInnerHTML={{ __html: post.content }} />
                  </Grid>
                  <Grid item md={4}>
                     <Typography variant="h5">Bài viết liên quan</Typography>
                     {relatedPosts ? <Box>

                     </Box> : <small>Không có bài viết nào</small>}
                  </Grid>
               </Grid>

            </Fragment>
         }

      </Fragment>
   )
}

const styles = makeStyles({
   postThumb: {
      width: "100%",
      height: "500px"
   }
})
export default DetailBlog