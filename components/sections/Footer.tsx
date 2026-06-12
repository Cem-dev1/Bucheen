'use client';

export default function Footer() {
  return (
    <footer className="bg-bg-footer py-16 border-t border-brand/5">
      <div className="container mx-auto px-6 max-w-6xl grid grid-cols-2 md:grid-cols-5 gap-10">

        <div className="col-span-2 md:col-span-2 space-y-4">
          <h3 className="text-xl font-black text-dark-purple">
            <span className="text-[#684aac]">Bu</span>
            <span className="text-brand">cheen</span>
          </h3>
          <p className="text-text-muted text-xs leading-relaxed max-w-xs">
           The most accurate and simplest time tracking for all of you. and we have been serving for more than 4 years and have made you happy
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-bold text-brand">About Us</h4>
          <div className="flex flex-col space-y-2 text-xs text-text-muted">
            <a href="#" className="hover:text-brand transition-colors">Our people</a>
            <a href="#" className="hover:text-brand transition-colors">Our categories</a>
            <a href="#" className="hover:text-brand transition-colors">Contact us</a>
            <a href="#" className="hover:text-brand transition-colors">Testimonials</a>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-bold text-brand">Product</h4>
          <div className="flex flex-col space-y-2 text-xs text-text-muted">
            <a href="#" className="hover:text-brand transition-colors">Time Management</a>
            <a href="#" className="hover:text-brand transition-colors">Service</a>
            <a href="#" className="hover:text-brand transition-colors">Total Schedule</a>
          </div>
        </div>

        <div className="col-span-2 md:col-span-1 space-y-3">
          <h4 className="text-sm font-bold text-brand">Contact us</h4>
          <div className="flex flex-col space-y-2 text-xs text-text-muted">
            <span>📞 (021) 3258 4930 </span>
            <span>📧 Pokan@Hola.com</span>
            <span>📍 Sukabumi, Jawa Barat
Indonesia, IDN</span>
          </div>
        </div>

      </div>
    </footer>
  );
}