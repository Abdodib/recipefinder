import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-orange-400 mt-10 justify-center items-center text-brand-dark" >
      <div className="max-w-6xl mx-auto py-6 px-4 flex flex-col md:flex-row items-center justify-between">
        
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-semibold text-brown-800">Recipes</div>
        </div>
        
        <div className="mt-4 md:mt-0 text-brown-700">
          © 2025 - Developed by{' '}
          <span className="text-orange-500 font-medium">Abdelalim</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
