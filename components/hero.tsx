"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 hero-gradient" />
      
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Investujte do své
              <span className="gradient-text block">Finanční budoucnosti</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-[600px] mx-auto lg:mx-0">
              Připojte se k tisícům investorů a získejte stabilní výnosy prostřednictvím pečlivě prověřených realitních projektů. Začněte již od 2 500 Kč.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="rounded-xl text-lg h-12 bg-secondary hover:bg-secondary/90 text-primary">
                Začít investovat
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-xl text-lg h-12">
                Ukázka platformy
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-8 mt-12 max-w-[600px] mx-auto lg:mx-0"
            >
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold mb-1 gradient-text">1,2 mld. Kč</div>
                <p className="text-sm text-muted-foreground">Celkem investováno</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold mb-1 gradient-text">15 000+</div>
                <p className="text-sm text-muted-foreground">Aktivních investorů</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold mb-1 gradient-text">8,5 %</div>
                <p className="text-sm text-muted-foreground">Průměrný výnos</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=800&h=1000"
                alt="Investment Platform"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 p-6 glass-effect rounded-2xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <ArrowRight className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-1">Nejnovější investice</div>
                    <div className="text-2xl font-bold gradient-text">+62,5 mil. Kč</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 p-6 glass-effect rounded-2xl shadow-lg">
                <div className="text-sm font-medium mb-1">Aktivní projekty</div>
                <div className="text-2xl font-bold gradient-text">250+</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}