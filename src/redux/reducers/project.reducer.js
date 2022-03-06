import {
   DELETE_PROJECT_BY_ID, FETCH_PROJECTS_BY_TAGNAME, FETCH_PROJECT_BY_NAME,
   FETCH_PROJECT_FAILED, FETCH_PROJECT_LOADING, FETCH_PROJECT_SUCCESS, FILTER_PROJECT_BY_NAME,
   FILTER_PROJECT_BY_IN_CITY,
   FILTER_PROJECT_BY_TAG_DISTRICT
} from "../actions/type.actions";

let initialState = {
   projects: [],
   project: null,
   isLoading: false,
}

const ProjectReducer = (state = initialState, actions) => {
   switch (actions.type) {
      case FETCH_PROJECT_LOADING:
         state.isLoading = true
         return { ...state }
      case FETCH_PROJECT_SUCCESS:
         state.projects = actions.payload
         state.isLoading = false
         return { ...state }
      case FETCH_PROJECT_FAILED:
         state.isLoading = false
         return { ...state }
      case FETCH_PROJECT_BY_NAME:
         state.isLoading = false
         state.project = actions.payload
         return { ...state }
      case DELETE_PROJECT_BY_ID:
         let indexNeedDelete = state.projects.findIndex(project => project._id === actions.payload)
         let result = [...state.projects.slice(0, indexNeedDelete),
         ...state.projects.slice(indexNeedDelete + 1)]
         return { ...state, projects: result }
      case FETCH_PROJECTS_BY_TAGNAME:
         state.projects = actions.payload
         state.isLoading = false
         return { ...state }
      case FILTER_PROJECT_BY_NAME:
         let filtedProjects = state.projects.filter(project => project.slugNameProject.includes(actions.payload))
         return { ...state, projects: filtedProjects }
      case FILTER_PROJECT_BY_IN_CITY:
         state.projects = actions.payload
         state.isLoading = false
         return { ...state }
      case FILTER_PROJECT_BY_TAG_DISTRICT:
         state.projects = actions.payload
         return { ...state, isLoading: false }
      default:
         return state
   }
}

export default ProjectReducer