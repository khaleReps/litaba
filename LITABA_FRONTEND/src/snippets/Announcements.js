// import { BeakerIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

function Announcements() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const announcements = [
    { date: "Monday, January 01, 2045", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { date: "Tuesday, January 02, 2045", content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { date: "Wednesday, January 03, 2045", content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." }
  ];

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? announcements.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex === announcements.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex items-center">
      <div className="w-1/12 bg-red-500 text-white flex-shrink-0">
        <p className='p-1'><strong>Breaking News:</strong></p>
      </div>
      <div className="w-1/12 flex items-center justify-center"> 
        <button onClick={handlePrev} className="p-3 mx-2 text-gray-500">
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
        <button onClick={handleNext} className="p-3 mx-2 text-gray-500">
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>
      <div className="w-7/12 flex items-center">
        <p className='p-1'><span className="mx-4 flex-grow">{announcements[currentIndex].content}</span></p>
      </div>
      <div className="w-3/12">
        <p className='p-1'>{announcements[currentIndex].date}</p>
      </div>
    </div>
  );
}

export default Announcements;
