"use client";

import { useState } from "react";
import { 
  MapPin, 
  Clock, 
  Navigation, 
  Phone, 
  User, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Zap, 
  ExternalLink
} from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    requirement: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setLoading(true);

    // Simulate fast dispatch & format WhatsApp message
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      const message = `Hello Obifoks Global! I would like to request a quote.\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Requirement:* ${formData.requirement || "Not specified"}`;
      
      const whatsappUrl = `https://wa.me/2349064566983?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
    }, 600);
  };

  const storeAddress = "No. 6 Wetheral Road, Opposite Polaris Bank (Government Roundabout), Owerri, Imo State.";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(storeAddress)}`;
  const embedMapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(storeAddress)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="contact" className="scroll-mt-20 relative py-20 sm:py-28 lg:py-32 bg-white text-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 text-left space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-black text-white text-xs font-extrabold uppercase tracking-widest">
            <span>CONTACT US</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950 tracking-tight leading-tight">
            Let's get you powered.
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 max-w-2xl leading-relaxed">
            Visit our physical store in Owerri or request an instant quote online. Our expert energy team is ready to assist you.
          </p>
        </div>

        {/* 2-Column Main Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          
          {/* LEFT COLUMN: VISIT OUR STORE & GOOGLE MAP */}
          <div className="bg-transparent flex flex-col justify-between space-y-8 p-2 sm:p-4">
            <div className="space-y-8">
              {/* Store Header */}
              <div className="pb-5 border-b border-zinc-200">
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-zinc-950 uppercase">
                  VISIT OUR STORE
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 font-medium mt-1">
                  Official Sales &amp; Experience Center
                </p>
              </div>

              {/* Address Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 rounded-xl bg-zinc-100 text-zinc-800 shrink-0 border border-zinc-200/80">
                    <MapPin className="w-5 h-5 text-zinc-700" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Address</h4>
                    <p className="text-sm sm:text-base font-bold text-zinc-900 leading-snug">
                      No. 6 Wetheral Road
                    </p>
                    <p className="text-xs sm:text-sm text-zinc-600 font-medium leading-relaxed">
                      Opp. Polaris Bank (Government Roundabout)
                    </p>
                    <p className="text-xs sm:text-sm text-zinc-600 font-medium">
                      Owerri, Imo State, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <div className="p-2 rounded-xl bg-zinc-100 text-zinc-800 shrink-0 border border-zinc-200/80">
                    <Clock className="w-5 h-5 text-zinc-700" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Business Hours</h4>
                    <p className="text-xs sm:text-sm font-semibold text-zinc-900">
                      8:00 AM – 6:30 PM <span className="text-zinc-500 font-normal ml-1">Mon - Sun</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Interactive Google Map Embed */}
              <div className="relative w-full h-72 sm:h-80 lg:h-[360px] rounded-2xl overflow-hidden border border-zinc-300 shadow-sm bg-zinc-100 group">
                <iframe
                  title="Obifoks Global Store Location Map"
                  src={embedMapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter contrast-[1.02] brightness-[0.98] transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Floating Map Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-md border border-zinc-200 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-zinc-800">Obifoks Showroom, Owerri</span>
                </div>
              </div>
            </div>

            {/* Direction Action Button */}
            <div className="pt-4">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-xs sm:text-sm py-4 px-6 rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.99] group"
              >
                <Navigation className="w-4 h-4 text-[#EE7130] transition-transform group-hover:rotate-45" />
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors ml-auto" />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: REQUEST A QUOTE */}
          <div id="quote" className="bg-zinc-950 text-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-2xl border border-zinc-800">
            <div>
              {/* Quote Header */}
              <div className="pb-5 border-b border-zinc-800/80 mb-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white uppercase">
                    REQUEST A QUOTE
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 mt-2">
                  Tell us what you need and our team will get back to you.
                </p>
              </div>

              {submitted ? (
                /* Success Confirmation State */
                <div className="py-10 px-4 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="w-9 h-9 stroke-[2]" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-white">Quote Request Sent!</h4>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm mx-auto">
                      Thank you, <span className="text-white font-semibold">{formData.name}</span>. We've opened WhatsApp to directly route your request to our engineering team.
                    </p>
                  </div>
                  <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-200 transition-colors"
                    >
                      Submit Another Quote
                    </button>
                    <a
                      href="tel:09064566983"
                      className="px-6 py-3 rounded-xl bg-[#378222] hover:bg-[#2b661a] text-xs font-bold text-white transition-colors inline-flex items-center justify-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call Sales directly</span>
                    </a>
                  </div>
                </div>
              ) : (
                /* Form Inputs */
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label htmlFor="quote-name" className="block text-xs font-bold text-zinc-300">
                      Name <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-zinc-500 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input
                        id="quote-name"
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-zinc-900/90 border border-zinc-800 rounded-xl py-3.5 pl-11 pr-4 text-xs sm:text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-2">
                    <label htmlFor="quote-phone" className="block text-xs font-bold text-zinc-300">
                      Phone <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-zinc-500 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input
                        id="quote-phone"
                        type="tel"
                        required
                        placeholder="Phone or WhatsApp number e.g. 09064566983"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-zinc-900/90 border border-zinc-800 rounded-xl py-3.5 pl-11 pr-4 text-xs sm:text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* What do you need? Textarea */}
                  <div className="space-y-2">
                    <label htmlFor="quote-requirement" className="block text-xs font-bold text-zinc-300">
                      What do you need?
                    </label>
                    <div className="relative">
                      <textarea
                        id="quote-requirement"
                        rows={4}
                        placeholder="Tell us about your power load (appliances, home/office size) or specific battery/inverter requirements..."
                        value={formData.requirement}
                        onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                        className="w-full bg-zinc-900/90 border border-zinc-800 rounded-xl py-3.5 pl-11 pr-4 text-xs sm:text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#378222] hover:bg-[#2b661a] disabled:bg-zinc-700 text-white font-bold text-xs sm:text-sm py-4 px-6 rounded-xl sm:rounded-2xl shadow-lg transition-all duration-200 active:scale-[0.99] group cursor-pointer"
                    >
                      {loading ? (
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Request Quote</span>
                          <Send className="w-4 h-4 stroke-[2.2] transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Quick Contact Footer Bar */}
            <div className="mt-8 pt-5 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
              <span>Direct lines: 0906 456 6983</span>
              <a href="mailto:obifoks@gmail.com" className="hover:text-white transition-colors">
                obifoks@gmail.com
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
