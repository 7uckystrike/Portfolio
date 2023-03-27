import "./App.css"
import Contact from "./components/Contact"
import AboutMe from "./components/AboutMe"
import Project from "./components/Project"
import Introduce from "./components/Introduce"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"


export default function App () {
  
  return (
    <Router>
      <div className="App">

<Routes>
  <Route path="/" element={<Introduce/>} />
  <Route path="/aboutme" element={<AboutMe/>} />
  <Route path="/project" element={<Project/>} />
  <Route path="/contact" element={<Contact />} />
</Routes>

      </div>
    </Router>
  )
}