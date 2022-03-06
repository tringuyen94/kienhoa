import restConnector from "./baseURL.services";

class PostServices {
   /**FETCH APIS */
   fetchTags() {
      return restConnector({
         url: 'posts/get-tags',
         method: "GET",
      })
   }
   fetchPosts() {
      return restConnector({
         url: `posts/get-posts`,
         method: "GET"
      })
   }
   fetchPostByTitle(titleSlug) {
      return restConnector({
         url: `posts/get-post-by-title/${titleSlug}`,
         method: "GET"
      })
   }
   getPostsByTag(tagName) {
      return restConnector({
         params: { tagName },
         url: `posts/get-posts-by-tag`,
         method: "GET"
      })
   }
   /** POST API */
   createPost(token, formData) {
      return restConnector({
         url: `posts/create-post`,
         method: "POST",
         data: formData,
         headers: { "Authentication": `Bearer ${token}` }
      })
   }
   sortPostByTime() {
      return restConnector({
         url: "posts/sort-tags-sorted-by-time",
         method: "GET"
      })
   }
   /** PUT API */
   updatePostById(postId, updatedData) {
      return restConnector({
         url: `posts/update-post-by-id/${postId}`,
         method: "PUT",
         data: updatedData
      })
   }
   updatePostThumbById(postId, postThumb) {
      return restConnector({
         url: `posts/update-postthumb-by-id/${postId}`,
         method: "PUT",
         data: postThumb
      })
   }
   /** DELETE API */
   deletePostById(token,postId) {
      return restConnector({
         url: `posts/delete-post-by-id/${postId}`,
         method: "DELETE",
         headers: { "Authentication": `Bearer ${token}` }
      })
   }

}
export default new PostServices()