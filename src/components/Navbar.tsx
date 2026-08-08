'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X, Plane, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';
import { useAuth } from '@/lib/auth';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Packages', href: '/packages' },
  { label: 'Blogs', href: '/blogs' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();

  const isActive = (href: string) => {
    const baseHref = href.split('?')[0];
    if (baseHref === '/') return pathname === '/';
    return pathname.startsWith(baseHref);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? 'glass shadow-premium' : 'bg-white'}`}>
      <div className="container-x flex items-center justify-between md:items-stretch">
        
        {/* LOGO - Shared Left Side */}
        <Link href="/" className="flex items-center shrink-0 mr-6 md:mr-24 -ml-2">
          <Image src="/logo.png" alt="The B2B Holidays" width={300} height={100} className="h-16 md:h-24 w-auto scale-110 md:scale-125 origin-left" priority />
        </Link>

        {/* RIGHT COLUMN - Top Bar & Main Nav */}
        <div className="flex-1 flex flex-col justify-center">
          
          {/* TOP BAR (Hidden on Mobile) */}
          <div className="hidden md:flex items-center justify-end text-[13px] font-medium py-2 border-b border-white text-slate-600 gap-6">
            <a href="mailto:info@theb2bholidays.com" className="flex items-center gap-2 hover:text-primary transition">
              <Mail size={14} className="text-primary" /> info@theb2bholidays.com
            </a>
            <a href="tel:+917428300246" className="flex items-center gap-2 hover:text-primary transition">
              <Phone size={14} className="text-primary" /> +91 74283 00246
            </a>
            <a href="tel:+917428300248" className="flex items-center gap-2 hover:text-primary transition">
              <Phone size={14} className="text-primary" /> +91 74283 00248
            </a>
          </div>

          {/* MAIN NAV */}
          <nav className="flex items-center justify-end md:justify-end md:gap-12 py-2">
            <div className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-700">
          {links.map(l => (
            <Link key={l.label} href={l.href} className={`transition font-semibold ${isActive(l.href) ? 'text-primary border-b-2 border-primary py-4' : 'hover:text-primary py-4 border-b-2 border-transparent'}`}>{l.label}</Link>
          ))}

          <div className="relative group py-4 -my-4">
            <button className="flex items-center gap-1 hover:text-primary transition font-semibold">
              Info <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <div className="absolute top-full right-0 mt-1 w-72 bg-white border border-slate-100 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col overflow-hidden z-50 p-2">
              <a href="mailto:info@theb2bholidays.com" className="px-4 py-3 hover:bg-slate-50 transition text-sm text-slate-700 flex items-center gap-3 rounded-lg">
                <Mail size={16} className="text-primary shrink-0" /> info@theb2bholidays.com
              </a>
              <a href="tel:+917428300246" className="px-4 py-3 hover:bg-slate-50 transition text-sm text-slate-700 flex items-center gap-3 rounded-lg">
                <Phone size={16} className="text-primary shrink-0" /> +91 74283 00246
              </a>
              <a href="https://www.google.com/maps/place/The+Iconic+Corenthum/@28.6290602,77.3610363,15.68z/data=!4m15!1m8!3m7!1s0x390ce54e53e93a5f:0x98f7987d5778ab91!2s41,+Block+A,+Industrial+Area,+Sector+62,+Noida,+Uttar+Pradesh+201309!3b1!8m2!3d28.62901!4d77.3644551!16s%2Fg%2F11h4kcs9dw!3m5!1s0x390ce5447d350e9f:0x4beba507fa3f455b!8m2!3d28.6267113!4d77.3737679!16s%2Fg%2F11cls77vbf?entry=ttu&g_ep=EgoyMDI2MDgwNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="px-4 py-3 hover:bg-slate-50 transition text-sm text-slate-700 flex items-start gap-3 rounded-lg leading-relaxed">
                <MapPin size={16} className="text-primary shrink-0 mt-0.5" /> 
                <span>The Corenthum Iconic Tower C, 5th Floor, C 23, Near Noida Electronic City Metro Station Gate No.3, Noida 62, 201301</span>
              </a>
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          {!user || user.role !== 'admin' ? (
            <Link href="/enquiry" className="btn-primary py-2 px-5 text-sm rounded-xl font-bold shadow-sm hover:shadow-md transition-all">Send Enquiry</Link>
          ) : null}
          {user && (
            <>

              {user.role === 'admin' && (
                <Link href="/admin" className="btn-outline py-2 px-4 text-sm">Admin Panel</Link>
              )}
              <button onClick={logout} className="btn-outline py-2 px-4 text-sm">Logout</button>
            </>
          )}
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
          </nav>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white px-4 py-3 space-y-2">
          {links.map(l => (
            <Link key={l.label} href={l.href} className={`block py-2 ${isActive(l.href) ? 'text-primary font-bold' : 'text-slate-700'}`} onClick={() => setOpen(false)}>{l.label}</Link>
          ))}
          {!user || user.role !== 'admin' ? (
            <div className="pt-2 flex flex-col gap-2">
              <Link href="/enquiry" className="btn-primary block w-full text-center py-2.5 text-sm font-bold rounded-xl" onClick={() => setOpen(false)}>Send Enquiry</Link>
              <div className="flex flex-col gap-1 bg-slate-50 p-4 rounded-xl border border-slate-100 mt-2">
                <p className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">Contact Info</p>
                <a href="tel:+917428300246" className="flex items-center gap-3 py-1.5 text-sm font-semibold text-slate-700 hover:text-primary transition">
                  <Phone size={16} className="text-primary" /> +91 74283 00246
                </a>
                <a href="mailto:info@theb2bholidays.com" className="flex items-center gap-3 py-1.5 text-sm font-semibold text-slate-700 hover:text-primary transition">
                  <Mail size={16} className="text-primary" /> info@theb2bholidays.com
                </a>
                <a href="https://www.google.com/maps/place/The+Iconic+Corenthum/@28.6290602,77.3610363,15.68z/data=!4m15!1m8!3m7!1s0x390ce54e53e93a5f:0x98f7987d5778ab91!2s41,+Block+A,+Industrial+Area,+Sector+62,+Noida,+Uttar+Pradesh+201309!3b1!8m2!3d28.62901!4d77.3644551!16s%2Fg%2F11h4kcs9dw!3m5!1s0x390ce5447d350e9f:0x4beba507fa3f455b!8m2!3d28.6267113!4d77.3737679!16s%2Fg%2F11cls77vbf?entry=ttu&g_ep=EgoyMDI2MDgwNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 py-1.5 text-sm font-semibold text-slate-700 hover:text-primary transition">
                  <MapPin size={16} className="text-primary shrink-0 mt-0.5" /> 
                  <span className="leading-tight">The Corenthum Iconic Tower C, 5th Floor, C 23, Near Noida Electronic City Metro Station Gate No.3, Noida 62, 201301</span>
                </a>
              </div>
            </div>
          ) : null}
          {user && (
            <div className="flex gap-2 pt-2">
              {user.role === 'admin' && (
                <Link href="/admin" className="btn-outline flex-1 py-2 text-sm" onClick={() => setOpen(false)}>Admin Panel</Link>
              )}
              <button onClick={() => { logout(); setOpen(false); }} className="btn-outline flex-1 py-2 text-sm">Logout</button>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
