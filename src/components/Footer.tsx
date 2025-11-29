import Link from 'next/link';
import Image from 'next/image';
import { 
  Mail, 
  MapPin, 
  Github, 
  Twitter, 
  Linkedin, 
  Globe 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 relative overflow-hidden">
      
      {/* Background Pattern (Subtle) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Branding & About */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
               {/* Logos */}
               <div className="bg-white p-1 rounded-full h-10 w-10 flex items-center justify-center">
                  <Image src="/images/iiserm.png" alt="IISER" width={32} height={32} className="object-contain" />
               </div>
               <div className="bg-white p-1 rounded-full h-10 w-10 flex items-center justify-center">
                  <Image src="/images/weclimb.png" alt="Lab" width={32} height={32} className="object-contain" />
               </div>
            </div>
            
            <div>
              <h3 className="text-white text-lg font-bold mb-1">WeCliMb</h3>
              <p className="text-sm text-slate-400">
                Weather and Climate Modelling Research Group
              </p>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed">
              Advancing the understanding of regional climate extremes through high-resolution modelling, data assimilation, and AI.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/research" className="hover:text-emerald-400 transition-colors">Research Areas</Link>
              </li>
              <li>
                <Link href="/people" className="hover:text-emerald-400 transition-colors">Our Team</Link>
              </li>
              <li>
                <Link href="/publications" className="hover:text-emerald-400 transition-colors">Publications</Link>
              </li>
              <li>
                <Link href="/teaching" className="hover:text-emerald-400 transition-colors">Teaching</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-emerald-400 transition-colors">Gallery</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Opportunities */}
          <div>
            <h3 className="text-white font-bold mb-4">Join Us</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/oppurtunities" className="hover:text-emerald-400 transition-colors">PhD Positions</Link>
              </li>
              <li>
                <Link href="/oppurtunities" className="hover:text-emerald-400 transition-colors">Post-Doctoral Fellowships</Link>
              </li>
              <li>
                <Link href="/oppurtunities" className="hover:text-emerald-400 transition-colors">Summer Internships</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                <span>
                  Academic Block-2, IISER Mohali,<br />
                  Sector 81, S.A.S. Nagar,<br />
                  Punjab 140306, INDIA.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                <a href="mailto:rajuattada@iisermohali.ac.in" className="hover:text-emerald-400 transition-colors">
                  rajuattada@iisermohali.ac.in
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 text-center md:text-left">
            &copy; {currentYear} Weather and Climate Modelling Group. All rights reserved.
          </p>
          
          {/* Social Icons (Placeholders for now) */}
          <div className="flex gap-4">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <span className="sr-only">GitHub</span>
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.iisermohali.ac.in/" target="_blank" className="text-slate-400 hover:text-white transition-colors">
              <span className="sr-only">IISER Website</span>
              <Globe className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;