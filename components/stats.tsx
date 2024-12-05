export default function Stats() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold mb-2">€50M+</h3>
            <p className="text-primary-foreground/80">Total Investments</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-2">250+</h3>
            <p className="text-primary-foreground/80">Funded Projects</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-2">15,000+</h3>
            <p className="text-primary-foreground/80">Active Investors</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-2">8.5%</h3>
            <p className="text-primary-foreground/80">Average Return</p>
          </div>
        </div>
      </div>
    </section>
  );
}