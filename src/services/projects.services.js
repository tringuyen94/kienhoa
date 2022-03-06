import restConnector from "./baseURL.services";

class ProjectServices {

   /**FETCH API */
   fetchProjects() {
      return restConnector({
         url: 'projects/fetch-projects',
         method: "GET"
      })
   }
   fetchProjectBySlugNameProject(slugNameProject) {
      return restConnector({
         url: `projects/fetch-project-by-slug-name-project/${slugNameProject}`,
         method: "GET"
      })
   }
   fetchProjectsByTagName(tagName) {
      return restConnector({
         url: `projects/fetch-projects-by-tag`,
         params: { tagName }
      })
   }
   fetchProjectByInCity(inCity) {
      return restConnector({
         url: `projects/fetch-projects-by-in-city`,
         params: { inCity }
      })
   }
   fetchProjectByTagDistrict(tagDistrict) {
      return restConnector({
         url: `projects/fetch-projects-by-tag-district`,
         params: { tagDistrict }
      })
   }


   /**POST API */
   createProject(token, data) {
      return restConnector({
         url: "projects/create-project",
         method: "POST",
         headers: { "Authentication": `Bearer ${token}` },
         data
      })
   }
   /**DELETE API */
   deleteProjectById(token, projectId) {
      return restConnector({
         url: `projects/delete-project-by-id/${projectId}`,
         method: "DELETE",
         headers: { "Authentication": `Bearer ${token}` },
      })
   }
   /**PUT API */
   updateProjectById(token, projectId, projectData) {
      return restConnector({
         url: `projects/update-project-by-id/${projectId}`,
         method: "PUT",
         headers: { "Authencitcation": `Bearer ${token}` },
         data: projectData
      })
   }
   updateProjectImagesById(token, projectId, projectImages) {
      return restConnector({
         url: `update-project-images-by-id/${projectId}`,
         method: "PUT",
         header: { "Authentication": `Bearer ${token}` },
         data: projectImages
      })
   }
}
export default new ProjectServices()