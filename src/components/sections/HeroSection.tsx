
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section 
      id="inicio" 
      className="w-full relative flex items-center justify-center text-center text-foreground overflow-hidden @container min-h-[480px] md:min-h-[calc(100vh-5rem)]" // 5rem for h-20 header
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCo5xnd8o4sPw92l3v10CjyeQYKWw7KPdIS63luzR4ZJ5ejeIjgGpMGlGyLcRLe2SgnsdzaWTcTENnlvzSLubciNySUm4_ug_nma-1dv7jn1c-HCOojr42XzCjg6qoe3Q8OUOR50TBIX3NgkeaTbzzrcWmfT8OXO1OF1ymWH4gbxf8fJXG808Weqwc4FQtSrBSpZlQiI2XYQ4ARiUlH-Jso7cXp4nLWGWW0YHyu_j4jYI3fGTBunwkKUkwjpIM645NAevD0Ughw9Yg")',
        }}
        data-ai-hint="AI innovation" 
      >
      </div>
      
      <div className="relative z-10 flex flex-col gap-6 @[480px]:gap-8 text-center items-center justify-center p-8 md:p-12 lg:p-16 w-full max-w-[960px] mx-auto">
        <h1
          className="text-foreground text-5xl font-bold leading-tight tracking-[-0.033em] @[480px]:text-6xl lg:text-7xl"
        >
          Soluciones de IA para Pequeñas y Medianas Empresas
        </h1>
        <h2 
          className="text-foreground/90 text-lg font-normal leading-normal @[480px]:text-xl max-w-3xl"
        >
          HephaCode empodera a las empresas desatendidas con desarrollo ágil de IA, entregando valor desde la primera interacción.
        </h2>
        <Button 
          asChild 
          size="lg"
          className="mt-8 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 @[480px]:h-14 px-6 @[480px]:px-8 bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground text-base @[480px]:text-lg font-bold leading-normal tracking-[0.015em]"
        >
          <Link href="#contacto">Comenzar</Link>
        </Button>
      </div>
    </section>
  );
}
