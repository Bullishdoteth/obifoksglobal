"use client";

import { 
  MapPin, 
  Clock, 
  Navigation, 
  Phone, 
  ExternalLink,
  Mail
} from "lucide-react";

export default function ContactUs() {
  const storeAddress = "No. 6 Wetheral Road, Opposite Polaris Bank (Government Roundabout), Owerri, Imo State.";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(storeAddress)}`;
  const embedMapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(storeAddress)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="contact" className="scroll-mt-20 relative py-20 sm:py-28 bg-white text-zinc-900 overflow-hidden border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 text-left space-y-3 sm:space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-black text-white text-xs font-extrabold uppercase tracking-widest">
            <span>CONTACT US</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950 tracking-tight leading-tight">
            Visit Our Showroom &amp; Store.
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
            Stop by our experience center in Owerri to inspect genuine Felicity solar panels, lithium battery banks, hybrid inverters, or speak with our energy engineers.
          </p>
        </div>

        {/* Store Info & Interactive Google Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Store Address & Contact Cards (5/12) */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="pb-4 border-b border-zinc-200">
                <h3 className="text-xl font-black tracking-tight text-zinc-950 uppercase">
                  STORE LOCATION &amp; CONTACT
                </h3>
                <p className="text-xs text-zinc-500 font-medium mt-1">
                  Official Obifoks Global Sales &amp; Experience Center
                </p>
              </div>

              {/* Address Details */}
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2.5 rounded-xl bg-white text-zinc-800 shrink-0 border border-zinc-200 shadow-xs">
                    <MapPin className="w-5 h-5 text-[#EE7130]" />
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

                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2.5 rounded-xl bg-white text-zinc-800 shrink-0 border border-zinc-200 shadow-xs">
                    <Clock className="w-5 h-5 text-[#EE7130]" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Business Hours</h4>
                    <p className="text-xs sm:text-sm font-bold text-zinc-900">
                      8:00 AM – 6:30 PM <span className="text-zinc-500 font-normal ml-1">Mon - Sun</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2.5 rounded-xl bg-white text-zinc-800 shrink-0 border border-zinc-200 shadow-xs">
                    <Phone className="w-5 h-5 text-[#EE7130]" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Direct Phone Lines</h4>
                    <div className="flex flex-col space-y-1 text-xs sm:text-sm text-zinc-900 font-bold pt-0.5">
                      <a href="tel:09064566983" className="hover:text-[#EE7130] transition-colors">
                        0906 456 6983
                      </a>
                      <a href="tel:08026640279" className="hover:text-[#EE7130] transition-colors">
                        0802 664 0279
                      </a>
                      <a href="tel:09111709721" className="hover:text-[#EE7130] transition-colors">
                        0911 170 9721
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2.5 rounded-xl bg-white text-zinc-800 shrink-0 border border-zinc-200 shadow-xs">
                    <Mail className="w-5 h-5 text-[#EE7130]" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Email Address</h4>
                    <a href="mailto:obifoks@gmail.com" className="text-xs sm:text-sm text-zinc-900 font-bold hover:text-[#EE7130] transition-colors block pt-0.5">
                      obifoks@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Reach Us on WhatsApp Button */}
            <div className="pt-4 border-t border-zinc-200">
              <a
                href="https://wa.me/2348026640279?text=Hello%20Obifoks%20Global!%20I%20would%20like%20to%20inquire%20about%20your%20solar%20products%20and%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm py-4 px-6 shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.99] group cursor-pointer"
              >
                <svg className="w-5 h-5 fill-current text-white transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l.999 1.583-1.046 3.821 3.911-1.025 1.879 1.116zm11.243-7.55c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
                </svg>
                <span>Reach Us on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Interactive Google Map Embed Column (7/12) */}
          <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[460px] lg:min-h-full rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-300 shadow-md bg-zinc-100 group">
            <iframe
              title="Obifoks Global Store Location Map"
              src={embedMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[380px] lg:min-h-full filter contrast-[1.02] brightness-[0.98] transition-transform duration-500 group-hover:scale-[1.02]"
            />
            
            {/* Floating Map Badge */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-md border border-zinc-200 flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EE7130] animate-pulse" />
              <div>
                <p className="text-xs font-black text-zinc-900 leading-none">Obifoks Global Showroom</p>
                <p className="text-[10px] text-zinc-500 font-medium pt-0.5">Government Roundabout, Owerri</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
