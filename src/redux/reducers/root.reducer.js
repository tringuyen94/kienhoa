import { combineReducers } from "redux";
import AuthReducer from "./auth.reducer";
import PostReducer from "./post.reducer";
import ProductReducer from "./product.reducer";
import ProjectReducer from "./project.reducer";


const rootReducer = combineReducers({
   auth: AuthReducer,
   post: PostReducer,
   project:ProjectReducer,
   product: ProductReducer
})
export default rootReducer