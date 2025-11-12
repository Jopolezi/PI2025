import React, { useEffect } from "react";
import * as S from "./styledFeed";
import { CardFeed } from "@/components/feed/card/CardFeed";

export default function Feed() {
  useEffect(() => {
    document.title = "Vagas";
  }, []);

  return (
    <>
      <S.Container>
        <S.Content>
          <S.Title>Procurando uma oportunidade de trabalho?</S.Title>
          <S.Subtitle>
            Veio ao lugar certo! Aqui no Borabico você encontra a vaga ideal
            para você!
          </S.Subtitle>

          <S.Divider />

          <S.JobsGrid>
            <CardFeed />
          </S.JobsGrid>
        </S.Content>
      </S.Container>
    </>
  );
}
