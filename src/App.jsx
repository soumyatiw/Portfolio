import { useState } from 'react'
import Header from "./Components/Header.jsx"
import About from "./Components/About.jsx";
import Project from "./Components/Project.jsx";
import './App.css'



function App() {
  const [page, setPage] = useState("about"); 

  const renderPage = () => {
    switch (page) {
      case "about":
        return <About />;
      case "projects":
        return <Project />;
      default:
        return <About />;
    }}

  return (
    <div className='mainContainer'>
      <Header pageChange={setPage} page={page} />
      <div>{renderPage()}</div>
    </div>
  )
}


export default App
