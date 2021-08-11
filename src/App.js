import { useState, useEffect } from "react"
import Header from "./layout/header"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./screens/home"
import Footer from "./layout/footer"
import ScrollToTop from "./components/ScrollToTop"
import onScrollToggles from "./utils/onScrollToggles"

const App = () => {
  const [displaySTTop, setDisplaySTTop] = useState(false)
  useEffect(() => {
    document.addEventListener('scroll', function (e) {
        setDisplaySTTop(onScrollToggles(200))
    })
  }, [])
  return (
    <Router>
      <Header />
      {displaySTTop && <ScrollToTop />}
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer />
    </Router>


  )
}

export default App