import "./App.css"
import Header from "./components/Header"
import Introduce from "./components/Introduce"
import Skill from "./components/Skill"
import Project from "./components/Project"
import Footer from "./components/Footer"

const App = () => {

  return (
    <div className="App">
      <Header />
      <Introduce />
      <Skill />
      <Project />
      <Footer />
    </div>
  )
}

export default App