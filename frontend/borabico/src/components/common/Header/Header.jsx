import React, { useState } from "react";
import * as S from "./styledHeader";
import { Link } from "react-router-dom";
import { useHeader } from "../../../hooks/useHeader";
import {
  BriefcaseBusiness,
  Plus,
  User,
  ChevronDown,
  ChevronUp,
  LogOut,
} from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

function Header() {
  const { handleLogout } = useHeader();
  const [isLogged] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Header>
      <S.Logo>
        <Link to="/">
          <S.Image src="/borabico.ico" alt="Logo Borabico" />
        </Link>

        <S.Slogan>
          Bicos <S.Span>rápidos</S.Span>, oportunidades <S.Span>reais</S.Span>.
        </S.Slogan>
      </S.Logo>

      {isLogged ? (
        <S.Navbar>
          <S.Items to="/vagas">
            <BriefcaseBusiness size={18} />
            Vagas
          </S.Items>
          <S.Items to="/publicar">
            <Plus size={18} />
            Publicar vaga
          </S.Items>

          <DropdownMenu.Root
            open={isOpen}
            onOpenChange={setIsOpen}
            modal={false}
          >
            <S.Trigger>
              <S.Photo>
                <User size={18} />
              </S.Photo>
              <S.Flex>
                Eu
                {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </S.Flex>
            </S.Trigger>
            <S.Content>
              <DropdownMenu.Item asChild>
                <S.Item to="/perfil">
                  <User size={16} />
                  Perfil
                </S.Item>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <S.Item as="button" onClick={handleLogout}>
                  <LogOut size={16} />
                  Sair
                </S.Item>
              </DropdownMenu.Item>
            </S.Content>
          </DropdownMenu.Root>
        </S.Navbar>
      ) : (
        <S.Buttons>
          <S.Register to="/cadastrar">Cadastre-se agora</S.Register>
          <S.Login to="/entrar">Entrar</S.Login>
        </S.Buttons>
      )}
    </S.Header>
  );
}

export default Header;
