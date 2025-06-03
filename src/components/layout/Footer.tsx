import Link from 'next/link';

export function Footer() {
  return (
    <footer className="flex justify-center border-t border-border/40 bg-background">
      <div className="flex max-w-[960px] flex-1 flex-col">
        <div className="flex flex-col gap-6 px-5 py-10 text-center @container">
          <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
            <Link href="/privacy-policy" className="text-muted-foreground text-base font-normal leading-normal min-w-40 transition-colors hover:text-foreground">
              Política de Privacidad
            </Link>
            <Link href="/terms-of-service" className="text-muted-foreground text-base font-normal leading-normal min-w-40 transition-colors hover:text-foreground">
              Términos de Servicio
            </Link>
          </div>
          <p className="text-muted-foreground text-base font-normal leading-normal">
            &copy; {new Date().getFullYear()} HephaCode. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
