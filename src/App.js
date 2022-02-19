import "./App.css";
import Cateogory from "./components/Cateogories/Cateogory";
import Cities from "./components/Cities/Cities";
import Footer from "./components/Footer/Footer";

import Internship from "./components/Internships/Internship";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/SearchBar/Search";
import Slider from "./components/Slider/Slider";
import Training from "./components/Training/Training";

function App() {
  return (
    <div>
      <Navbar />
      <Search />
      <Slider />
      <Internship
        title="Internships"
        subtitle="Apply to 10,000+ internships for free"
        word="internships"
        href="https://internshala.com/internships"
      />
      <Cities />
      <Cateogory />
      <Internship
        title="Internshala Trainings"
        subtitle="Learn new-age skills on the go"
        word="trainings"
        href="https://trainings.internshala.com/?utm_source=is_web_IS-home-midsection_web_all"
      />
      <Training />

      <Footer />
    </div>
  );
}

export default App;
