import { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from "./Components/Header.jsx"
import About from "./Components/About.jsx";
import Project from "./Components/Project.jsx";
import InteractiveBackground from "./Components/InteractiveBackground.jsx";
import './App.css'



function App() {
  const [page, setPage] = useState("about");

  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);

  // Scroll to top whenever page changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [page]);
  const renderPage = () => {
    switch (page) {
      case "about":
        return <About />;
      case "projects":
        return <Project />;
      default:
        return <About />;
    }
  }

  return (
    <div className='mainContainer'>
      <InteractiveBackground />
      <Header pageChange={setPage} page={page} />
      <div>{renderPage()}</div>
    </div>
  )
}


export default App
