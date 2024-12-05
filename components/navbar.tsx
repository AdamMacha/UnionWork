"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/ui/logo";

const menuItems = [
  { title: "Investice", href: "/investments" },
  { title: "Jak to funguje", href: "/how-it-works" },
  { title: "O nás", href: "/about" }
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="absolute inset-0 glass-effect" />
      <nav className="relative container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-4"
          >
            <Link href="/" className="flex items-center space-x-3">
              <Logo />
              <span className="font-bold text-lg gradient-text">Union Work</span>
            </Link>
          </motion.div>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex space-x-1">
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink className="px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-secondary/10 gradient-text">
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-4"
          >
            <div className="hidden md:flex items-center space-x-2">
              <Button variant="ghost" className="rounded-xl gradient-text">Přihlásit se</Button>
              <Button className="rounded-xl gold-gradient text-primary hover:opacity-90">
                Začít investovat
              </Button>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6 gradient-text" /> : <Menu className="h-6 w-6 gradient-text" />}
            </Button>
          </motion.div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="relative md:hidden"
          >
            <div className="absolute inset-0 glass-effect" />
            <div className="relative container mx-auto px-4 py-6 space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="block px-4 py-2 rounded-lg text-sm font-medium gradient-text"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="rounded-xl w-full gradient-text">Přihlásit se</Button>
                <Button className="rounded-xl w-full gold-gradient text-primary hover:opacity-90">
                  Začít investovat
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}