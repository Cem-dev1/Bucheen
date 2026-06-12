'use client';

export default function Footer() {
  return (
    <footer className="bg-bg-footer py-16 border-t border-brand/5">
      <div className="container mx-auto px-6 max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-10">

        <div className="space-y-4">
          <h3 className="text-xl font-black text-dark-purple">
             <span className="text-[#8B5CF6]">Bu</span>
            <span className="text-brand">cheen</span>
          </h3>
          <p className="text-text-muted text-xs leading-relaxed max-w-xs">
            The most trusted and simplest online dating platform of you, matches have been saving standard from a same platform made from happy.
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-bold text-brand">About Us</h4>
          <div className="flex flex-col space-y-2 text-xs text-text-muted">
            <a href="#" className="hover:text-brand transition-colors">Our people</a>
            <a href="#" className="hover:text-brand transition-colors">Our categories</a>
            <a href="#" className="hover:text-brand transition-colors">Contact us</a>
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

        <div className="space-y-3">
          <h4 className="text-sm font-bold text-brand">Contact us</h4>
          <div className="flex flex-col space-y-2 text-xs text-text-muted">
            <span>📞 (247) 5832-2831</span>
            <span>📧 Polong@info.com</span>
            <span>📍 Sukabumi, West Java</span>
          </div>
        </div>

      </div>
    </footer>
  );
}