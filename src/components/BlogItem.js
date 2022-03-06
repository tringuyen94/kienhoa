import {
   Avatar, Chip, Grid,
   IconButton,
   makeStyles, Typography,
} from "@material-ui/core"
import { DOMAIN } from "../services/baseURL.services"
import { useHistory } from "react-router-dom"
import { Create } from "@material-ui/icons"
import { useRouteMatch } from "react-router-dom"
import DeleteModalConfirm from "./DeleteModalConfirm"



const BlogItems = ({ posts }) => {
   const history = useHistory()
   const match = useRouteMatch()
   const classes = styles()
   return (
      <Grid container className={classes.cardContainer}>
         {posts.map((postItem, index) => (
            <Grid item md={4} className={classes.cardWrapper} key={index}>
               <div className={classes.cardHeader}>
                  <div className={classes.cardWriter}>
                     <Avatar src={DOMAIN + postItem.avatar} className={classes.cardHeaderAvatar} />
                     <Typography variant="body1" className={classes.cardInfo}>
                        {postItem.postedBy.firstName + " " + postItem.postedBy.lastName}
                        <small>{new Date(postItem.createdAt).toLocaleDateString('en-GB')}</small>
                     </Typography>
                  </div>
                  <div>
                     <IconButton color="primary" onClick={() => history.push(`${match.path}/${postItem.titleSlug}`)}>
                        <Create />
                     </IconButton>
                     <DeleteModalConfirm postId={postItem._id} />
                  </div>
               </div>
               <img className={classes.cardImage} alt="thumb" src={DOMAIN + "/" + postItem.postThumb} />
               <div className={classes.cardContent}>
                  <Typography variant="h5" className={classes.cardTitle}>{postItem.title}</Typography>
                  <div className={classes.cardFooter}>
                     <small>Tags: </small>
                     {postItem.tags.map((tag, index) => (
                        <Chip className={classes.cardFooterChip} key={index} label={tag} />
                     ))}
                  </div>

               </div>

            </Grid>
         ))
         }
      </Grid>
   )
}
const styles = makeStyles({
   cardContainer: {
      marginTop: "15px",
      margin: "0 auto",
   },
   cardWrapper: {
      display: 'flex',
      zIndex: 80,
      flexDirection: 'column',
      borderRadius: "12px",
      margin: "10px",
      border: "1px solid #eee",
      flexBasis: "23.556%",
      cursor: "pointer",
      transition: 'all .25s ease',
      "&:hover": {
         boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
      }
   },
   cardInfo: {
      display: "flex",
      flexDirection: 'column'
   },
   cardHeader: {
      display: "flex",
      padding: '10px 15px',
      alignItems: "center",
      justifyContent: 'space-between',
      flexShrink: 0
   },
   cardWriter: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: "8.5px",
   },
   cardHeaderAvatar: {
      marginRight: "10px"
   },
   cardImage: {
      width: "100%",
      height: '200px',
      objectFit: 'cover',
      flexShrink: 0
   },
   cardContent: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1
   },
   cardTitle: {
      padding: "8px 15px",
      flexShrink: 0,
   },
   cardFooter: {
      marginTop: 'auto',
      padding: '10px 15px',
      display: "flex",
      // flexDirection:"column",
      flexWrap: "wrap",
      alignItems: 'center',
      flexShrink: 0
   },
   cardFooterChip: {
      margin: "3px"
   }

})
export default BlogItems