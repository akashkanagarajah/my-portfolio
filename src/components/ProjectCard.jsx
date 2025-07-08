// src/components/ProjectCard.jsx
import { useState } from "react";

export default function ProjectCard({ title, stack, description, github, demo }) {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    console.log('Card clicked! Current flipped state:', flipped);
    setFlipped(!flipped);
  };

  return (
    <div 
      className="w-72 h-44 md:w-80 md:h-52 cursor-pointer perspective-1000"
      onClick={handleClick}
    >
      <div
        className={`relative w-full h-full duration-700 transform-style-preserve-3d transition-transform ${
          flipped ? "rotate-y-180-scale-110" : ""
        }`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Side - Title Only */}
        <div 
          className="absolute w-full h-full bg-white shadow-lg rounded-xl flex items-center justify-center text-xl font-bold backface-hidden border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-200"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {title}
        </div>

        {/* Back Side - Project Details */}
        <div 
          className="absolute w-full h-full bg-slate-900 text-white shadow-lg rounded-xl p-3 rotate-y-180 backface-hidden overflow-hidden"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div className="h-full flex flex-col">
            {/* Tech Stack Section */}
            <div className="mb-2">
              <h3 className="text-sm font-semibold mb-1 text-emerald-400">Tech Stack</h3>
              <div className="flex flex-wrap gap-1">
                {stack.split(', ').map((tech, index) => (
                  <span 
                    key={index} 
                    className="bg-slate-700 text-white px-1.5 py-0.5 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Summary Section */}
            <div className="flex-1 min-h-0">
              <h3 className="text-sm font-semibold mb-1 text-emerald-400">Summary</h3>
              <p className="text-xs text-gray-300 leading-relaxed overflow-y-auto max-h-16">
                {description}
              </p>
            </div>
            
            {/* Buttons Section */}
            <div className="flex gap-1 mt-2">
              {github && github !== "#" && (
                <a 
                  href={github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-emerald-600 text-white px-2 py-1 rounded text-xs flex-1 text-center hover:bg-emerald-500 transition-all duration-200"
                  style={{
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = 'none';
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  GitHub
                </a>
              )}
              {demo && demo !== "#" && (
                <a 
                  href={demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-2 py-1 rounded text-xs flex-1 text-center hover:bg-blue-500 transition-all duration-200"
                  style={{
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = 'none';
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}