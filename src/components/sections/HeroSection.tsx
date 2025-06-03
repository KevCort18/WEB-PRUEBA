
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="w-full relative flex items-center justify-center text-foreground overflow-hidden @container min-h-[480px] @[480px]:rounded-xl"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat @[480px]:rounded-xl"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCo5xnd8o4sPw92l3v10CjyeQYKWw7KPdIS63luzR4ZJ5ejeIjgGpMGlGyLcRLe2SgnsdzaWTcTENnlvzSLubciNySUm4_ug_nma-1dv7jn1c-HCOojr42XzCjg6qoe3Q8OUOR50TBIX3NgkeaTbzzrcWmfT8OXO1OF1ymWH4gbxf8fJXG808Weqwc4FQtSrBSpZlQiI2XYQ4ARiUlH-Jso7cXp4nLWGWW0YHyu_j4jYI3fGTBunwkKUkwjpIM645NAevD0Ughw9Yg")',
        }}
        data-ai-hint="abstract geometric dark"
      >
      </div>

      <div className="relative z-10 flex flex-col gap-6 @[480px]:gap-8 items-start justify-end text-left p-4 @[480px]:px-10 @[480px]:pb-10 w-full max-w-[960px] mx-auto">
        <h1
          className="text-foreground text-4xl font-bold leading-tight tracking-[-0.033em] @[480px]:text-5xl"
        >
          Soluciones de IA para Pequeñas y<br />Medianas Empresas
        </h1>
        <h2
          className="text-foreground text-sm font-normal leading-normal @[480px]:text-base max-w-3xl"
        >
          HephaCode empodera a las empresas desatendidas con desarrollo ágil de IA, entregando valor desde la primera interacción.
        </h2>
        <Button
          asChild
          className="bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground rounded-xl h-10 px-4 text-sm font-bold leading-normal tracking-[0.015em] @[480px]:h-12 @[480px]:px-5 @[480px]:text-base"
        >
          <Link href="#contacto">Comenzar</Link>
        </Button>
      </div>
    </section>
  );
}
