const onScrollToggles = (pageYvalue) => {
   if (window.pageYOffset > pageYvalue) {
      return true
   }
   else return false
}
export default onScrollToggles