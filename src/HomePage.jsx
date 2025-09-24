import Header from './Header.jsx';
import Footer from './Footer.jsx';
import LandingArea from './LandingArea.jsx';
import Features from './Features.jsx';
import MoreFeatures from './MoreFeatures.jsx';

function HomePage() {

  return(
    <>
      <div className = "landing-area-background">
        <div className = "landing-content">
          <Header />
          <LandingArea />
        </div>
      </div>
      <div className="main-content">
        <Features />
        <MoreFeatures />
      </div>
      <Footer />
    </>
  );

}

export default HomePage;
