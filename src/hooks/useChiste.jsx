import { useState } from "react";

export const useChiste = () => {
  const [chiste, setChiste] = useState(null);
  const [error, setError] = useState(null);

  const obtenerChiste = async () => {
    try {
      const response = await fetch(
        `https://v2.jokeapi.dev/joke/Any?lang=es&timestamp=${new Date().getTime()}`
      );
      const data = await response.json();
      if (!data.error) {
        setChiste(data.joke || `${data.setup} - ${data.delivery}`);
      } else {
        setError("No se pudo obtener el chiste.");
      }
    } catch (error) {
      setError("Error en la red al obtener el chiste.");
    }
  };

  return { chiste, error, obtenerChiste };
};
