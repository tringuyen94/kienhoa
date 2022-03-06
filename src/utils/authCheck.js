const authCheck = ()=>{
   let authentication  = JSON.parse(localStorage.getItem('token'))
   return authentication
}

export default authCheck