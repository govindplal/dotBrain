"use client"
import { useState } from 'react';

const Sidebar= () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${
        isOpen ? 'w-64' : 'w-16'
      } bg-gray-800 text-white h-screen transition-width duration-300 ease-in-out`}
    >
      <button
        className="p-4 focus:outline-none"
        onClick={toggleSidebar}
      >
        {isOpen ? '<' : '>'}
      </button>
      {isOpen && (
        <ul className="mt-4 space-y-2">
          <li className="p-2 hover:bg-gray-700">Note 1</li>
          <li className="p-2 hover:bg-gray-700">Note 2</li>
          <li className="p-2 hover:bg-gray-700">Note 3</li>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
