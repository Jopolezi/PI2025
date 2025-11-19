import React, { useEffect, useState } from "react";
import * as S from "./styledFeed";
import { CardFeed } from "@/components/feed/card/CardFeed";
import { Search, SlidersHorizontal } from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Select from "react-select";
import { category } from "@/data/category";

export default function Feed() {
  useEffect(() => {
    document.title = "Vagas";
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <>
      <S.Container>
        <S.Content>
          <S.Flex>
            <S.Textbox>
              <S.Title>Procurando uma oportunidade de trabalho?</S.Title>
              <S.Subtitle>
                Veio ao lugar certo! Aqui no Borabico você encontra a vaga ideal
                para você!
              </S.Subtitle>
            </S.Textbox>

            <S.Search>
              <S.Group>
                <S.SearchInput type="text" placeholder="Busque uma vaga" />
                <S.SearchIcon>
                  <Search />
                </S.SearchIcon>
              </S.Group>

              <S.Filters>
                <DropdownMenu.Root
                  open={isOpen}
                  onOpenChange={setIsOpen}
                  modal={false}
                >
                  <DropdownMenu.Trigger asChild>
                    <S.FilterButton>
                      <SlidersHorizontal size={20} />
                    </S.FilterButton>
                  </DropdownMenu.Trigger>

                  <DropdownMenu.Portal>
                    <S.FiltersContent
                      onPointerDownOutside={(e) => {
                        if (e.target.closest(".react-select"))
                          e.preventDefault();
                      }}
                      onInteractOutside={(e) => {
                        if (e.target.closest(".react-select"))
                          e.preventDefault();
                      }}
                    >
                      <DropdownMenu.Item onSelect={(e) => e.preventDefault()}>
                        <S.FilterSection>
                            <S.FilterTitle>Filtros de categoria</S.FilterTitle>
                            <S.Divider />
                            <S.FilterLabel>Categoria</S.FilterLabel>
                          <S.SelectWrapper>
                            <Select
                              options={category}
                              value={selectedCategory}
                              onChange={setSelectedCategory}
                              classNamePrefix="react-select"
                              placeholder="Selecione a categoria"
                              isSearchable={true}
                              isClearable={true}
                              noOptionsMessage={() =>
                                "Nenhuma opção encontrada"
                              }
                            />
                          </S.SelectWrapper>

                          <S.Confirm>Aplicar</S.Confirm>
                        </S.FilterSection>
                      </DropdownMenu.Item>
                    </S.FiltersContent>
                  </DropdownMenu.Portal>
                </DropdownMenu.Root>
              </S.Filters>
            </S.Search>
          </S.Flex>
          <S.Divider />

          <S.JobsGrid>
            <CardFeed />
          </S.JobsGrid>
        </S.Content>
      </S.Container>
    </>
  );
}
