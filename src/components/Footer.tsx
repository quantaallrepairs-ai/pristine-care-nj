import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <img src="/logo.png" alt="Pristine Care NJ Logo" className="h-8 w-auto mr-2" />
              <span className="text-brand-orange font-serif text-xl font-bold">Pristine Care NJ</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Dedicated to providing compassionate, high-quality behavioral support and community care services across New Jersey.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services#behavioral" className="text-gray-500 hover:text-brand-green text-sm transition-colors">Behavioral Support</Link></li>
              <li><Link href="/services#community" className="text-gray-500 hover:text-brand-green text-sm transition-colors">Community Care</Link></li>
              <li><Link href="/services#residential" className="text-gray-500 hover:text-brand-green text-sm transition-colors">Residential Services</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-500 hover:text-brand-green text-sm transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="text-gray-500 hover:text-brand-green text-sm transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-gray-500 hover:text-brand-green text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>New Jersey, USA</li>
              <li>info@pristinecarenj.com</li>
              <li>908-414-9880</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-50 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs">
            &copy; {new Date().getFullYear()} Pristine Care NJ. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-gray-600 text-xs">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-gray-600 text-xs">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
