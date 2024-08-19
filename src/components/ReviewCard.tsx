import React from 'react';

interface ReviewCardProps {
  review: string;
  name: string;
  isActive: boolean;
  position: 'left' | 'center' | 'right';
  image: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review, name, isActive, position, image }) => {
  const baseStyle = 'transition-transform transform p-6 rounded-lg shadow-xl bg-black text-white border border-gray-800 flex';
  const centerStyle = 'scale-105 z-30';
  const sideStyle = 'scale-90 z-20';

  let translateX = '0';
  let zIndex = 20;

  if (position === 'left') {
    translateX = '-33%';
    zIndex = isActive ? 30 : 20;
  } else if (position === 'right') {
    translateX = '33%';
    zIndex = isActive ? 30 : 20;
  }

  return (
    <div 
      className= {`${baseStyle} ${isActive ? centerStyle : sideStyle}`}
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: `translate(-50%, -50%) translateX(${translateX})`,
        zIndex: zIndex,
        width: '864px',
        height: '400px',
        transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
        borderRadius: '10px 0 0 0',
        overflow: 'hidden', // Ensure the image and text fit within the card
      }}
    >
      <img src={image} alt={`${name}'s review`} className="w-1/2 h-full object-cover" />
      <div className="flex flex-col justify-center p-6 w-1/2">
        <p className="mb-4 text-lg leading-relaxed">{`“${review}”`}</p>
        <p className="font-semibold text-lg">{name}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
