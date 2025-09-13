import Header from "./componentes/Header"
import Saludo from "./componentes/Saludo"
import Tarjeta from "./componentes/Tarjeta"
import Gatito from "./componentes/Imagen"

export default function HomePage() {
  return (
    <main style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <Header />
      <Saludo />
      <h1>Buen dia estrellitas la tierra les dice hola</h1>
      <Tarjeta titulo="Actividad 3" descripcion="Este es un ejemplo de componente reutilizable." />
      <Tarjeta titulo="Next.js + TS" descripcion="Usando App Router con TypeScript." />
      <Gatito />
      <Gatito /> 
    </main>
  );
}
