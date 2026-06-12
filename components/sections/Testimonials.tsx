'use client';

import React, { useRef } from 'react';

const reviews = [
  {
    name: 'Tasha Wijayanti',
    tag: 'Curug',
    text: 'This Bucheen is so cool, I found the partner I wanted. and its very easy to use and steady for bcheen. cheers and hopefully many other people can find their partner here'
  },
  {
    name: 'Sizuka engkol',
    tag: 'Indonesia',
    text: 'Very interesting services are provided to customers, access is very fast and we can also see the development of our partners. and the information provided is accurate and genuine. '
  },
  {
    name: 'Gundam gandim',
    tag: 'Bulgarian',
    text: 'Its crazy that this application can make me find my soul mate very easily and quickly. the information contained in this buceen is very accurate and really real, not a hoax'
  }
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    
    const offset = direction === 'left' ? -clientWidth : clientWidth;
    scrollRef.current.scrollTo({
      left: scrollLeft + offset,
      behavior: 'smooth'
    });
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 max-w-6xl space-y-12">
        
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-dark-purple tracking-tight leading-tight">
            What Our Customers <br /> Have To Say
          </h2>
          <p className="text-text-muted text-sm font-medium opacity-90">
            Review with our customers say with Bucheen.
          </p>
        </div>

        <div 
          ref={scrollRef}
          className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory no-scrollbar pb-4 -mx-6 px-6 md:mx-0 md:px-0"
        >
          {reviews.map((rev, index) => (
            <div 
                key={index} 
                  className={`min-w-[85vw] sm:min-w-[380px] md:min-w-0 snap-center bg-white p-8 rounded-[28px] 
                    ${index === 1 ? 'border-0 shadow-none' : 'border border-gray-100 shadow-[0_15px_40px_rgba(24,18,54,0.02)]'}
                    flex flex-col justify-between space-y-6 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(24,18,54,0.05)]`}
                >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 border border-gray-100 rounded-full flex items-center justify-center text-sm shadow-sm">
                    
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-dark-purple">{rev.name}</h4>
                    <span className="text-[11px] text-text-muted font-medium">{rev.tag}</span>
                  </div>
                </div>
                <p className="text-text-muted text-[13px] leading-relaxed font-medium text-left">
                  “{rev.text}”
                </p>
              </div>
            <div className="flex gap-0.4 pt-2">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className="w-5 h-5 text-[#FDC350] fill-current" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
        
       <div className="flex md:hidden items-center justify-center gap-4 pt-2">
          <button 
            onClick={() => scroll('left')}
            className="w-14 h-14 rounded-full border-[1.5px] border-[#FF725E] text-[#FF725E] flex items-center justify-center transition-all duration-300 hover:bg-[#FF725E] hover:text-white active:scale-95"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-14 h-14 rounded-full bg-[#FF725E] text-white flex items-center justify-center transition-all duration-300 hover:bg-[#E65F4C] active:scale-95"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}