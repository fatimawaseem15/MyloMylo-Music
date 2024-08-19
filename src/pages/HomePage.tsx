import FirstSection from '../components/FirstSection';
import About from '../components/About';
import Gallery from '../components/SongsSection';
import KeyFeatures from '../components/KeyFeatures';
import Packages from '../components/Packages';
import Services from '../components/Services';
// import ReviewCarousel from '../components/ReviewCarousel';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div>
      <FirstSection />
      <About />
      <Gallery />
      <KeyFeatures />
      <Packages />
      <Services />
      {/* <ReviewCarousel /> */}
      <Footer />
    
      </div>
  )
}

export default HomePage
