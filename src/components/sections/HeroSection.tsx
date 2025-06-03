
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section 
      id="inicio" 
      className="w-full relative flex items-center justify-center text-center text-foreground overflow-hidden @container min-h-[480px] md:min-h-[calc(100vh-4rem)]"
    >
      {/* Main div for background image and gradient, matches HTML structure for direct styling */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCo5xnd8o4sPw92l3v10CjyeQYKWw7KPdIS63luzR4ZJ5ejeIjgGpMGlGyLcRLe2SgnsdzaWTcTENnlvzSLubciNySUm4_ug_nma-1dv7jn1c-HCOojr42XzCjg6qoe3Q8OUOR50TBIX3NgkeaTbzzrcWmfT8OXO1OF1ymWH4gbxf8fJXG808Weqwc4FQtSrBSpZlQiI2XYQ4ARiUlH-Jso7cXp4nLWGWW0YHyu_j4jYI3fGTBunwkKUkwjpIM645NAevD0Ughw9Yg")',
        }}
        data-ai-hint="AI innovation" 
      >
      </div>
      
      {/* Content container - matches HTML structure for padding and responsive text */}
      <div className="relative z-10 flex flex-col gap-2 text-left items-start justify-end p-4 pb-10 @[480px]:px-10 @[480px]:gap-8 w-full max-w-[960px] mx-auto">
        <h1
          className="text-foreground text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl"
        >
          Soluciones de IA para Pequeñas y Medianas Empresas
        </h1>
        <h2 
          className="text-foreground text-sm font-normal leading-normal @[480px]:text-base"
        >
          HephaCode empodera a las empresas desatendidas con desarrollo ágil de IA, entregando valor desde la primera interacción.
        </h2>
        <Button 
          asChild 
          className="min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base"
        >
          <Link href="#contacto">Comenzar</Link>
        </Button>
      </div>
    </section>
  );
}
