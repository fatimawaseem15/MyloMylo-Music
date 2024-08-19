// import Header from '../layout/Header';
// import story from '/story.png';
// import mstory from '/mstory.png';

// function About() {
//   return (
//     <div className='flex flex-col  bg-black'>
//       <Header />
//       <main className='flex-1 text-white flex flex-col items-center justify-center p-4'>
//         {/* Desktop Image */}
//         <img 
//           src={story} 
//           alt="story" 
//           className='hidden md:block mt-8 p-8' // Hide on small screens
//         />
        
//         {/* Mobile Content */}
//         <div className='block md:hidden text-center mt-16'>
//           <h2 className='text-2xl font-bold mb-4 mt-10'>
//             Our Story
//           </h2>
//           <p className='mb-10 text-md'>
//             At MyloMylo, we believe in the power of personalization to connect people and create lasting memories. Founded by a team of passionate designers and tech enthusiasts, our mission is to bring personalized, high-quality t-shirts to everyone. Our innovative technology allows us to craft unique designs that reflect your personal stories and style.
//           </p>
//           <img 
//             src={mstory} 
//             alt="mobile story" 
//             className='w-full mt-4'
//           />
//         </div>
//       </main>
//     </div>
//   );
// }

// export default About;
import React, { useState, useEffect } from 'react';
import Header from '../layout/Header';
import story from '/story.png';
import mstory from '/mstory.png';

const About: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMenuClick = () => {
    // Define your menu click handling logic here
    console.log('Menu clicked');
  };

  return (
    <div className='flex flex-col bg-black'>
      <Header isMobile={isMobile} onMenuClick={handleMenuClick} />
      <main className='flex-1 text-white flex flex-col items-center justify-center p-4'>
        {/* Desktop Image */}
        <img 
          src={story} 
          alt="story" 
          className='hidden md:block mt-8 p-8' // Hide on small screens
        />
        
        {/* Mobile Content */}
        <div className='block md:hidden text-center mt-16'>
          <h2 className='text-2xl font-bold mb-4 mt-10'>
            Our Story
          </h2>
          <p className='mb-10 text-md'>
            At MyloMylo, we believe in the power of personalization to connect people and create lasting memories. Founded by a team of passionate designers and tech enthusiasts, our mission is to bring personalized, high-quality t-shirts to everyone. Our innovative technology allows us to craft unique designs that reflect your personal stories and style.
          </p>
          <img 
            src={mstory} 
            alt="mobile story" 
            className='w-full mt-4'
          />
        </div>
      </main>
    </div>
  );
};

export default About;
