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
    <section id="contacto" className="py-16 md:py-24 px-4">
      <h2 className="text-foreground text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] text-center mb-12">
        Contacto
      </h2>

      {!isEmailSubmitted ? (
        <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row items-end gap-4 mb-12">
          <div className="flex-1 w-full sm:w-auto">
            <Label htmlFor="initial-email" className="sr-only">Su Correo Electrónico</Label>
            <Input
              id="initial-email"
              type="email"
              placeholder="Su Correo Electrónico"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-foreground focus:outline-0 focus:ring-0 border-border bg-input focus:border-border h-14 placeholder:text-muted-foreground p-4 text-base font-normal leading-normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Su Correo Electrónico"
              disabled={isLoading}
            />
          </div>
           <Button
              type="submit"
              className="flex w-full sm:w-auto min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 sm:h-14 px-6 bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground text-base font-bold leading-normal tracking-[0.015em]"
              disabled={isLoading}
            >
              {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              Continuar
            </Button>
        </form>
      ) : (
        <form onSubmit={handleFullFormSubmit} className="max-w-xl mx-auto space-y-8">
          <div>
            <p className="text-muted-foreground mb-1 text-sm">Correo electrónico:</p>
            <p className="font-semibold text-foreground text-lg">{email}</p>
          </div>

          <div>
            <Label htmlFor="projectDetails" className="block text-base font-medium text-muted-foreground mb-2">
              Cuéntanos más sobre tu proyecto (opcional):
            </Label>
            <Textarea
              id="projectDetails"
              placeholder="Describe brevemente tu idea, necesidades o el problema que buscas resolver..."
              className="bg-input text-foreground placeholder:text-muted-foreground rounded-xl text-base min-h-[150px] p-4 border-border focus:border-border"
              value={projectDetails}
              onChange={(e) => setProjectDetails(e.target.value)}
              disabled={preferDirectContact || isLoading}
              aria-label="Detalles del proyecto"
            />
          </div>

          <div className="flex items-center space-x-3">
            <Checkbox
              id="preferDirectContact"
              checked={preferDirectContact}
              onCheckedChange={(checked) => setPreferDirectContact(checked as boolean)}
              disabled={isLoading}
              aria-label="Prefiero que me contacten para brindar esta información"
              className="h-5 w-5 text-primary focus:ring-primary border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            />
            <Label htmlFor="preferDirectContact" className="text-base text-muted-foreground cursor-pointer">
              Prefiero que me contacten para brindar esta información.
            </Label>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={handleBackToEmail}
              className="flex flex-1 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 text-base font-bold leading-normal tracking-[0.015em] border-primary text-primary hover:bg-primary/10"
              disabled={isLoading}
            >
              Modificar Email
            </Button>
            <Button
              type="submit"
              className="flex flex-1 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground text-base font-bold leading-normal tracking-[0.015em]"
              disabled={isLoading}
            >
              {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              Enviar Solicitud
            </Button>
          </div>
        </form>
      )}
    </section>
  );
}
