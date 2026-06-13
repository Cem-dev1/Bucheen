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
         
      <div className="absolute inset-0 z-0 pointer-events-none md:hidden overflow-visible">
          <div className="absolute top-[60%] -left-10">
            <svg width="258" height="282" viewBox="0 0 258 282" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.7" d="M92.3486 1.37402C169.099 1.37423 231.323 63.7278 231.323 140.651C231.323 217.575 169.099 279.929 92.3486 279.929C15.5979 279.929 -46.6259 217.575 -46.626 140.651C-46.626 63.7277 15.5979 1.37402 92.3486 1.37402Z" stroke="#FEEEDB" stroke-width="2.74739"/>
              <path opacity="0.7" d="M133.526 18.5686C201.18 18.5686 256.03 73.5319 256.03 141.339C256.03 209.146 201.18 264.11 133.526 264.11C65.8722 264.11 11.0232 209.146 11.0232 141.339C11.0232 73.5319 65.8722 18.5687 133.526 18.5686Z" stroke="#FEEEDB" stroke-width="2.74739"/>
              <path opacity="0.7" d="M109.506 69.4646C151.386 69.4648 185.341 103.488 185.341 145.466C185.341 187.443 151.386 221.467 109.506 221.468C67.6264 221.468 33.6711 187.443 33.6711 145.466C33.6713 103.488 67.6265 69.4646 109.506 69.4646Z" stroke="#FEEEDB" stroke-width="2.74739"/>
            </svg>
          </div>
          <div className="absolute top-[90%] right-[0px]">
            <svg width="194" height="210" viewBox="0 0 194 210" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.7" d="M104.503 1.37402C161.457 1.37402 207.633 47.6444 207.633 104.729C207.633 161.813 161.457 208.084 104.503 208.084C47.549 208.084 1.37402 161.813 1.37402 104.729C1.37424 47.6445 47.5491 1.37423 104.503 1.37402Z" stroke="#FEEEDB" stroke-width="2.74739"/>
              <path opacity="0.7" d="M135.165 14.1771C185.345 14.1773 226.03 54.9455 226.03 105.242C226.03 155.537 185.345 196.305 135.165 196.305C84.9843 196.305 44.2998 155.538 44.2996 105.242C44.2996 54.9454 84.9841 14.1771 135.165 14.1771Z" stroke="#FEEEDB" stroke-width="2.74739"/>
              <path opacity="0.7" d="M117.279 52.0743C148.268 52.0743 173.395 77.2504 173.395 108.314C173.395 139.377 148.268 164.554 117.279 164.554C86.2896 164.554 61.1633 139.377 61.1633 108.314C61.1636 77.2506 86.2897 52.0745 117.279 52.0743Z" stroke="#FEEEDB" stroke-width="2.74739"/>
            </svg>
          </div>
          <div className="absolute bottom-[-50%] left-0">
            <svg width="124" height="137" viewBox="0 0 124 137" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.7" d="M43.2881 1.37402C80.2407 1.37424 110.202 31.3959 110.202 68.4355C110.202 105.475 80.2405 135.496 43.2881 135.496C6.33545 135.496 -23.6257 105.475 -23.626 68.4355C-23.626 31.3958 6.3353 1.37402 43.2881 1.37402Z" stroke="#FEEEDB" stroke-width="2.74739"/>
              <path opacity="0.7" d="M63.3232 9.74017C95.8498 9.74017 122.223 36.1655 122.223 68.7695C122.223 101.374 95.8499 127.8 63.3232 127.8C30.7966 127.8 4.42383 101.374 4.42383 68.7695C4.42398 36.1655 30.7967 9.7402 63.3232 9.74017Z" stroke="#FEEEDB" stroke-width="2.74739"/>
              <path opacity="0.7" d="M51.6357 34.5041C71.6217 34.5041 87.829 50.7413 87.8291 70.7775C87.8291 90.8139 71.6217 107.052 51.6357 107.052C31.6498 107.052 15.4434 90.8138 15.4434 70.7775C15.4435 50.7413 31.6499 34.5042 51.6357 34.5041Z" stroke="#FEEEDB" stroke-width="2.74739"/>
            </svg>
          </div>
        </div>

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

          <div className="relative mt-4">
              <h4 className="text-gray-800 font-bold text-xs sm:text-sm mb-2">Most Popular</h4>
              
              <div className="flex gap-1"> 
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white bg-[#B3A3FF] flex items-center justify-center overflow-hidden shadow-sm flex-shrink-0">
                  <div className="scale-[0.25]"><JavarAvatar /></div>
                </div>

                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white bg-[#FFB9AF] flex items-center justify-center overflow-hidden shadow-sm flex-shrink-0">
                  <div className="scale-[0.23]"><FausiahAvatar /></div>
                </div>

                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white bg-[#FFD492] flex items-center justify-center overflow-hidden shadow-sm flex-shrink-0">
                  <div className="scale-[0.23]"><ShareylAvatar /></div>
                </div>

                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white bg-[#614AD2] flex items-center justify-center overflow-hidden shadow-sm flex-shrink-0">
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