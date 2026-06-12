'use client';

const steps = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M13.5 13.5L17.5 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    text: 'Find your dating relationship in app and waiting until you get a notification. have a good relationship its started'
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 18C10 18 17 12.5 17 8C17 4.5 14 2.5 10 2.5C6 2.5 3 4.5 3 8C3 12.5 10 18 10 18Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    text: 'Dating with benefits and you redefine the expectations of a perfect relationship with your partner'
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="6" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3 17C3 13.5 6 11 10 11C14 11 17 13.5 17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    text: 'Ideal relationship makes your online dating relationship run more smoothly using this app'
  }
];

export default function FeatureTwo() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-6xl">
   
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-dark-purple tracking-tight leading-tight">
            How It Works To Find <br />
            Your Relationship
          </h2>
        </div>

        <div className="space-y-8 max-w-2xl">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-5 group">
              <div className="w-10 h-10 shrink-0 bg-brand/10 text-brand rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <p className="text-text-muted text-sm md:text-base leading-relaxed pt-1">
                {step.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}