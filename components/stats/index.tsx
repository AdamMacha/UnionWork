import { StatCard } from "./stat-card";

const stats = [
  { value: "1,2 mld. Kč", label: "Celkové investice" },
  { value: "250+", label: "Financovaných projektů" },
  { value: "15 000+", label: "Aktivních investorů" },
  { value: "8,5 %", label: "Průměrný výnos" }
];

export default function Stats() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-primary">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      </div>
      <div className="container relative px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              label={stat.label}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}