import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the styles

import SongImage1 from '/SongImage1.png'; 
import SongImage2 from '/SongImage2.png'; // Make sure the path is correct
import SongImage3 from '/SongImage3.png'; 
import SongImage4 from '/SongImage4.png'; 
import SongImage5 from '/SongImage5.png'; 
import SongImage6 from '/SongImage6.png'; 
import SongImage7 from '/SongImage7.png'; 
import SongImage8 from '/SongImage8.png'; 
import SongImage9 from '/SongImage9.png'; 
import SongImage10 from '/SongImage10.png';
import songplay_icon from '/songplay_icon.png';







const images = [
  { src: SongImage1, title: 'Birthday' },
  { src: SongImage2, title: 'Anniversary' },
  { src: SongImage3, title: 'Propose' },
  { src: SongImage4, title: 'Sample 11' },
  { src: SongImage5, title: 'Baby Welcome' },
  { src: SongImage6, title: 'Sad Genre' },
  { src: SongImage7, title: 'Meet & Greet' },
  { src: SongImage8, title: 'Forever' },
  { src: SongImage9, title: 'Sample 14' },
  { src: SongImage10, title: 'Soothing' },
];

const PlayIcon = () => (
  <svg
    className="w-8 h-8 md:w-10 md:h-10 text-white"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 3l14 9-14 9V3z" />
  </svg>
);

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-8 px-4 md:px-8 lg:px-16 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-10 text-center relative mt-4">
        Our Songs
        <span className="block h-1 bg-secondary w-30 mx-auto "></span>
      </h2>

      {/* Desktop Grid */}
      <div className="hidden lg:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full max-w-screen-xl px-10">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full object-fit rounded-t-lg"
            />
            <div className="flex justify-between items-center w-full pb-2 ">
              <p className="text-white font-semibold text-lg">{image.title}</p>
              <img src={songplay_icon} alt="songplay_icon" className='w-10 h-10 p-2' />
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="lg:hidden w-full max-w-screen-md mt-8 relative bg-gray-900 px-4">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={3000}
          transitionTime={500}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                className="absolute left-0 top-1/3 transform -translate-y-1/3 bg-transparent text-white p-2 focus:outline-none z-10"
                aria-label={label}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                className="absolute right-0 top-1/3 transform -translate-y-1/3 bg-transparent text-white p-2 focus:outline-none z-10 "
                aria-label={label}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )
          }
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            if (isSelected) {
              return (
                <li
                  className="inline-block mx-1 cursor-pointer "
                  key={index}
                  onClick={onClickHandler}
                  onKeyDown={onClickHandler}
                  value={index}
                  role="button"
                  tabIndex={0}
                  aria-label={`${label} ${index + 1}`}
                  title={`${label} ${index + 1}`}
                >
                  <div className="w-3 h-3 bg-secondary rounded-full border-2 border-white "></div>
                </li>
              );
            }
            return (
              <li
                className="inline-block mx-1 cursor-pointer "
                key={index}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                value={index}
                role="button"
                tabIndex={0}
                aria-label={`${label} ${index + 1}`}
                title={`${label} ${index + 1}`}
              >
                <div className="w-3 h-3 bg-transparent rounded-full border-2 border-white"></div>
              </li>
            );
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="mb-10 flex flex-col items-center gap-1 transition-transform transform hover:scale-105 relative"
            >
              <img
                src={image.src}
                alt={image.title}
                className=" w-full h-86 object-cover rounded-lg"
              />
               <div className="flex justify-between items-center w-full p-4">
                <p className="text-white font-semibold text-lg">{image.title}</p>
                
                <PlayIcon />
              </div>
            </div>
          ))}
        </Carousel >
      </div>
    </div>
  );
};

export default Gallery;
