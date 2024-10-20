import { useChiste } from "../hooks/useChiste";

export const Chiste = () => {
  const { chiste, error, obtenerChiste } = useChiste();

  return (
    <div>
      {error ? <p>{error}</p> : <p>{chiste ? chiste : "Cargando chiste..."}</p>}
      <button onClick={obtenerChiste}>Pulsa aquí</button>
    </div>
  );
};
