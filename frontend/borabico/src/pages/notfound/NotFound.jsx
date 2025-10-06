import { useEffect } from "react";
import * as S from "./styledNotFound";

function NotFound() {
  useEffect(() => {
    document.title = "Página não encontrada";
  }, []);

  return (
    <>
      <S.Container>
          <S.Content>
            <S.Image src="/404.png" alt="Página não encontrada" />

            <S.FlexDirection>
              <S.Text>Página não encontrada</S.Text>
              <S.Label>
                Desculpe, a página que você está procurando não existe. Volte
                para a <S.Home to="/">página inicial.</S.Home>
              </S.Label>
            </S.FlexDirection>
          </S.Content>
      </S.Container>
    </>
  );
}

export default NotFound;
