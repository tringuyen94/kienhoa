import ProjectServices from '../../services/projects.services'

import toast from "react-hot-toast"
import {
   DELETE_PROJECT_BY_ID, FETCH_PROJECTS_BY_TAGNAME,
   FETCH_PROJECT_BY_NAME, FETCH_PROJECT_FAILED,
   FETCH_PROJECT_LOADING, FETCH_PROJECT_SUCCESS,
   FILTER_PROJECT_BY_IN_CITY, FILTER_PROJECT_BY_NAME, FILTER_PROJECT_BY_TAG_DISTRICT
} from './type.actions'



//FETCH OR GET ACTIONS
export const fetchProjects = () => {
   return dispatch => {
      dispatch({ type: FETCH_PROJECT_LOADING })
      ProjectServices.fetchProjects()
         .then(res => {
            dispatch({ type: FETCH_PROJECT_SUCCESS, payload: res.data })
         })
         .catch(err => dispatch({ type: FETCH_PROJECT_FAILED }))
   }
}
export const fetchProjectByName = (slugNameProject) => {
   return dispatch => {
      dispatch({ type: FETCH_PROJECT_LOADING })
      ProjectServices.fetchProjectBySlugNameProject(slugNameProject)
         .then(res => {
            dispatch({ type: FETCH_PROJECT_BY_NAME, payload: res.data })
         })
         .catch(err => dispatch({ type: FETCH_PROJECT_FAILED }))
   }
}


export const fetchProjectsByTagName = (tagName) => {
   return dispatch => {
      dispatch({ type: FETCH_PROJECT_LOADING })
      ProjectServices.fetchProjectsByTagName(tagName)
         .then(res => {
            dispatch({ type: FETCH_PROJECTS_BY_TAGNAME, payload: res.data })
         })
         .catch(err => dispatch({ type: FETCH_PROJECT_FAILED }))
   }
}
//FILTER PROJECT
export const filterProjectByName = (nameCharacter) => {
   return dispatch => {
      dispatch({ type: FILTER_PROJECT_BY_NAME, payload: nameCharacter })
   }
}
export const filterProjectByInCity = (isInCity) => {
   return dispatch => {
      dispatch({ type: FETCH_PROJECT_LOADING })
      if (isInCity === 'true') {
         ProjectServices.fetchProjectByInCity(true)
            .then(res => dispatch({ type: FILTER_PROJECT_BY_IN_CITY, payload: res.data }))
            .catch(err => dispatch({ type: FETCH_PROJECT_FAILED }))
      }
      else ProjectServices.fetchProjectByInCity(false)
         .then(res => dispatch({ type: FILTER_PROJECT_BY_IN_CITY, payload: res.data }))
         .catch(err => dispatch({ type: FETCH_PROJECT_FAILED }))
   }
}
export const filterProjectByTagDistrict = (tagDistrict) => {
   return dispatch=>{
      dispatch({type:FETCH_PROJECT_LOADING})
      ProjectServices.fetchProjectByTagDistrict(tagDistrict)
         .then(res=>dispatch({type:FILTER_PROJECT_BY_TAG_DISTRICT,payload:res.data}))
         .catch(err=>dispatch({type:FETCH_PROJECT_FAILED}))
   }
}


//CREATE PROJECT
export const createProject = (token, data, history) => {
   ProjectServices.createProject(token, data)
      .then(res => {
         toast.success(res.data.message)
         history.push('/admin/projects')
      })
      .catch(err => toast.error(err.response.data.message))
}

//DELETE PROJECT
export const deleteProjectId = (token, projectId) => {
   return dispatch => {
      ProjectServices.deleteProjectById(token, projectId)
         .then(res => {
            dispatch({ type: DELETE_PROJECT_BY_ID, payload: projectId })
            toast.success(res.data.message)
         })
         .catch(err => toast.error(err.response.data.message))
   }
}