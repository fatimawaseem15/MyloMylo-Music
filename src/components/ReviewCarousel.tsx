import React, { useState } from 'react';
import ReviewCard from './ReviewCard';
import review1 from '/review1.png';

interface Review {
  review: string;
  name: string;
  image: string;
}

const ReviewCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews: Review[] = [
    {
      review: 'The song created for our wedding was absolutely perfect. It captured our story beautifully!',
      name: 'Sarah & Mike',
      image: review1, // Replace with actual image paths
    },
    {
      review: 'This service is amazing! I am thoroughly impressed.',
      name: 'John Doe',
      image: review1,
    },
    {
      review: 'An excellent experience from start to finish. Highly recommended!',
      name: 'Jane Smith',
      image: review1,
    },
    // Add more reviews as needed
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full flex flex-col justify-center items-center overflow-hidden bg-gray-900 py-10 px-4">
      <h2 className="text-4xl font-bold text-white mb-6">This Is What Our Customers Say</h2>
      <p className="text-lg text-gray-400 mb-6 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis</p>
      <div className="relative w-full h-96">
        {reviews.map((review, index) => {
          let position: 'left' | 'center' | 'right' = 'center';
          if (index === (activeIndex - 1 + reviews.length) % reviews.length) {
            position = 'left';
          } else if (index === (activeIndex + 1) % reviews.length) {
            position = 'right';
          }
          return (
            <ReviewCard
              key={index}
              review={review.review}
              name={review.name}
              isActive={index === activeIndex}
              position={position}
              image={review.image}
            />
          );
        })}
      </div>
      <div className="flex mt-8">
        <button
          onClick={handlePrev}
          aria-label="Previous Review"
          className="p-4 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-transform transform hover:scale-110 mx-2"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          aria-label="Next Review"
          className=" p-4 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-transform transform hover:scale-110 mx-2"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ReviewCarousel;
