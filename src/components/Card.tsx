import React from 'react';
import play_icon from '/play_icon.png';

interface CardProps {
  imageSrc: string;
  name: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, name }) => {
  return (
    <div className="p-2 flex flex-col items-center">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-28 sm:h-48 md:h-48 lg:h-56 object-cover"
        />
      </div>
      <div className="flex items-center justify-between mt-2 w-full px-2">
        <p className="text-sm md:text-base lg:text-lg font-semibold truncate">{name}</p>
        <div className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white rounded-full bg-gray-800">
          <img src={play_icon} alt="Play" className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8" />
        </div>
      </div>
    </div>
  );
};

export default Card;
