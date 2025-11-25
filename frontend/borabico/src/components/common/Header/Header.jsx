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
  Menu,
  X,
} from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

function Header() {
  const { isLogged, handleLogout, profile } = useHeader();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleMobileLogout = () => {
    handleLogout();
    closeMobileMenu();
  };

  return (
    <>
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
          <>
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
                <DropdownMenu.Trigger asChild>
                  <S.Trigger disabled={loading}>
                    <S.Photo>
                      {profile?.avatar ? (
                        <img src={profile.avatar} alt={profile.name} />
                      ) : (
                        <User size={18} />
                      )}
                    </S.Photo>
                    <S.Flex>
                      Eu
                      {isOpen ? (
                        <ChevronUp size={18} />
                      ) : (
                        <ChevronDown size={18} />
                      )}
                    </S.Flex>
                  </S.Trigger>
                </DropdownMenu.Trigger>
                <S.Content>
                  <DropdownMenu.Item asChild>
                    <S.Item to={`/perfil/${profile?.id}`}>
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

            <S.MenuButton onClick={() => setIsMobileMenuOpen(true)}>
              <Menu size={24} />
            </S.MenuButton>
          </>
        ) : (
          <>
            <S.Buttons>
              <S.Register to="/cadastrar">Cadastre-se agora</S.Register>
              <S.Login to="/entrar">Entrar</S.Login>
            </S.Buttons>

            <S.MenuButton onClick={() => setIsMobileMenuOpen(true)}>
              <Menu size={24} />
            </S.MenuButton>
          </>
        )}
      </S.Header>

      <S.MobileOverlay 
        isOpen={isMobileMenuOpen} 
        onClick={closeMobileMenu}
      />

      <S.MobileMenu isOpen={isMobileMenuOpen}>
        <S.MobileHeader>
          <S.CloseButton onClick={closeMobileMenu}>
            <X size={24} />
          </S.CloseButton>
        </S.MobileHeader>

        {isLogged ? (
          <>
            <S.UserInfo to={`/perfil/${profile?.id}`}>
              <S.MobilePhoto>
                {profile?.avatar ? (
                  <img src={profile.avatar} alt={profile.name} />
                ) : (
                  <User size={18} />
                )}
              </S.MobilePhoto >
              <S.Username>{profile?.name}</S.Username>
            </S.UserInfo>

            <S.MobileNav>
              <S.MobileItem to="/vagas" onClick={closeMobileMenu}>
                <BriefcaseBusiness size={18} />
                Vagas
              </S.MobileItem>
              <S.MobileItem to="/publicar" onClick={closeMobileMenu}>
                <Plus size={18} />
                Publicar vaga
              </S.MobileItem>
              <S.MobileButton className="logout" onClick={handleMobileLogout}>
                <LogOut size={18} />
                Sair
              </S.MobileButton>
            </S.MobileNav>
          </>
        ) : (
          <S.MobileButtons>
            <S.MobileRegister to="/cadastrar" onClick={closeMobileMenu}>
              Cadastre-se agora
            </S.MobileRegister>
            <S.MobileLogin to="/entrar" onClick={closeMobileMenu}>
              Entrar
            </S.MobileLogin>
          </S.MobileButtons>
        )}
      </S.MobileMenu>
    </>
  );
}

export default Header;