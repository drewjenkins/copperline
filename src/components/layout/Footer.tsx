import { Link } from 'react-router-dom';
import { Mail, MapPin, Globe, Users } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div>
              <div className="font-serif text-2xl text-stone-50 leading-none">Copperline</div>
              <div className="text-xs text-amber-600 tracking-widest uppercase">Coffee Roasters</div>
            </div>
            <p className="text-sm leading-relaxed text-stone-400 max-w-xs">
              Small-batch specialty coffee roasted with intention in Asheville, North Carolina. We source exceptional beans so you can experience coffee the way it was meant to be.
            </p>
            <div className="flex items-center gap-2 text-sm text-stone-500">
              <MapPin size={14} className="text-amber-700 flex-shrink-0" />
              <span>12 Copper Ridge Rd, Asheville, NC 28801</span>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" aria-label="Instagram" className="text-stone-500 hover:text-amber-600 transition-colors">
                <Globe size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="text-stone-500 hover:text-amber-600 transition-colors">
                <Users size={18} />
              </a>
              <a href="mailto:hello@copperlinecoffee.com" aria-label="Email" className="text-stone-500 hover:text-amber-600 transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-stone-50 tracking-wider uppercase">Shop</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/shop" className="text-stone-400 hover:text-stone-200 transition-colors">All Coffees</Link></li>
              <li><Link to="/shop?category=single-origin" className="text-stone-400 hover:text-stone-200 transition-colors">Single Origin</Link></li>
              <li><Link to="/shop?category=blend" className="text-stone-400 hover:text-stone-200 transition-colors">Blends</Link></li>
              <li><Link to="/shop?category=seasonal" className="text-stone-400 hover:text-stone-200 transition-colors">Seasonal</Link></li>
              <li><Link to="/shop?roast=light" className="text-stone-400 hover:text-stone-200 transition-colors">Light Roast</Link></li>
              <li><Link to="/shop?roast=dark" className="text-stone-400 hover:text-stone-200 transition-colors">Dark Roast</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-stone-50 tracking-wider uppercase">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="text-stone-400 hover:text-stone-200 transition-colors">Our Story</Link></li>
              <li><a href="#" className="text-stone-400 hover:text-stone-200 transition-colors">Sourcing Philosophy</a></li>
              <li><a href="#" className="text-stone-400 hover:text-stone-200 transition-colors">Sustainability</a></li>
              <li><a href="mailto:hello@copperlinecoffee.com" className="text-stone-400 hover:text-stone-200 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-stone-400 hover:text-stone-200 transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="text-stone-400 hover:text-stone-200 transition-colors">Returns</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-600">
          <p>&copy; {new Date().getFullYear()} Copperline Coffee Roasters. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-stone-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-stone-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
