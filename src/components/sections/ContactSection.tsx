'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'; // Keep ShadCN Input
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
    <section id="contacto" className="px-4 py-3">
      <h2 className="text-foreground text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-2"> {/* Adjusted pt from pt-5 */}
        Contacto
      </h2>
      
      {!isEmailSubmitted ? (
        // Using a div for layout to match HTML structure if needed, but form is fine
        <form onSubmit={handleEmailSubmit} className="max-w-[480px] flex flex-col sm:flex-row items-end gap-4">
          <label className="flex flex-col min-w-40 flex-1">
            <Input
              type="email"
              placeholder="Su Correo Electrónico"
              // Apply classes similar to HTML: rounded-xl, bg-input, text-foreground, placeholder:text-muted-foreground, h-14, p-4
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-foreground focus:outline-0 focus:ring-0 border-none bg-input focus:border-none h-14 placeholder:text-muted-foreground p-4 text-base font-normal leading-normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Su Correo Electrónico"
              disabled={isLoading}
            />
          </label>
          {/* This button is part of the initial email submission step in current logic, 
              HTML implies a single "Enviar" button. We'll keep the two-step logic for now.
              The "Continuar" text and its button will show. The HTML's "Enviar" button appears later.
          */}
           <Button 
              type="submit"
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground text-sm font-bold leading-normal tracking-[0.015em]"
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
              onClick={handleBackToEmail}
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 text-sm font-bold leading-normal tracking-[0.015em]"
              disabled={isLoading}
            >
              Modificar Email
            </Button>
            <Button 
              type="submit"
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground text-sm font-bold leading-normal tracking-[0.015em]"
              disabled={isLoading}
            >
              {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              Enviar Solicitud
            </Button>
          </div>
        </form>
      )}
       {/* The single "Enviar" button from HTML would appear here if we didn't have the two-step logic.
          For now, the "Continuar" and "Enviar Solicitud" buttons handle the flow.
       */}
    </section>
  );
}
