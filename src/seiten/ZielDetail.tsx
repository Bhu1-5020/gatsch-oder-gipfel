import { useParams } from "react-router-dom";

// Detailseite für ein Ausflugsziel.
// Die id kommt aus der Adresse: /ziel/rax → id = "Rax"
function ZielDetail() {
  const { id } = useParams<{ id: string }>();

  return (
    <section>
      <h1>Ausflugsziel: {id}</h1>
      <p>Hier kommt dann das Wetter Stunde für Stunde hin.</p>
    </section>
  );
}

export default ZielDetail;
