import { Building2, Shield, TrendingUp, Users } from "lucide-react";
import { FeatureCard } from "./feature-card";

const features = [
  {
    icon: Building2,
    title: "Prověřené realitní projekty",
    description: "Každá investiční příležitost je důkladně analyzována a ověřena našimi experty."
  },
  {
    icon: TrendingUp,
    title: "Stabilní výnosy",
    description: "Získejte konkurenceschopné výnosy zajištěné nemovitostmi s pravidelnými měsíčními výplatami."
  },
  {
    icon: Shield,
    title: "Zajištěné investice",
    description: "Vaše investice jsou zajištěny zástavním právem prvního pořadí k nemovitostem."
  },
  {
    icon: Users,
    title: "Komunita investorů",
    description: "Připojte se k rostoucí komunitě investorů a sdílejte zkušenosti a poznatky."
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-gray-50/50">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Proč zvolit <span className="gradient-text">RondaInvest</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Kombinujeme bezpečnost, transparentnost a odbornost, abychom vám poskytli ty nejlepší investiční příležitosti.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}