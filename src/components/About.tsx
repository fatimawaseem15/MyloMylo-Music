import React from 'react';
// import AboutImage from '/About.png';
import key1 from '/key1.png';
import aboutblack from '/aboutblack.png';

const About: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* About Section */}
      <div
        className="relative flex items-end justify-end bg-cover bg-center"
        style={{ backgroundImage: "url('/About.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <img
            src={aboutblack}
            alt="aboutblack.png"
            className="w-full object-cover opacity-70 md:mt-16"
            style={{ height: '400px' }}
          />
          <div className="absolute text-white p-4 md:p-6 lg:p-8 flex flex-col items-center justify-center inset-0 md:mt-16">
            <h2 className="text-3xl md:text-3xl lg:text-3xl font-bold mb-4 text-center">
              About MyloMylo
            </h2>
            <p className="text-xl md:text-xl lg:text-xl text-center md:text-left lg:text-left mx-4 lg:mx-32">
              At MyloMylo, we believe in the power of music to make moments magical. Whether it's a birthday, wedding, or any special occasion, we create personalized songs that tell your unique story.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-gray-700 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center text-white">
            How It Works
          </h2>
          <h6 className="text-sm mb-6 text-center text-white">
            Step-by-Step Process:
          </h6>
          <div className="flex flex-col gap-4 md:gap-6 lg:flex-row lg:gap-8 sm:py-4">
            {[{
              title: 'Tell Us About Your Occasion',
              description: 'Choose the type of occasion and share your story.',
            }, {
              title: 'Select Your Preferences',
              description: 'Pick your preferred genre, style, and instruments.',
            }, {
              title: 'Customize Your Song',
              description: 'Add special message or request.',
            }, {
              title: 'Place Your Order',
              description: 'Choose your package and proceed to payment.',
            }, {
              title: 'Receive Your Song',
              description: 'Get your personalized song delivered digitally or on a physical CD.',
            }].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 lg:flex-row lg:items-start lg:gap-4 text-center lg:text-left"
              >
                <img
                  src={key1}
                  alt={`Step ${index + 1}`}
                  className="w-8 h-8 mt-6 lg:mt-1 object-cover"
                  />
                <div>
                  <h3 className="text-md text-white font-semibold ">{item.title}</h3>
                  <p className="text-sm text-white">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
