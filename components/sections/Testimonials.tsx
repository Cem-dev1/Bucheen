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
              className="min-w-[85vw] sm:min-w-[380px] md:min-w-0 snap-center bg-white p-8 rounded-[28px] border border-gray-100 shadow-[0_15px_40px_rgba(24,18,54,0.02)] flex flex-col justify-between space-y-6 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(24,18,54,0.05)]"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-50 border border-gray-100 rounded-full flex items-center justify-center text-sm shadow-sm">
                    👤
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
              <div className="text-amber-400 text-xs tracking-wider pt-2 text-left">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex md:hidden items-center justify-center gap-4 pt-2">
          <button 
            onClick={() => scroll('left')}
            className="w-12 h-12 rounded-full border-2 border-brand text-brand bg-[#FFF5F5] flex items-center justify-center transition-all duration-300 hover:bg-brand hover:text-white active:scale-95 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-12 h-12 rounded-full border-2 border-brand text-brand bg-[#FFF5F5] flex items-center justify-center transition-all duration-300 hover:bg-brand hover:text-white active:scale-95 focus:outline-none"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}