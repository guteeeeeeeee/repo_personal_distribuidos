type TarjetaProps = {
  titulo: string;
  descripcion: string;
};

export default function Tarjeta({ titulo, descripcion }: TarjetaProps) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", margin: "10px 0" }}>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
    </div>
  );
}
