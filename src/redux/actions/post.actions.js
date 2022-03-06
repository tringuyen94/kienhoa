import PostServices from "../../services/posts.services"
import { FETCH_POST_FAILED, FETCH_POST_SUCCESS,
    FETCH_TAGS, FETCH_POST_LOADING, FILTER_POST_BY_TITLE,
    SORT_POST_BY_DATE, FETCH_POST_BY_TITLE,
     DELETE_POST_BY_ID, GET_POST_BY_TAG } from "./type.actions"
import toast from "react-hot-toast"

/** FETCH */
export const fetchTags = () => {
   return dispatch => {
      PostServices.fetchTags()
         .then(res => dispatch({ type: FETCH_TAGS, payload: res.data }))
         .catch(err => console.log(err))
   }
}
export const createPost = (token, _formData, history) => {
   PostServices.createPost(token, _formData)
      .then(res => {
         history.push('/admin/blogs')
         toast.success('Tạo bài viết thành công')
      })
      .catch(err => {
         console.log(err)
      })
}

export const fetchPosts = () => {
   return dispatch => {
      dispatch({ type: FETCH_POST_LOADING })
      PostServices.fetchPosts()
         .then(res => {
            dispatch({ type: FETCH_POST_SUCCESS, payload: res.data })
         })
         .catch(err => {
            dispatch({ type: FETCH_POST_FAILED })
         })

   }
}
export const fetchPostBySlugTitle = (titleSlug) => {
   return dispatch => {
      dispatch({ type: FETCH_POST_LOADING })
      PostServices.fetchPostByTitle(titleSlug)
         .then(res => {
            dispatch({ type: FETCH_POST_BY_TITLE, payload: res.data })
         })
         .catch(err => {
            dispatch({ type: FETCH_POST_FAILED })
         })
   }
}
/** FILTER */
export const filterPostByTitle = titleCharacter => {
   return dispatch => {
      dispatch({ type: FILTER_POST_BY_TITLE, payload: titleCharacter })
   }
}
export const filterPostByTag = tagName => {
   return dispatch => {
      dispatch({type:FETCH_POST_LOADING})
      PostServices.getPostsByTag(tagName)
         .then(res => {
            dispatch({ type: GET_POST_BY_TAG, payload: res.data })
         })
         .catch(err=>{
            dispatch({ type: FETCH_POST_FAILED })
         })
   }
}

export const sortPostsByDate = () => {
   return dispatch => {
      dispatch({ type: FETCH_POST_LOADING })
      PostServices.sortPostByTime()
         .then(res => {
            dispatch({ type: SORT_POST_BY_DATE, payload: res.data })
         })
         .catch(err => {
            dispatch({ type: FETCH_POST_FAILED })
         })
   }
}
/** UPDATE */
export const updatePostById = (postId, postData) => {
   PostServices.updatePostById(postId, postData)
      .then(res => toast.success('Cập nhật thành công'))
      .catch(err => toast.error('Cập nhật thất bại'))
}
export const updatePostThumbById = (postId, postThumb) => {
   PostServices.updatePostThumbById(postId, postThumb)
      .then(res => toast.success("Cập nhật thành công"))
      .catch(err => toast.error('Cập nhật thất bại'))
}
/** DELETE */
export const deletePostById = (token,postId) => {
   return dispatch => {
      PostServices.deletePostById(token,postId)
         .then(res => {
            dispatch({ type: DELETE_POST_BY_ID, payload: postId })
            toast.success(res.data.message)
         })
         .catch(err => toast.error(err.response.data.message))
   }
}