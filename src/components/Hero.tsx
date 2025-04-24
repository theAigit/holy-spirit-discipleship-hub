
import React from 'react';

interface HeroProps {
  title: string;
  backgroundImage: string;
  children?: React.ReactNode;
}

const Hero = ({ title, backgroundImage, children }: HeroProps) => {
  return (
    <div 
      className="relative bg-cover bg-center h-[50vh] min-h-[400px] flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default Hero;
