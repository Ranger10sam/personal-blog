import About from "./components/About"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import DisplayMode from "./components/DisplayMode"


function App() {
  return (
    <>
      <div>
        <Hero/>
        <DisplayMode/>
        <About/>
        <Projects/>
      </div>
    </>
  )
}

export default App