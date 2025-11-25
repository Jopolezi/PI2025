import React, { useEffect, useState } from "react";
import * as S from "./styledFeed";
import { CardFeed } from "@/components/feed/card/CardFeed";
import { Search, SlidersHorizontal } from "lucide-react";
import Select from "react-select";
import { category } from "@/data/category";
import axios from "axios";

export default function Feed() {
  useEffect(() => {
    document.title = "Vagas";
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [appliedCategory, setAppliedCategory] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:3000/api/post");
        setPosts(response.data.data || []);
      } catch (error) {
        console.error("Erro ao carregar o post", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = appliedCategory 
      ? post.category === appliedCategory.value 
      : true;
    
    return matchesSearch && matchesCategory;
  });

  const handleApplyFilter = () => {
    setAppliedCategory(selectedCategory);
    setIsOpen(false);
  };

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
                <S.SearchInput
                  type="text"
                  placeholder="Busque uma vaga"
                  onChange={(e) => setSearch(e.target.value)}
                />
                <S.SearchIcon>
                  <Search />
                </S.SearchIcon>
              </S.Group>

              <S.Filters>
                <S.FilterButton onClick={() => setIsOpen(!isOpen)}>
                  <SlidersHorizontal size={20} />
                </S.FilterButton>

                {isOpen && (
                  <S.FilterMenu>
                    <S.FilterTitle>Filtrar por categoria</S.FilterTitle>

                    <S.SelectWrapper>
                      <Select
                        options={category}
                        value={selectedCategory}
                        onChange={setSelectedCategory}
                        classNamePrefix="react-select"
                        placeholder="Selecione a categoria"
                        isSearchable={true}
                        isClearable={true}
                        noOptionsMessage={() => "Nenhuma opção encontrada"}
                      />
                    </S.SelectWrapper>

                    <S.Confirm onClick={handleApplyFilter}>
                      Aplicar
                    </S.Confirm>
                  </S.FilterMenu>
                )}
              </S.Filters>
            </S.Search>
          </S.Flex>
          <S.Divider />

          <S.JobsGrid>
            {filteredPosts.map((post) => (
              <CardFeed key={post.id} post={post} />
            ))}
          </S.JobsGrid>
        </S.Content>
      </S.Container>
    </>
  );
}