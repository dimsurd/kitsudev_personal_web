import "./App.css";
import Navbar from "./components/dumb/navbar";
import HeroSection from "./components/dumb/heroSection";
import SkillSet from "./components/dumb/skillSet";
import About from "./components/dumb/about";
import SocialMedia from "./components/dumb/socialMedia";
import Footer from "./components/dumb/footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <SkillSet />
      <SocialMedia />
      <Footer />
    </>
  );
}

export default App;
