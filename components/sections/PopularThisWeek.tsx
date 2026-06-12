'use client';

import React, { useRef, useState, useEffect } from 'react';
import { JavarAvatar } from '../graphics/JavarAvatar';
import FausiahAvatar from '../graphics/FausiahAvatar';
import ShareylAvatar from '../graphics/ShareylAvatar';

const users = [
  {
    id: 'javar',
    name: 'Javar Saripun',
    text: 'A man who is ideal for all women. Javar is very handsome and attractive with a very friendly and kind nature. Javar is also a person who excels in the field of music.',
    bgTop: 'bg-[#FCE3DE]',
    transform: 'md:translate-y-0'
  },
  {
    id: 'fausiah',
    name: 'Fausiah Fera',
    text: 'Fera is a student from one of the famous universities in Tokyo and she is a very famous and very beautiful woman.',
    bgTop: 'bg-[#B3A3FF]',
    transform: 'md:translate-y-8'
  },
  {
    id: 'shrerly',
    name: 'Shreryl Olap',
    text: 'Olap is a very sweet woman with curly and blonde hair which makes her very beautiful and sweet. He works in the field of music, which is famous in Indonesia.',
    bgTop: 'bg-[#FFD492]',
    transform: 'md:translate-y-16'
  }
];

export default function PopularThisWeek() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const index = Math.round(scrollLeft / clientWidth);
    setActiveIndex(index);
  };

  return (
    
    <section className="bg-bg-warm pt-16 pb-32 md:pb-48">
      <div className="container mx-auto px-6 max-w-6xl space-y-12">
        
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-dark-purple tracking-tight">
            Most Popular In This Week
          </h2>
          <p className="text-text-muted text-sm leading-relaxed font-medium opacity-80">
            There are so many platforms from this Pokan to make a task manager manage all your time, the data needed is very useful. and we have it all to get you to be successful
          </p>
        </div>
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-3 md:items-start justify-start md:justify-center overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar pb-24 px-6 md:px-0 gap-6 md:gap-4"
        >
          {users.map((user, index) => (
        <div 
          key={user.id} 
          className={`relative flex-shrink-0 w-[85vw] md:w-full h-[521px] snap-start 
            bg-white ${user.id === 'javar' ? 'md:bg-transparent' : 'md:bg-white'}
            rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(24,18,54,0.03)] transition-all duration-300 hover:shadow-[0_30px_60px_rgba(24,18,54,0.07)] flex flex-col
            ${index === 1 ? 'md:translate-y-16' : ''} 
            ${index === 2 ? 'md:translate-y-32' : ''}`}
        >
          <div className={`h-[45%] ${user.bgTop} flex items-end justify-center relative overflow-hidden pt-6`}>
            {user.id === 'javar' && <JavarAvatar />}
            {user.id === 'fausiah' && <FausiahAvatar />}
            {user.id === 'shrerly' && <ShareylAvatar />}
          </div>

          <div className={`p-8 h-[55%] flex flex-col justify-start space-y-4 rounded-b-[32px] 
            bg-white ${user.id === 'javar' ? 'md:bg-transparent' : 'md:bg-white'}
          `}>
            <h3 className="text-2xl font-black text-dark-purple tracking-tight">
              {user.name}
            </h3>
            <p className="text-text-muted text-sm leading-relaxed font-medium opacity-90 line-clamp-4">
              {user.text}
            </p>
          </div>
        </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-2 md:hidden pt-2">
          {users.map((_, index) => (
            <span
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index 
                  ? 'w-6 bg-brand' 
                  : 'w-2 bg-dark-purple/20'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}