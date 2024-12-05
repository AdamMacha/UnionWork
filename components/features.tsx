import { Building2, Shield, TrendingUp, Users } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Vetted Real Estate Projects",
    description: "Every investment opportunity is thoroughly analyzed and verified by our expert team."
  },
  {
    icon: TrendingUp,
    title: "Stable Returns",
    description: "Earn competitive returns backed by real estate assets with regular monthly payouts."
  },
  {
    icon: Shield,
    title: "Secured Investment",
    description: "Your investments are secured by first-rank mortgages on the properties."
  },
  {
    icon: Users,
    title: "Community-Driven",
    description: "Join a growing community of investors and share insights and experiences."
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Why Choose Our Platform
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We combine security, transparency, and expertise to provide you with the best investment opportunities.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm"
              >
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}