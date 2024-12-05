import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { StepCard } from "./step-card";

const steps = [
  {
    title: "Vytvořte si účet",
    description: "Registrace během několika minut pouze s e-mailem a základními údaji."
  },
  {
    title: "Vyberte si investici",
    description: "Procházejte prověřené realitní projekty a vyberte si ty, které odpovídají vašim cílům."
  },
  {
    title: "Investujte bezpečně",
    description: "Investujte již od 2 500 Kč s bezpečnými platebními metodami a kompletní dokumentací."
  },
  {
    title: "Sledujte a vydělávejte",
    description: "Monitorujte své investice a přijímejte pravidelné výplaty úroků."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Jak to <span className="gradient-text">funguje</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Začněte svou investiční cestu ve čtyřech jednoduchých krocích
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              number={index + 1}
              title={step.title}
              description={step.description}
              delay={index * 0.1}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
        <div className="text-center">
          <Button size="lg" className="rounded-xl bg-secondary hover:bg-secondary/90 text-primary font-semibold">
            Začít investovat
            <CheckCircle2 className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}