import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { MyExperience } from "./components/MyExperience";
import { MyPortifolio } from "./components/MyPortifolio";
import "./input.css";

function App() {

  return (
    <div className="max-sm:w-full max-sm:mx-0">
      <Header />
      <Home />
      <AboutMe />
      <MyExperience />
      <MyPortifolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
