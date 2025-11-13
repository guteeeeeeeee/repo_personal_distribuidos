"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

import Link from "next/link";

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <html lang="es">
      <body>
		<QueryClientProvider client={queryClient}>
      		<header>
          		<nav>
          			<Link href="/">Inicio</Link>
          		</nav>
        	</header>

        	<main>{children}</main>

        	<footer>Proyecto Distribuidos</footer>
        </QueryClientProvider>
      </body>
    </html>
  );
}
