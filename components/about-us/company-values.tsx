import { ShieldAlert, Zap, CheckCircle2, Award, Headset } from "lucide-react";

const VALUES = [
  {
    title: "Zero Capacity Inflation",
    description:
      "We strictly adhere to exact mathematical load calculations. We never over-promise or inflate battery/panel wattage specs just to make a quick sale.",
    icon: ShieldAlert,
  },
  {
    title: "100% Genuine Felicity Direct",
    description:
      "Every lithium battery module, solar panel, and hybrid inverter is sourced directly from authorized manufacturing streams, backed by authentic warranty certificates.",
    icon: Zap,
  },
  {
    title: "Professional On-Site Engineering",
    description:
      "Our installations follow strict electrical wiring safety guidelines, earthing protection, AC/DC surge arrestors, and thermal distribution standards.",
    icon: CheckCircle2,
  },
  {
    title: "Dedicated After-Sales Maintenance",
    description:
      "We provide continuous support, periodic solar panel surface cleaning guidelines, inverter firmware updates, and rapid field intervention whenever needed.",
    icon: Headset,
  },
];

export default function CompanyValues() {
  return (
    <section className="py-16 sm:py-24 bg-white text-zinc-900 border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col items-start max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-100/80 border border-orange-200 text-[#EE7130] text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Why Trust Obifoks Global</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1528] tracking-tight">
            Our Uncompromising Operating Standards
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base mt-3 leading-relaxed">
            In an industry plagued by substandard market clones and fake capacity labels, we stand firmly on truth, technical precision, and customer satisfaction.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((val) => {
            const IconComp = val.icon;
            return (
              <div
                key={val.title}
                className="bg-zinc-50/80 border border-zinc-200/90 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md hover:border-[#EE7130]/40 transition-all"
              >
                <div>
                  <div className="p-3 rounded-xl bg-orange-50 border border-orange-100 text-[#EE7130] w-fit mb-4">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#0B1528] mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {val.description}
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
