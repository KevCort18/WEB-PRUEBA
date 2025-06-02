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
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container_ max-w-[1280px] mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-foreground">
          <HephaCodeLogoIcon className="h-8 w-8 text-primary" />
          <span className="font-headline text-xl font-bold">HephaCode</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            asChild
            className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground rounded-md"
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
                      className="font-medium text-foreground/70 transition-colors hover:text-foreground text-lg"
                       onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button asChild className="mt-4 bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
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
