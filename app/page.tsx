
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import FeatureOne from '@/components/sections/FeatureOne';
import FeatureTwo from '@/components/sections/FeatureTwo';
import PopularThisWeek from '@/components/sections/PopularThisWeek';
import Testimonials from '@/components/sections/Testimonials';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="bg-slate-50 font-sans text-slate-900 min-h-screen antialiased">
      <Header />
      <main className="space-y-20 md:space-y-28 pb-20">
        <Hero />
        <FeatureOne />
        <FeatureTwo />
        <PopularThisWeek />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}