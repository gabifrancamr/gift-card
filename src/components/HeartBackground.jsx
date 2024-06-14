import React from 'react';
import { IoIosHeart } from "react-icons/io";

const HeartBackground = () => {
  const heartPositions = [
    { top: '5%', left: '10%', size: '1.5rem' },
    { top: '10%', left: '50%', size: '2rem' },
    { top: '15%', left: '80%', size: '1.8rem' },
    { top: '20%', left: '20%', size: '1.6rem' },
    { top: '25%', left: '70%', size: '1.7rem' },
    { top: '30%', left: '40%', size: '1.5rem' },
    { top: '35%', left: '60%', size: '2rem' },
    { top: '40%', left: '10%', size: '1.8rem' },
    { top: '45%', left: '90%', size: '1.6rem' },
    { top: '50%', left: '30%', size: '1.7rem' },
    { top: '55%', left: '50%', size: '1.5rem' },
    { top: '60%', left: '80%', size: '2rem' },
    { top: '65%', left: '20%', size: '1.8rem' },
    { top: '70%', left: '70%', size: '1.6rem' },
    { top: '75%', left: '40%', size: '1.7rem' },
    { top: '80%', left: '60%', size: '1.5rem' },
    { top: '85%', left: '10%', size: '2rem' },
    { top: '90%', left: '90%', size: '1.8rem' },
    { top: '95%', left: '30%', size: '1.6rem' },
    { top: '5%', left: '70%', size: '1.7rem' },
    { top: '10%', left: '20%', size: '1.5rem' },
    { top: '15%', left: '90%', size: '2rem' },
    { top: '20%', left: '30%', size: '1.8rem' },
    { top: '25%', left: '50%', size: '1.6rem' },
    { top: '30%', left: '80%', size: '1.7rem' },
    { top: '35%', left: '20%', size: '1.5rem' },
    { top: '40%', left: '70%', size: '2rem' },
    { top: '45%', left: '40%', size: '1.8rem' },
    { top: '50%', left: '60%', size: '1.6rem' },
  ];

  return (
    <div className="absolute inset-0 z-1 pointer-events-none">
      {heartPositions.map((pos, index) => (
        <React.Fragment key={index}>
          <IoIosHeart
            className="absolute text-pink-500"
            style={{
              top: pos.top,
              left: pos.left,
              fontSize: pos.size,
              opacity: 0.7,
            }}
          />
          <IoIosHeart
            className="absolute text-pink-500"
            style={{
              top: pos.top,
              right: pos.left,
              fontSize: pos.size,
              opacity: 0.7,
            }}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default HeartBackground;


