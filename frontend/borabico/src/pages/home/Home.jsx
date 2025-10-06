import React, { useEffect } from "react";
import * as S from "./styledHome.js";

function Home() {
  useEffect(() => {
    document.title = "BoraBico";
  }, []);
  return (
    <>  
      <S.Main>
        <S.MainLeftContent>
          <S.Textbox>
            <S.Title>
              A grana encurtou?
            </S.Title>
            <S.SectionDescription>
              O Borabico te ajuda a encontrar bicos e oportunidades reais para completar sua renda e conquistar mais independência financeira.
            </S.SectionDescription>
          </S.Textbox>
          <S.CTAButton to="/cadastrar">Faça seu cadastro já</S.CTAButton>
        </S.MainLeftContent>

        <S.MainRightContent>
          <S.ContainerMainImage>
            <S.MainImage src="/public/economy.png" />
          </S.ContainerMainImage>
        </S.MainRightContent>
      </S.Main>

      <S.SelfEmployed>
        <S.SectionLeftContent>
          <S.ContainerSectionImage>
            <S.SectionImage src="/public/freelancer.png" />
          </S.ContainerSectionImage>
        </S.SectionLeftContent>

        <S.SectionRightContent>
          <S.Textbox>
            <S.TitleSE>
              Trabalho Autônomo: Liberdade para Construir Sua Carreira
            </S.TitleSE>
            <S.DescriptionSE>
              Descubra oportunidades que permitem flexibilidade total no seu
              horário e localização. Seja dono do seu próprio tempo e construa
              uma carreira baseada nas suas habilidades e paixões.
            </S.DescriptionSE>
          </S.Textbox>
        </S.SectionRightContent>
      </S.SelfEmployed>

      <S.HomeOffice>
        <S.SectionLeftContent>
          <S.Textbox>
            <S.SectionTitle>
              Home Office: Trabalhe de Onde Estiver
            </S.SectionTitle>
            <S.SectionDescription>
              Encontre vagas remotas que combinam com seu estilo de vida.
              Elimine o deslocamento, ganhe mais tempo para o que importa e
              mantenha o equilíbrio entre vida pessoal e profissional.
            </S.SectionDescription>
          </S.Textbox>
        </S.SectionLeftContent>

        <S.SectionRightContent>
          <S.ContainerSectionImage>
            <S.SectionImage src="/public/remotely.png" />
          </S.ContainerSectionImage>
        </S.SectionRightContent>
      </S.HomeOffice>

      <S.WorkQuality>
        <S.SectionLeftContent>
          <S.ContainerSectionImage>
            <S.SectionImage src="/public/quality.png" />
          </S.ContainerSectionImage>
        </S.SectionLeftContent>

        <S.SectionRightContent>
          <S.Textbox>
            <S.TitleWQ>
              Qualidade de Trabalho em Primeiro Lugar
            </S.TitleWQ>
            <S.DescriptionWQ>
              Conectamos você apenas com empresas e projetos que valorizam
              profissionais qualificados. Ambiente respeitoso, remuneração justa
              e oportunidades de crescimento real.
            </S.DescriptionWQ>
          </S.Textbox>
        </S.SectionRightContent>
      </S.WorkQuality>
    </>
  );
}

export default Home;
