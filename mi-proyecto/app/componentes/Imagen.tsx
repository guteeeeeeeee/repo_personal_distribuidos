import Image from "next/image";
import gato from "./gatubi.png";

export default function Imagen() {
  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", maxWidth: "300px" }}>
      <Image
        src={gato}
        alt="un gatito"
        width={200}      
        height={150}
      />
    </div>
  );
}
