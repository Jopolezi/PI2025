import { useEffect, useState } from "react";
import axios from "axios";

export function useIbge() {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCities() {
      try {
        const res = await axios.get(
          "https://servicodados.ibge.gov.br/api/v1/localidades/municipios"
        );

        const lista = res.data
          .filter((cidade) => {
            return cidade.nome && cidade.microrregiao?.mesorregiao?.UF?.sigla;
          })
          .map((cidade) => ({
            value: cidade.id,
            label: `${cidade.nome} - ${cidade.microrregiao.mesorregiao.UF.sigla}`,
            nome: cidade.nome,
            uf: cidade.microrregiao.mesorregiao.UF.sigla,
          }));

        setCities(lista);
      } catch (error) {
        console.error("Erro ao carregar cidades:", error);
        setCities([]);
      } finally {
        setLoading(false);
      }
    }

    loadCities();
  }, []);

  return { cities, loading };
}
