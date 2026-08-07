'use client';
import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div className="container-x py-14">
      <h1 className="text-4xl font-extrabold text-slate-800">Contact Us</h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <p className="text-slate-600">Have a question or need partner support? Our team is here to help 24/7.</p>
          <div className="flex items-center gap-3 text-slate-600"><Mail className="text-primary" /> info@theb2bholidays.com</div>
          <div className="flex items-center gap-3 text-slate-600"><Phone className="text-primary" /> +91 74283 00246, +91 74283 00248</div>
          <div className="flex items-start gap-3 text-slate-600">
            <MapPin className="text-primary mt-1 shrink-0" />
            <a href="https://www.google.com/maps/place/The+Iconic+Corenthum/@28.6290602,77.3610363,15.68z/data=!4m15!1m8!3m7!1s0x390ce54e53e93a5f:0x98f7987d5778ab91!2s41,+Block+A,+Industrial+Area,+Sector+62,+Noida,+Uttar+Pradesh+201309!3b1!8m2!3d28.62901!4d77.3644551!16s%2Fg%2F11h4kcs9dw!3m5!1s0x390ce5447d350e9f:0x4beba507fa3f455b!8m2!3d28.6267113!4d77.3737679!16s%2Fg%2F11cls77vbf?entry=ttu&g_ep=EgoyMDI2MDgwNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
              The Corenthum Iconic Tower C, 5th Floor, C 23, Near Noida Electronic City Metro Station Gate No.3, Noida 62, 201301
            </a>
          </div>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="card space-y-4 p-6">
          {sent && <div className="rounded-xl bg-secondary/10 px-4 py-2 text-sm text-secondary">Thanks! We&apos;ll get back to you shortly.</div>}
          <input required placeholder="Your Name" className="w-full rounded-xl border px-4 py-3 text-sm" />
          <input required type="email" placeholder="Email" className="w-full rounded-xl border px-4 py-3 text-sm" />
          <textarea required placeholder="Message" rows={4} className="w-full rounded-xl border px-4 py-3 text-sm" />
          <button className="btn-primary w-full">Send Message</button>
        </form>
      </div>
    </div>
  );
}
