'use client';

export default function FeatureOne() {
  return (
    <section className="bg-white py-16 md:py-24 relative overflow-hidden min-h-[500px] flex items-center">
      
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[445px] h-[409px] select-none pointer-events-none z-0 hidden sm:block">
        
        <div 
          className="absolute border-[4px] border-[#FEEEDB] rounded-full opacity-70"
          style={{
            width: '409px',
            height: '409px',
            left: '-102px',
            top: '0px', 
          }}
        />

        <div 
          className="absolute border-[4px] border-[#FEEEDB] rounded-full opacity-70"
          style={{
            width: '361px',
            height: '361px',
            left: '-18px',
            top: '25px', 
          }}
        />

        <div 
          className="absolute border-[4px] border-[#FEEEDB] rounded-full opacity-70"
          style={{
            width: '225px',
            height: '225px',
            left: '15px',
            top: '92px', 
          }}
        />
      </div>

      <div className="container mx-auto px-6 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 items-center relative z-10">
        <div className="relative flex items-center justify-center h-[250px] md:h-[400px]">
          <div className="w-4/5 h-4/5 bg-gradient-to-tr from-[#FFA085]/10 to-transparent rounded-3xl blur-2xl absolute" />
        </div>

        <div className="space-y-8 md:space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-dark-purple tracking-tight leading-tight md:max-w-xl">
            Find Match Now and <br />
            Develop Your Feelings
          </h2>
          
          <p className="text-text-muted text-sm md:text-base leading-relaxed opacity-90 max-w-lg font-medium">
            There are so many platforms from this Pokan to make a task manager manage all your time, the data needed is very useful, and we have it all to get you to be successful
          </p>
          
          <div className="pt-2">
            <button className="px-8 py-3.5 bg-brand text-white rounded-xl text-sm font-bold hover:bg-brand-dark transition-colors shadow-[0_8px_20px_rgba(255,114,94,0.15)] active:scale-95 whitespace-nowrap">
              Read More
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}