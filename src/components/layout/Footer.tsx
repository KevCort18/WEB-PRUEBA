import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container_ max-w-[960px] mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex gap-6 text-sm">
            <Link href="/privacy-policy" className="text-muted-foreground transition-colors hover:text-foreground">
              Política de Privacidad
            </Link>
            <Link href="/terms-of-service" className="text-muted-foreground transition-colors hover:text-foreground">
              Términos de Servicio
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} HephaCode. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
