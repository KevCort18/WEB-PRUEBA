import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Cog, LineChart, Bot } from 'lucide-react'; // Using Lucide icons

interface Solution {
  icon: React.ElementType;
  title: string;
  description: string;
}

const solutions: Solution[] = [
  {
    icon: Bot,
    title: "Automatización",
    description: "Automatice tareas repetitivas para liberar el tiempo y los recursos de su equipo, mejorando la productividad."
  },
  {
    icon: Cog,
    title: "Optimización",
    description: "Optimice sus operaciones y procesos para obtener la máxima eficiencia y significativos ahorros de costes."
  },
  {
    icon: LineChart,
    title: "Perspectivas",
    description: "Obtenga información valiosa y accionable de sus datos para tomar decisiones estratégicas informadas."
  },
];

export function SolutionsSection() {
  return (
    <section id="soluciones" className="py-16 md:py-24 bg-card/5 rounded-lg">
      <div className="container_ max-w-[960px] mx-auto px-4">
        <h2 className="font-headline text-3xl font-bold text-center sm:text-4xl md:text-5xl mb-4">
          Soluciones de IA a Medida
        </h2>
        <p className="font-body text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12 sm:text-xl">
          Ofrecemos una gama de soluciones de IA diseñadas para satisfacer las necesidades únicas de su negocio, impulsando resultados tangibles.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <Card key={solution.title} className="bg-card border-border shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
              <CardHeader className="items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <solution.icon className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-headline text-2xl">{solution.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="font-body text-muted-foreground text-base">
                  {solution.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
