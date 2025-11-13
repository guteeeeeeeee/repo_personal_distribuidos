import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <header>
          <nav>
          	<Link href="/">Inicio</Link>
          </nav>
        </header>

        <main>{children}</main>

        <footer>Proyecto Distribuidos</footer>
      </body>
    </html>
  );
}
