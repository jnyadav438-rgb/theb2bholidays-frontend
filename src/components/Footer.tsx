import Link from 'next/link';
import Image from 'next/image';
import { Plane, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-20 bg-primary-dark text-white/90">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4 -ml-2 -mt-2">
            <Image src="/logo.png" alt="The B2B Holidays" width={300} height={100} className="h-16 md:h-24 w-auto brightness-0 invert scale-110 md:scale-125 origin-left" />
          </div>
          <p className="mt-4 text-sm text-white/70">India&apos;s premium B2B travel booking platform for agents and partners. Curated holidays, instant vouchers and unbeatable trade rates.</p>
        </div>
        <div>
          <h4 className="mb-4 font-semibold text-white">Company</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/blogs">Blogs</Link></li>
            <li><Link href="/enquiry">Send Enquiry</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-semibold text-white">Explore</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link href="/destinations">Destinations</Link></li>
            <li><Link href="/packages">Holiday Packages</Link></li>
            <li><Link href="/packages?theme=honeymoon">Honeymoon Packages</Link></li>
            <li><Link href="/packages?theme=adventure">Adventure Tours</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-semibold text-white">Get in touch</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2"><Mail size={16} /> info@theb2bholidays.com</li>
            <li className="flex items-center gap-2"><Phone size={16} /> +91 97165 51594</li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <a href="https://www.google.com/maps/place/The+Iconic+Corenthum/@28.6290602,77.3610363,15.68z/data=!4m15!1m8!3m7!1s0x390ce54e53e93a5f:0x98f7987d5778ab91!2s41,+Block+A,+Industrial+Area,+Sector+62,+Noida,+Uttar+Pradesh+201309!3b1!8m2!3d28.62901!4d77.3644551!16s%2Fg%2F11h4kcs9dw!3m5!1s0x390ce5447d350e9f:0x4beba507fa3f455b!8m2!3d28.6267113!4d77.3737679!16s%2Fg%2F11cls77vbf?entry=ttu&g_ep=EgoyMDI2MDgwNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                The Corenthum Iconic Tower C , 5th Floor, C 23, Near noida Electronic City metro Noida 62 201301
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-white/60">
        © {new Date().getFullYear()} THE B2B HOLIDAYS. All rights reserved.
      </div>
    </footer>
  );
}
