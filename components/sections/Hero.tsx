'use client';

import { Button } from '../common/Button';
import { JavarAvatar } from '../graphics/JavarAvatar';
import ShareylAvatar from '../graphics/ShareylAvatar';
import FausiahAvatar from '../graphics/FausiahAvatar';
import { JohnAvatar } from '../graphics/JohnAvatar';

export default function Hero() {
  return (
    <section className="bg-bg-warm pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        <div className="order-1 md:order-2 relative flex justify-center items-center w-full h-[500px] sm:h-[550px] md:h-[600px]">

          <div className="absolute w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] bg-[#FFA085]/10 rounded-full blur-3xl -z-10" />
              <div className="absolute left-1 md:left-1 top-1 w-[200px] sm:w-[240px] h-[400px] sm:h-[480px] 
                bg-gradient-to-br from-[#FFBDB3] via-[#FFB2A7] to-[#FF6B56] 
                rounded-[32px] p-3 shadow-[0_25px_50px_-12px_rgba(226,92,62,0.25)] 
                flex flex-col justify-end transform -rotate-1 transition-transform hover:rotate-0 duration-500 z-20">
                
                <div className="bg-white rounded-[24px] p-4 text-center shadow-md">
                  <h2 className="text-[#FFB9AF] text-base sm:text-lg font-bold leading-tight mb-2">
                    Find Your Dream<br />Partner Now
                  </h2>
                  <p className="text-gray-400 text-[10px] sm:text-[11px] leading-snug mb-4">
                    Find your partner now, all easy with us.
                  </p>
                  
                  <div className="flex justify-center gap-1 mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-200"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-200"></span>
                    <span className="w-4 h-1.5 rounded-full bg-[#FF7A59]"></span>
                  </div>

                  <div className="w-full bg-[#FF7A59] text-white text-xs font-semibold py-2.5 rounded-xl shadow-sm cursor-pointer text-center">
                    Get Started
                  </div>
                </div>
              </div>

          <div className="absolute right-4 md:right-6 top-16 sm:top-20 w-[200px] sm:w-[240px] h-[400px] sm:h-[480px] bg-white rounded-[32px] p-4 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] border-[6px] border-white flex flex-col justify-between transform rotate-12 transition-transform hover:rotate-10 duration-500 z-10 select-none">
            
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FFA085] flex items-center justify-center text-white text-xs font-bold">
                
                </div>
                <div>
                  <h3 className="text-gray-800 font-bold text-xs leading-none mb-0.5">Hello Naida</h3>
                  <p className="text-gray-400 text-[9px] sm:text-[10px]">Find Your Love Now</p>
                </div>
              </div>

             <div className="bg-[#FFC4B4]/70 rounded-2xl p-2 sm:p-2.5">
                <div className="bg-white rounded-xl p-1 sm:p-1.5 flex items-center justify-between mb-2 shadow-sm text-[10px] sm:text-[11px]">
                  <div className="flex-1 flex items-center justify-between px-1 sm:px-1.5 border-r border-gray-100 text-gray-700 font-medium">
                    <span>Male</span>
                    <span className="text-[8px] sm:text-[9px]">▼</span>
                  </div>
                  <div className="flex-1 flex items-center justify-between px-1 sm:px-1.5 text-gray-700 font-medium">
                    <span>Female</span>
                    <span className="text-[8px] sm:text-[9px]">▼</span>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-16 bg-[#FF7A59] text-white text-[10px] sm:text-[11px] font-semibold py-1.5 rounded-lg text-center">
                    Find Now
                  </div>
                </div>
              </div>


            <div className="relative w-full">
              <h4 className="text-gray-800 font-bold text-xs sm:text-sm mb-2">Event Datting</h4>
              
            
              <div className="flex gap-2 w-full overflow-hidden pb-1">

                <div className="flex-1 min-w-0">
                  <div className="w-full aspect-square bg-[#FFB9AF] rounded-2xl mb-1"></div>
                  <p className="text-gray-800 font-medium text-[9px] truncate">Wedding party</p>
                </div>

                <div className="flex-1 min-w-0 -mr-12">
                  <div className="w-full aspect-square bg-[#B3A3FF] rounded-l-2xl rounded-r-none mb-1"></div>
                  <p className="text-gray-800 font-medium text-[9px] truncate">Birthday party</p>
                </div>
                
              </div>
            </div>

          <div>
          <h4 className="text-gray-800 font-bold text-xs sm:text-sm mb-2">Most Popular</h4>
          <div className="flex gap-0"> 

            <div className="w-12 h-12 rounded-full border-2 border-white bg-[#B3A3FF] flex items-center justify-center overflow-hidden shadow-sm flex-shrink-0">
              <div className="scale-[0.25]">
                <JavarAvatar />
              </div>
            </div>

            <div className="w-12 h-12 rounded-full border-2 border-white bg-[#FFB9AF] flex items-center justify-center overflow-hidden shadow-sm flex-shrink-0">
              <div className="scale-[0.23]">
                <FausiahAvatar />
              </div>
            </div>

            <div className="w-12 h-12 rounded-full border-2 border-white bg-[#FFD492] flex items-center justify-center overflow-hidden shadow-sm flex-shrink-0">
              <div className="scale-[0.23]">
                <ShareylAvatar />
              </div>
            </div>

            <div className="w-12 h-12 rounded-full border-2 border-white bg-[#614AD2] flex items-center justify-center overflow-hidden shadow-sm flex-shrink-0">
              <div className="scale-[1.40]">
                <JohnAvatar />
              </div>
            </div>
          </div>

              </div>
            </div>

          </div>

        </div>

      <div className="order-2 md:order-1 space-y-6 flex flex-col items-center md:items-start text-center md:text-left z-10">
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-dark-purple leading-tight tracking-tight">
            Find <span className="text-brand">Match Now</span><br /> and Grow your Feelings
          </h1>
          
          <p className="text-text-body text-base md:text-lg max-w-md leading-relaxed">
            There are so many platforms from this Pokan to make a task manager manage all your time, the data needed is very useful. and we have it all to get you to be successful
          </p>

          <div className="w-full md:w-[440px] md:right-12 mx-auto relative">
            
            <div className="bg-white rounded-2xl p-4 md:pr-40 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-gray-100 flex items-center justify-around md:justify-center md:gap-10">
              <div className="flex items-center gap-2 cursor-pointer">
                <span className="text-dark-purple font-black text-sm">Male</span>
                <span className="text-[12px]">▼</span>
              </div>
              <div className="h-6 w-[2px] bg-gray-200" />
              <div className="flex items-center gap-2 cursor-pointer">
                <span className="text-dark-purple font-black text-sm">Female</span>
                <span className="text-[12px]">▼</span>
              </div>
            </div>
          <div className="mt-4 md:absolute md:right-2 md:top-2 md:bottom-2 md:mt-0">
            <Button 
              variant="solid" 
              className="w-1/2 md:w-auto md:h-full bg-brand text-white font-bold px-8 py-4 md:py-0 rounded-2xl md:rounded-xl shadow-lg transition-all"
            >
              Find Now
            </Button>
          </div>
          </div>
            
          </div>

      </div>
    </section>
  );
}