import  { useState, useEffect } from 'react';
import logo from '/logo.png';
import { FiMenu } from "react-icons/fi";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import GetStartedForm from '../pages/GetStartedForm'; // Import the form component

import bg1 from '/bg1.png';
import bg2 from '/bg2.png';
import bg3 from '/bg3.png';
import bg4 from '/bg4.png';
import bg5 from '/bg5.png';
import bg6 from '/bg6.png';
import mbg1 from '/mbg1.png';
import mbg2 from '/mbg2.png';
import mbg3 from '/mbg3.png';
import mbg4 from '/mbg4.png';
import mbg5 from '/mbg5.png';
import mbg6 from '/mbg6.png';

const Deskbg = [bg1, bg2, bg3, bg4, bg5, bg6];
const Mobilebg = [mbg1, mbg2, mbg3, mbg4, mbg5, mbg6];

const slideTexts = [
  {
    heading: <>Planning a <span className='text-secondary'>wedding?</span> Make it unforgettable with a <span className='text-secondary'>personalized song.</span></>,
    subtext: "Create unforgettable memories with custom-made music tailored just for you.",
  },
  {
    heading: <>Welcoming a <span className='text-secondary'>baby?</span> commemorate with a <span className='text-secondary'>personalized lullaby.</span></>,
    subtext: "Create unforgettable memories with custom-made music tailored just for you.",
  },
  {
    heading: <>organizing a <span className='text-secondary'>birthday? </span> give the gift of a<span className='text-secondary'> custom song.</span></>,
    subtext: "Create unforgettable memories with custom-made music tailored just for you.",
  },
  {
    heading: <>Celebrate your <span className='text-secondary'>Anniversary?</span> with a song just made<span className='text-secondary'> for you.</span></>,
    subtext: "Create unforgettable memories with custom-made music tailored just for you.",
  },
  {
    heading: <>Need a unique <span className='text-secondary'>gift? </span>create a custom song  <span className='text-secondary'>for any occassion.</span></>,
    subtext: "Create unforgettable memories with custom-made music tailored just for you.",
  },
  {
    heading: <> <span className='text-secondary'>Graduating?   </span> celebrate with a song that marks <span className='text-secondary' >the milestone. </span></>,
    subtext: "Create unforgettable memories with custom-made music tailored just for you.",
  },
];

function FirstSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % Deskbg.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleGetStartedClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative w-full h-screen overflow-x-hidden">
      {isModalOpen && <GetStartedForm onClose={handleCloseModal} />}
      
      {/* Mobile Layout */}
      <div
        className="h-screen absolute inset-0 flex flex-col items-center justify-start pt-4 block lg:hidden bg-center bg-cover"
        style={{ backgroundImage: `url(${Mobilebg[currentSlide]})` }}
      >
        {/* Header */}
        <header className="w-full bg-transparent flex items-center justify-between px-4">
          <div className="flex items-center ml-10">
            {/* Logo Image */}
            <img src={logo} alt="logo" className="w-24 h-18 text-white" />
          </div>
          <div className="flex items-center">
            {/* Mobile Menu Icon */}
            <FiMenu className="text-white w-10 h-10 mb-4" />
          </div>
        </header>

        {/* Main Content */}
        <div className="flex flex-col items-center mt-10 px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4 mt-6 px-4">
            {slideTexts[currentSlide].heading}
          </h1>
          <p className="text-base text-white mb-4 mt-4">
            {slideTexts[currentSlide].subtext}
          </p>
          <button
            className="w-40 mt-4 bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
            onClick={handleGetStartedClick}
          >
            Get Started
          </button>
          <div className="flex justify-center space-x-2 mt-10">
            {Mobilebg.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 border border-white rounded-full ${index === currentSlide ? 'bg-secondary' : 'bg-transparent'}`}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Tablet and Desktop Layout */}
      <div
        className="relative hidden lg:flex lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center lg:pl-32 lg:pt-12 bg-center bg-cover bg-no-repeat h-screen"
        style={{ backgroundImage: `url(${Deskbg[currentSlide]})` }}
      >
        {/* Header */}
        <header className="absolute top-0 left-0 w-full bg-transparent flex items-center p-4">
          <div className="container mx-auto flex items-center">
            <div className="flex items-center">
              {/* Logo Image */}
              <img src={logo} alt="logo" className="w-24 h-18 ml-24" />
            </div>
            <div className="flex ml-auto">
              {/* Desktop Menu Icon */}
              <FiMenu className="w-8 h-8 text-white" />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="container flex flex-col justify-center gap-4 text-center lg:text-left ">
          <h1 className="text-5xl sm:text-4xl lg:text-4xl font-bold text-white mb-4 mt-10 sm:mt-12 lg:mt-14">
            {slideTexts[currentSlide].heading}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-white mb-4">
            {slideTexts[currentSlide].subtext}
          </p>
          <button
            className="w-32 sm:w-40 bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
            onClick={handleGetStartedClick}
          >
            Get Started
          </button>
          <div className="flex justify-center lg:justify-start space-x-2">
            {Deskbg.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 border border-white rounded-full ${index === currentSlide ? 'bg-secondary' : 'bg-transparent'}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
