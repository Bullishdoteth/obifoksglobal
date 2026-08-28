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
    <section className="py-16 sm:py-24 bg-zinc-950 text-white border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col items-start max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EE7130]/10 border border-[#EE7130]/30 text-[#EE7130] text-xs font-bold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Technical &amp; Field Operations</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Our Departmental Leadership &amp; Engineering Team
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3 leading-relaxed">
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
                className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-6 flex flex-col justify-between hover:border-zinc-700 transition-colors group"
              >
                <div>
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-[#EE7130] group-hover:bg-[#EE7130]/10 group-hover:border-[#EE7130]/30 transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-zinc-950 border border-zinc-800 text-[10px] uppercase tracking-wider font-bold text-zinc-400">
                      {member.badge}
                    </span>
                  </div>

                  {/* Name & Role */}
                  <h3 className="text-lg font-bold text-white group-hover:text-[#EE7130] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#EE7130] mt-0.5">
                    {member.role}
                  </p>
                  <p className="text-[11px] text-zinc-400 uppercase tracking-widest font-semibold mt-2">
                    {member.department}
                  </p>

                  <div className="w-full border-t border-zinc-800/80 my-4" />

                  {/* Bio */}
                  <p className="text-xs text-zinc-300 leading-relaxed">
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
