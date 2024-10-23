import { useChiste } from "../hooks/useChiste";

export const Chiste = () => {
  const { chiste, error, obtenerChiste } = useChiste();

  return (
    <div className="flex flex-col space-y-4 justify-center items-center">
      <div className="text-red-400 ">
        {error ? (
          <p>{error}</p>
        ) : (
          <p>{chiste ? chiste : "Cargando chiste..."}</p>
        )}
      </div>
      <button className="bg-purple-700 p-2 rounded-xl " onClick={obtenerChiste}>
        Pulsa aquí
      </button>
    </div>
  );
};
