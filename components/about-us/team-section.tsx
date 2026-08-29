import { Users, Cpu, ShieldCheck, Wrench, PhoneCall } from "lucide-react";

const TEAM_MEMBERS = [
  {
    name: "Engr. Emmanuel Okafor",
    role: "Lead Solar Microgrid & Power Engineer",
    department: "Technical Operations",
    badge: "COREN / NSE Standards",
    icon: Cpu,
    bio: "Oversees high-voltage solar array design, inverter synchronization, and complex load calculation for commercial and residential installations.",
  },
  {
    name: "Chidimma Ike",
    role: "Head of Security & Surveillance Systems",
    department: "Security Infrastructure",
    badge: "IP CCTV Specialist",
    icon: ShieldCheck,
    bio: "Directs perimeter protection, high-definition IP camera networks, automatic solar street lighting, and remote monitoring installations.",
  },
  {
    name: "Kelechi Amadi",
    role: "Quality Assurance & Supply Logistics Lead",
    department: "Procurement & Quality Control",
    badge: "Felicity Factory Auditor",
    icon: Wrench,
    bio: "Ensures all incoming shipments of LiFePO4 batteries and hybrid inverters undergo stringent voltage testing before entering field deployment.",
  },
  {
    name: "Blessing Nwachukwu",
    role: "Client Relations & After-Sales Coordinator",
    department: "Client Care & Support",
    badge: "24/7 Service Desk",
    icon: PhoneCall,
    bio: "Manages rapid-response dispatch teams for routine preventative maintenance, battery health checks, and warranty processing across South-East Nigeria.",
  },
];

export default function TeamSection() {
  return (
    <section className="py-16 sm:py-24 bg-white text-zinc-900 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col items-start max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-black text-white text-xs font-semibold tracking-wider uppercase mb-4">
            <Users className="w-3.5 h-3.5 text-white" />
            <span>Technical &amp; Field Operations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-950 tracking-tight">
            Our Departmental Leadership &amp; Engineering Team
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base mt-3 leading-relaxed">
            Behind every reliable solar microgrid and security installation is our dedicated team of certified engineers, procurement specialists, and field technicians.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member) => {
            const IconComponent = member.icon;
            return (
              <div
                key={member.name}
                className="bg-white border border-zinc-200 p-6 flex flex-col justify-between hover:border-zinc-950 transition-all group shadow-sm"
              >
                <div>
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 bg-black text-white group-hover:bg-[#2b661a] transition-colors">
                      <IconComponent className="w-5 h-5 text-[#EE7130]" />
                    </div>
                    <span className="px-2.5 py-1 bg-zinc-100 border border-zinc-200 text-[10px] uppercase tracking-wider font-bold text-zinc-700">
                      {member.badge}
                    </span>
                  </div>

                  {/* Name & Role */}
                  <h3 className="text-base font-extrabold text-zinc-950 group-hover:text-[#EE7130] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#EE7130] mt-0.5">
                    {member.role}
                  </p>
                  <p className="text-[10px] text-zinc-400 uppercase tracking-wider font-bold mt-2">
                    {member.department}
                  </p>

                  <div className="w-full border-t border-zinc-100 my-4" />

                  {/* Bio */}
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
