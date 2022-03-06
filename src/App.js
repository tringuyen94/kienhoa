import React, { useState, useEffect } from "react"
import Header from "./layout/header"
import { Route, Switch, useLocation } from "react-router-dom"
import Home from "./screens/home"
import Footer from "./layout/footer"
import ScrollToTop from "./components/ScrollToTop"
import onScrollToggles from "./utils/onScrollToggles"
import Blog from "./screens/blog"
import Introduce from "./screens/introduce"
import Constructor from "./screens/constructor"
import Interior from "./screens/interior"
import Contact from "./screens/contact"
import Projects from "./screens/projects"
import Dashboard from "./screens/dashboard"
import Login from "./screens/login"
import { Toaster } from "react-hot-toast"
import CreateBlog from "./screens/create-blog"
import Profile from "./screens/profile"
import EditBlog from './screens/edit-blog'
import CreateUser from "./screens/create-user"
import CreateProject from "./screens/create-project"
import EditableBlog from "./screens/edit-blog/editable.edit-blog"
import DetailBlog from "./screens/blog/detail.blog"
import EditProject from "./screens/edit-project/index"
import EditableProject from "./screens/edit-project/editable.edit-project"
import DetailProject from "./screens/projects/detail.projects"
import CreateProduct from "./screens/create-product"
import EditProduct from "./screens/edit-product"

const App = () => {
  const [displaySTTop, setDisplaySTTop] = useState(false)
  const location = useLocation()
  useEffect(() => {
    document.addEventListener('scroll', function (e) {
      setDisplaySTTop(onScrollToggles(200))
    })

  }, [])
  return (
    <React.Fragment>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      {location.pathname.startsWith('/admin') || location.pathname.startsWith('/login') ? null : <Header pathname={location.pathname} />}
      {displaySTTop && <ScrollToTop />}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/du-an" exact component={Projects} />
        <Route path="/du-an/:slugNameProject" exact component={DetailProject} />
        <Route path="/gioi-thieu" exact component={Introduce} />
        <Route path="/xay-dung-va-hoan-thien" exact component={Constructor} />
        <Route path="/noi-that" exact component={Interior} />
        <Route path="/lien-he" exact component={Contact} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/blog/detail/:titleSlug" exact component={DetailBlog} />
        <Route path="/login" exact component={Login} />
        <Route path="/admin" exact component={Dashboard} />
        <Route path="/admin/create-user" exact component={CreateUser} />
        <Route path="/admin/profile" exact component={Profile} />
        <Route path="/admin/projects" exact component={EditProject} />
        <Route path="/admin/products" exact component={EditProduct}/>
        <Route path='/admin/projects/:slugNameProject' exact component={EditableProject} />        <Route path='/admin/blogs' exact component={EditBlog} />
        <Route path='/admin/blogs/:titleSlug' exact component={EditableBlog} />
        <Route path="/admin/create-project" exact component={CreateProject} />
        <Route path="/admin/create-blog" exact component={CreateBlog} />
        <Route path='/admin/create-product'exact component={CreateProduct} />
      </Switch>
      {location.pathname.startsWith('/admin') || location.pathname.startsWith('/login') ? null : <Footer />}

    </React.Fragment>


  )
}

export default App