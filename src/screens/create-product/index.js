import { Fragment, useEffect, useState } from "react"
import {
   Container, FormControl, IconButton, FormHelperText,
   makeStyles, Paper, TextField, Button, NativeSelect,
   TextareaAutosize
} from "@material-ui/core"
import { Update, Delete, PhotoCamera } from '@material-ui/icons'
import DashboardHeader from "../../layout/header/dashboard.header"
import ImageUploading from "react-images-uploading";
import { useDispatch, useSelector } from "react-redux";
import { fetchRooms } from "../../redux/actions/product.actions";
import authCheck from "../../utils/authCheck";
import { createProduct } from "../../redux/actions/product.actions";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import * as _ from 'lodash'


const CreateProduct = () => {
   const classes = styles()
   const history=useHistory()
   const [imageProduct, setImageProduct] = useState([])
   const rooms = useSelector(state => state.product.rooms)
   const [productData, setProductData] = useState({
      nameProduct: '',
      detailProduct: '',
      room: ''
   })
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(fetchRooms())
   }, [dispatch])
   const handleFormTextChange = e => {
      setProductData({
         ...productData,
         [e.target.name]: e.target.value
      })
   }
   const handleImageProduct = (imageList) => {
      setImageProduct(imageList)
   }
   const hanldeSubmitProductData = () => {
      let _formData = new FormData()
      _formData.append('nameProduct', productData.nameProduct)
      _formData.append('detailProduct', productData.detailProduct)
      _formData.append('room', productData.room)
      let temp = _.map(imageProduct,'file')
      for (let i =0;i <= imageProduct.length;i++){
         _formData.append('imageProduct',temp[i])
      }
      let token = authCheck()
      createProduct(token, _formData,history)
   }
   return (
      <Fragment>
         <DashboardHeader />
         <Container maxWidth="sm" className={classes.formWrapper}>
            <Paper className={classes.formTextWrapper} >
               <FormControl>
                  <TextField name="nameProduct" onChange={handleFormTextChange} label="Tên sản phẩm" />
                  <FormHelperText>Nhập tên sản phẩm</FormHelperText>
               </FormControl>
               {rooms && <FormControl>
                  <NativeSelect name="room" onChange={handleFormTextChange}>
                     <option value="">Chọn phòng</option>
                     {rooms.map(room => (
                        <option key={room._id} value={room._id} >{room.nameRoom}</option>
                     ))}
                  </NativeSelect>
                  <FormHelperText>Chọn phòng đặt sản phẩm</FormHelperText>
               </FormControl>}
               <FormControl>
                  <TextareaAutosize
                     maxRows={4}
                     name="detailProduct"
                     onChange={handleFormTextChange}
                     placeholder="Thông tin sản phẩm"
                     style={{ width: 200 }}
                  />
                  <FormHelperText>Nhập thông tin của sản phẩm (kích cỡ, màu sắc,...)</FormHelperText>
               </FormControl>
            </Paper>
            <Paper className={classes.imageFormWrapper}>
               <FormControl>
                  <ImageUploading
                     value={imageProduct}
                     onChange={handleImageProduct}
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
            </Paper>
            <Button color="primary" variant="contained"
               onClick={hanldeSubmitProductData}
               disabled={productData.nameProduct === '' ||
                  productData.detailProduct === '' ||
                  productData.room === '' ||
                  imageProduct.length === 0
               }
            >Lưu sản phẩm</Button>
         </Container>
      </Fragment>
   )
}
const styles = makeStyles({
   formWrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: 'space-between',
      height: '80vh'
   },
   formTextWrapper: {
      display: 'flex',
      flexDirection: 'column',
      height: '30vh',
      marginTop: '30px',
      justifyContent: 'space-between',
      padding: '20px 30px'

   },
   imageFormWrapper: {
      padding: '25px 30px'
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
})
export default CreateProduct