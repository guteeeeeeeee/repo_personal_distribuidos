export default function HomePage() {
  return (
    <main className="min-h-screen p-8 bg-gray-100 text-gray-900">
      <section className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-3xl font-bold mb-4">
          Bienvenido a mi página
        </h1>

        <p className="mb-4">
          Esta es una página de ejemplo generada para rellenar contenido.  
          Podés editarla libremente y agregar secciones, componentes o estilos.
        </p>

        <h2 className="text-xl font-semibold mb-2">Sección de información</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Item 1: Descripción de algo</li>
          <li>Item 2: Otro punto importante</li>
          <li>Item 3: Detalle adicional</li>
        </ul>

        <button
          onClick={() => alert("¡Botón clickeado!")}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Hacer algo
        </button>
      </section>
    </main>
  );
}
