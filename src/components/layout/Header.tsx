'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HephaCodeLogoIcon } from '@/components/icons/HephaCodeLogoIcon';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import React from 'react';

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#soluciones', label: 'Soluciones' },
  { href: '#enfoque', label: 'Enfoque' },
  { href: '#contacto', label: 'Contacto' },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      <div className="container_ max-w-screen-xl mx-auto flex h-16 items-center justify-between px-10 py-3">
        <Link href="/" className="flex items-center gap-3 text-foreground">
          <HephaCodeLogoIcon className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-bold tracking-[-0.015em]">HephaCode</span>
        </Link>

        <nav className="hidden md:flex items-center gap-9 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-medium text-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            asChild
            className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground rounded-xl h-10 px-4 text-sm font-bold leading-normal tracking-[0.015em]"
          >
            <Link href="#contacto">Comenzar</Link>
          </Button>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[340px] bg-background">
              <div className="p-6">
                <Link href="/" className="flex items-center gap-2 mb-8" onClick={() => setIsMobileMenuOpen(false)}>
                  <HephaCodeLogoIcon className="h-8 w-8 text-primary" />
                  <span className="font-headline text-xl font-bold">HephaCode</span>
                </Link>
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="font-medium text-foreground/80 transition-colors hover:text-primary text-lg"
                       onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button
                    asChild
                    className="mt-4 bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground rounded-xl h-11 px-5 text-base font-bold"
                    onClick={() => setIsMobileMenuOpen(false)}>
                     <Link href="#contacto">Comenzar</Link>
                  </Button>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
