import { useEffect } from "react"
import RoutePanel from "../../components/RoutePanel"
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { fetchProjectByName } from "../../redux/actions/project.actions"
import { Container, makeStyles } from '@material-ui/core'
import { DOMAIN } from "../../services/baseURL.services"
const DetailProject = () => {
   const classes = styles()
   const { slugNameProject } = useParams()
   const dispatch = useDispatch()
   const project = useSelector(state => state.project.project)
   useEffect(() => {
      dispatch(fetchProjectByName(slugNameProject))
   }, [dispatch, slugNameProject])
   return project && (
      <>
         <RoutePanel namePanel={project.nameProject} />
         <Container maxWidth="md">
            <h3>Thông tin dự án</h3>
            <ul className={classes.infoProject}>
               <li>Tên dự án: <span>{project.nameProject}</span> </li>
               <li>Tên kỹ sư:<span>{project.nameArchitect}</span> </li>
               <li>Địa chỉ:<span>{project.address}</span> </li>
               <li>Hạng mục: <span>{project.tagProject}</span>  </li>
            </ul>
            {project.projectImages.map((item, index) => (
               <img src={DOMAIN + "/" + item} key={index} className={classes.imgProject} alt="projects" />
            ))}
         </Container>
      </>
   )
}
const styles = makeStyles({
   infoProject:{
      "& > li":{
         fontSize:"18px",
         fontWeight:"bold",
         marginTop:"10px",
         "& > span":{
            fontWeight:"lighter",
            marginLeft:"5px"
         }
      }
   },
   imgProject: {
      width: '100%'
   },


})
export default DetailProject