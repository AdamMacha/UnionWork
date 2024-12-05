import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Create an Account",
    description: "Sign up in minutes with just your email and basic information."
  },
  {
    title: "Choose Your Investment",
    description: "Browse vetted real estate projects and select ones that match your goals."
  },
  {
    title: "Invest Securely",
    description: "Invest from €100 with secure payment methods and full documentation."
  },
  {
    title: "Track & Earn",
    description: "Monitor your investments and receive regular interest payments."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Start your investment journey in four simple steps
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center p-6"
            >
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-[calc(100%-2rem)] w-[calc(4rem)] h-0.5 bg-border -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button size="lg" className="font-semibold">
            Get Started Now
            <CheckCircle2 className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}