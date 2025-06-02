'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import React from 'react';

export function ContactSection() {
  const { toast } = useToast();
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Basic email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast({
        title: "Correo Inválido",
        description: "Por favor, ingrese una dirección de correo electrónico válida.",
        variant: "destructive",
      });
      return;
    }
    
    // Here you would typically send the email to your backend
    console.log('Email submitted:', email);
    toast({
      title: "Mensaje Enviado",
      description: "Gracias por contactarnos. Nos pondremos en contacto pronto.",
    });
    setEmail(''); // Clear input after submission
  };

  return (
    <section id="contacto" className="py-16 md:py-24 bg-card/5 rounded-lg">
      <div className="container_ max-w-[960px] mx-auto px-4">
        <h2 className="font-headline text-3xl font-bold text-center sm:text-4xl md:text-5xl mb-8">
          Contacto
        </h2>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex flex-col sm:flex-row items-center gap-4">
          <Input
            type="email"
            placeholder="Su Correo Electrónico"
            className="flex-grow bg-input text-foreground placeholder:text-muted-foreground rounded-md h-12 px-4 text-base"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Su Correo Electrónico"
          />
          <Button 
            type="submit"
            size="lg"
            className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground rounded-md h-12 px-8 text-base font-semibold"
          >
            Enviar
          </Button>
        </form>
      </div>
    </section>
  );
}
