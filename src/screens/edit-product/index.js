import { Fragment, useEffect, useState } from "react"
import { Button, NativeSelect, TextField } from '@material-ui/core'
import DashboardHeader from "../../layout/header/dashboard.header"
import MUIDataTable from "mui-datatables";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, fetchRooms } from "../../redux/actions/product.actions";
import { DOMAIN } from "../../services/baseURL.services";
import DeleteModalConfirm from "../../components/DeleteModalConfirm"


const EditProduct = () => {
   const dispatch = useDispatch()
   const products = useSelector(state => state.product.products)
   const rooms = useSelector(state => state.product.rooms)
   const [productData, setProductData] = useState({})
   const [editMode, setEditMode] = useState(false)
   const handleUpdateProductData = () => {

   }
   const columns = [
      {
         name: "_id",
         label: "Id",
         options: {
            display: false,
            filter: false,
            sort: false,
         },
      },
      {
         name: "nameProduct",
         label: "Tên sản phẩm",
         options: {
            filter: true,
            sort: true,
            customBodyRender: (name) => (
               <Fragment>
                  {editMode ?
                     <TextField
                        defaultValue={name}
                        onChange={handleUpdateProductData} /> :
                     <p>{name}</p>
                  }
               </Fragment>
            )
         }
      },
      {
         name: "imageProduct",
         label: "Ảnh sản phẩm",
         options: {
            filter: true,
            sort: false,
            customBodyRender: (name) => (
               <Fragment>
                  {editMode ?
                     <input type='file' /> :
                     <img src={DOMAIN + "/" + name} alt="#product" width="130px" />
                  }
               </Fragment>
            ),
         }
      },
      {
         name: "detailProduct",
         label: "Chi tiết",
         options: {
            filter: true,
            sort: false,
            customBodyRender: (name) => (
               <Fragment>
                  {editMode ?
                     <textarea
                        defaultValue={name}
                        onChange={handleUpdateProductData} /> :
                     <p>{name}</p>
                  }
               </Fragment>
            ),
         }
      },
      {
         name: "room",
         label: "Phòng",
         options: {
            filter: true,
            sort: false,
            customBodyRender: (name) => (
               <Fragment>
                  {editMode ?
                     <NativeSelect
                        onChange={handleUpdateProductData}>
                        {rooms && rooms.map(room => (
                           <option key={room._id} value={room._id} >
                              {room.nameRoom}
                           </option>
                        ))}
                     </NativeSelect> :
                     <p>{name.nameRoom}</p>
                  }
               </Fragment>
            )
         }
      },
      {
         name: "createdBy",
         label: "Tạo bởi",
         options: {
            filter: true,
            sort: true,
            customBodyRender: (name) => (<p>{name.firstName} {name.lastName}</p>)
         }
      },
      {
         name: "Thiết lập",
         options: {
            filter: false,
            sort: false,
            empty: true,
            customBodyRender: (value, tableMeta, updateValue) => (
               editMode ?
                  <Button color="primary"
                     variant="contained"
                     onClick={() => {
                        setEditMode(false)
                     }}
                  >
                     Lưu
                  </Button>
                  :
                  <Fragment>
                     <Button
                        variant="contained"
                        color="primary"
                        onClick={() => setEditMode(true)}
                     >
                        Cập nhật
                     </Button>
                     <DeleteModalConfirm productId={tableMeta.rowData[0]} />
                  </Fragment>

            ),
         },
      },
   ];


   const options = {
      selectableRows: 'none'
   };

   useEffect(() => {
      dispatch(fetchProducts())
      dispatch(fetchRooms())
   }, [dispatch])
   return (
      <Fragment>
         <DashboardHeader />
         {products && <MUIDataTable
            title="Danh sách nội thất"
            data={products}
            columns={columns}
            options={options}
         />}
      </Fragment>
   )
}
export default EditProduct
