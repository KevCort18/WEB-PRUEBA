import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section id="inicio" className="relative h-[70vh] min-h-[400px] sm:h-[80vh] md:h-[calc(100vh-4rem)] flex items-center justify-center text-center text-white overflow-hidden">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Fondo abstracto de tecnología"
        fill
        priority
        className="object-cover"
        data-ai-hint="abstract technology network"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-background" />
      
      <div className="relative z-10 container_ max-w-[960px] mx-auto px-4">
        <h1 className="font-headline text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
          Soluciones de IA para Pequeñas y Medianas Empresas
        </h1>
        <p className="mt-6 max-w-2xl mx-auto font-body text-lg text-foreground/80 sm:text-xl md:text-2xl">
          HephaCode empodera a las empresas desatendidas con desarrollo ágil de IA, entregando valor desde la primera interacción.
        </p>
        <Button 
          asChild 
          size="lg" 
          className="mt-10 bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground rounded-md px-8 py-3 text-lg font-semibold"
        >
          <Link href="#contacto">Comenzar</Link>
        </Button>
      </div>
    </section>
  );
}
