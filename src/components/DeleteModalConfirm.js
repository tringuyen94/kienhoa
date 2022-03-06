import { Button, IconButton, Modal, Typography, Box } from "@material-ui/core"
import { Delete } from "@material-ui/icons"
import { Fragment, useState } from "react"
import { useDispatch } from "react-redux"
import { deletePostById } from "../redux/actions/post.actions"
import { deleteProductById } from "../redux/actions/product.actions"
import { deleteProjectId } from "../redux/actions/project.actions"
import authCheck from "../utils/authCheck"
const DeleteModalConfirm = ({ postId, projectId, productId }) => {
   const [openModal, setOpenModal] = useState(false)
   const dispatch = useDispatch()
   const handleDeletePost = () => {
      let token = authCheck()
      if (postId) {
         dispatch(deletePostById(token, postId))
      }
      else if (projectId) {
         dispatch(deleteProjectId(token, projectId))
      }
      else if (productId){
         dispatch(deleteProductById(token,productId))
      }
      setOpenModal(false)
   }
   return (
      <Fragment>
         <IconButton onClick={() => setOpenModal(true)}>
            <Delete color="secondary" />
         </IconButton>
         <Modal open={openModal} onClose={() => setOpenModal(false)}>
            <Box sx={style}>
               <Typography>Bạn có thực sự muốn xoá không ? </Typography>
               <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleDeletePost}>Có</Button>
               <Button variant="outlined"
                  color="secondary"
                  onClick={() => setOpenModal(false)}>Không</Button>
            </Box>
         </Modal>
      </Fragment>
   )
}
const style = {
   position: 'absolute',
   display: 'flex',
   justifyContent: "space-between",
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 300,
   borderRadius: "10px",
   bgcolor: 'background.paper',
   border: '2px solid #000',
   boxShadow: 24,
   p: 4,
};
export default DeleteModalConfirm