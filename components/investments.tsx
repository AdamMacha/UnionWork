import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, MapPin } from "lucide-react";

const investments = [
  {
    title: "Residential Complex Prague 5",
    location: "Prague, Czech Republic",
    return: "8.5%",
    term: "12 months",
    funded: "85%",
    amount: "€2,500,000",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800&h=400"
  },
  {
    title: "Office Building Renovation",
    location: "Brno, Czech Republic",
    return: "9.2%",
    term: "18 months",
    funded: "65%",
    amount: "€1,800,000",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800&h=400"
  },
  {
    title: "Mixed-Use Development",
    location: "Ostrava, Czech Republic",
    return: "8.8%",
    term: "24 months",
    funded: "45%",
    amount: "€3,200,000",
    image: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?auto=format&fit=crop&q=80&w=800&h=400"
  }
];

export default function Investments() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Current Investment Opportunities
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore our carefully selected real estate investment projects
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {investments.map((investment, index) => (
            <Card key={index} className="overflow-hidden">
              <img
                src={investment.image}
                alt={investment.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{investment.title}</CardTitle>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  {investment.location}
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Annual Return</p>
                    <p className="text-lg font-semibold">{investment.return}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Term Length</p>
                    <p className="text-lg font-semibold">{investment.term}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Funded</p>
                    <p className="text-lg font-semibold">{investment.funded}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Target Amount</p>
                    <p className="text-lg font-semibold">{investment.amount}</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  View Investment
                  <Building className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Opportunities
          </Button>
        </div>
      </div>
    </section>
  );
}