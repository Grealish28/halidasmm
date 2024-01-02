import { useState } from 'react';
import './App.css';
import Header from "./components/header/Header";
import Jobs from "./components/jobs/Jobs";
import Advantages from "./components/advantages/Advantages";
import Faqs from "./components/faq/Faq";
import Pricing from './components/pricing/Pricing';
import Interview from './components/interview/Interview';
import Loader from './components/loader/Loader';
import Reviews from './components/review/Reviews';
import Guests from './components/guests/Guests';
import Roadmap from './components/roadmap/Roadmap';
import Footer from "./components/footer/Footer"


function App() {
  const [showLoader, setShowLoader] = useState(true);
  setTimeout(()=>{
    setShowLoader(false);
  }, 4000)

  return (
    <>
      {showLoader ? <Loader /> : null}
      <Header id="header" />
      <Jobs />
      <Advantages />
      <Roadmap />
      <Interview />
      <Guests />
      <Reviews />
      <Pricing />
      <Faqs />
      <Footer />
    </>
  );
}

export default App;
