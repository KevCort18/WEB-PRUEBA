
'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import React from 'react';
import { Loader2 } from 'lucide-react';
import { sendContactRequest } from '@/app/actions/sendContactEmail';

export function ContactSection() {
  const { toast } = useToast();
  const [email, setEmail] = React.useState('');
  const [projectDetails, setProjectDetails] = React.useState('');
  const [preferDirectContact, setPreferDirectContact] = React.useState(false);
  const [isEmailSubmitted, setIsEmailSubmitted] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast({
        title: "Correo Inválido",
        description: "Por favor, ingrese una dirección de correo electrónico válida.",
        variant: "destructive",
      });
      return;
    }
    setIsEmailSubmitted(true);
  };

  const handleFullFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const contactData = {
      email,
      projectDetails: preferDirectContact ? "" : projectDetails,
      contactPreference: preferDirectContact ? "Prefiere ser contactado directamente para brindar información." : "Información proporcionada en el formulario.",
    };

    try {
      const result = await sendContactRequest(contactData);
      
      if (result.success) {
        toast({
          title: "Solicitud Enviada",
          description: "¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.",
        });
        // Reset form
        setEmail('');
        setProjectDetails('');
        setPreferDirectContact(false);
        setIsEmailSubmitted(false);
      } else {
        toast({
          title: "Error al Enviar",
          description: result.error || "Hubo un problema al enviar tu solicitud. Intenta de nuevo.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error Inesperado",
        description: "Ocurrió un error inesperado. Por favor, intenta más tarde.",
        variant: "destructive",
      });
      console.error("Error en handleFullFormSubmit:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToEmail = () => {
    setIsEmailSubmitted(false);
  };

  return (
    <section id="contacto" className="py-16 md:py-24 bg-card/5 rounded-lg">
      <div className="container_ max-w-[960px] mx-auto px-4">
        <h2 className="font-headline text-3xl font-bold text-center sm:text-4xl md:text-5xl mb-8">
          Contacto
        </h2>
        
        {!isEmailSubmitted ? (
          <form onSubmit={handleEmailSubmit} className="max-w-xl mx-auto flex flex-col sm:flex-row items-center gap-4">
            <Input
              type="email"
              placeholder="Su Correo Electrónico"
              className="flex-grow bg-input text-foreground placeholder:text-muted-foreground rounded-md h-12 px-4 text-base"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Su Correo Electrónico"
              disabled={isLoading}
            />
            <Button 
              type="submit"
              size="lg"
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground rounded-md h-12 px-8 text-base font-semibold"
              disabled={isLoading}
            >
              {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              Continuar
            </Button>
          </form>
        ) : (
          <form onSubmit={handleFullFormSubmit} className="max-w-xl mx-auto space-y-6">
            <div>
              <p className="text-muted-foreground mb-1">Correo electrónico:</p>
              <p className="font-semibold text-foreground">{email}</p>
            </div>

            <div>
              <Label htmlFor="projectDetails" className="block text-sm font-medium text-muted-foreground mb-1">
                Cuéntanos más sobre tu proyecto (opcional):
              </Label>
              <Textarea
                id="projectDetails"
                placeholder="Describe brevemente tu idea, necesidades o el problema que buscas resolver..."
                className="bg-input text-foreground placeholder:text-muted-foreground rounded-md text-base min-h-[120px]"
                value={projectDetails}
                onChange={(e) => setProjectDetails(e.target.value)}
                disabled={preferDirectContact || isLoading}
                aria-label="Detalles del proyecto"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="preferDirectContact"
                checked={preferDirectContact}
                onCheckedChange={(checked) => setPreferDirectContact(checked as boolean)}
                disabled={isLoading}
                aria-label="Prefiero que me contacten para brindar esta información"
              />
              <Label htmlFor="preferDirectContact" className="text-sm text-muted-foreground cursor-pointer">
                Prefiero que me contacten para brindar esta información.
              </Label>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                type="button"
                variant="outline"
                size="lg"
                onClick={handleBackToEmail}
                className="w-full sm:w-auto rounded-md h-12 px-8 text-base font-semibold"
                disabled={isLoading}
              >
                Modificar Email
              </Button>
              <Button 
                type="submit"
                size="lg"
                className="w-full sm:flex-grow bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground rounded-md h-12 px-8 text-base font-semibold"
                disabled={isLoading}
              >
                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                Enviar Solicitud
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
