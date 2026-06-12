
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import FeatureOne from '@/components/sections/FeatureOne';
import FeatureTwo from '@/components/sections/FeatureTwo';
import PopularThisWeek from '@/components/sections/PopularThisWeek';
import Testimonials from '@/components/sections/Testimonials';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="bg-white font-sans text-slate-900 min-h-screen antialiased">
      <Header />
      <main className="pb-20">
        <div className="md:border-b md:border-gray-200">
          <Hero />
        </div>
        <div className="md:border-t md:border-gray-200">
         <FeatureOne />
        </div>
        <div className="md:border-t md:border-gray-200">
            <FeatureTwo />
        </div>
        <div className="md:border-t md:border-gray-200">
          <PopularThisWeek />
        </div>
        
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}