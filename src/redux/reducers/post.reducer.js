import {
   FETCH_POST_BY_TITLE,
   FETCH_POST_FAILED, FETCH_POST_LOADING,
   FETCH_POST_SUCCESS, FETCH_TAGS, FILTER_POST_BY_TITLE,
   SORT_POST_BY_DATE, DELETE_POST_BY_ID, GET_POST_BY_TAG
} from "../actions/type.actions";

let initialState = {
   tags: null,
   isLoading: false,
   postByTitle: null,
   posts: []
}

const PostReducer = (state = initialState, actions) => {
   switch (actions.type) {
      case FETCH_TAGS:
         state.tags = actions.payload
         return { ...state }
      case FETCH_POST_LOADING:
         state.isLoading = true
         return { ...state }
      case FETCH_POST_SUCCESS:
         state.isLoading = false
         state.posts = actions.payload
         return { ...state }
      case FETCH_POST_FAILED:
         state.isLoading = false
         return { ...state }
      case FILTER_POST_BY_TITLE:
         let filterPostsByTitle = state.posts.filter(post => post.slugTitle.includes(actions.payload))
         return { ...state, posts: filterPostsByTitle }
      case GET_POST_BY_TAG:
         return { ...state, isLoading: false, posts: actions.payload }
      case SORT_POST_BY_DATE:
         state.isLoading = false
         state.posts = actions.payload
         return { ...state }
      case FETCH_POST_BY_TITLE:
         state.isLoading = false
         state.postByTitle = actions.payload
         return { ...state }
      case DELETE_POST_BY_ID:
         let indexNeedDelete = state.posts.findIndex(post => post._id === actions.payload)
         let result = [...state.posts.slice(0, indexNeedDelete), ...state.posts.slice(indexNeedDelete + 1)]
         return { ...state, posts: result }
      default:
         return state
   }
}

export default PostReducer