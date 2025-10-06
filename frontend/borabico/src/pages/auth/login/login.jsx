import { useEffect } from "react"
import useLogin from "@/hooks/useLogin.jsx"
import * as S from "./styledLogin"
import Input from "@/components/common/input/Input"
import Button from "@/components/common/buttons/Button"
import { Link } from "react-router-dom"
import { PulseLoader } from "react-spinners"

function Login() {
  useEffect(() => {
    document.title = "Entrar";
  }, []);

  const { register, handleSubmit, errors, onSubmit, loading } = useLogin();

  return (
    <>
        <S.Header>
          <S.ContainerLogo to="/">
            <S.Logo src="/public/borabico.ico" alt="Logo" />
            <S.LogoText>Bora<S.Span>bico</S.Span></S.LogoText>
          </S.ContainerLogo>
        </S.Header>
        <S.Container>
          <S.Content>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <S.Title>Entrar</S.Title>
              <S.InputTitle>Email</S.InputTitle>
              <Input
                {...register("user", {
                  required: "Este campo é obrigatório.",
                  pattern: {
                    value: /^[A-Za-z0-9._-]+@[A-Za-z]+(\.[A-Za-z]+)+$/,
                    message: "Email inválido.",
                  },
                  maxLength: {
                    value: 100,
                    message: "Email não pode ter mais de 100 caracteres.",
                  },
                })}
                type="email"
                placeholder="Email"
              />
              {errors.user && (
                <S.InputError>{errors.user.message}</S.InputError>
              )}

              <S.InputTitle>Senha</S.InputTitle>
              <Input
                {...register("password", {
                  required: "Este campo é obrigatório",
                  minLength: {
                    value: 6,
                    message: "Senha deve ter pelo menos 6 caracteres.",
                  },
                })}
                type="password"
                placeholder="Senha"
              />
              {errors.password && (
                <S.InputError>{errors.password.message}</S.InputError>
              )}

              <Button type="submit" loading={loading}>
                {loading ? (
                  <PulseLoader color="#fff" loading={true} size={10} />
                ) : (
                  "Entrar"
                )}
              </Button>

              <S.MoreOptionsContainer>
                <S.RememberContainer>
                  <S.RememberCheckbox type="checkbox" />
                  <S.RememberCheckboxText>Lembrar senha</S.RememberCheckboxText>
                </S.RememberContainer>

                <S.ForgotPassword to="/recuperar" state={{ fromLogin: true }}>
                  Esqueceu a senha?
                </S.ForgotPassword>
              </S.MoreOptionsContainer>

              <S.AndContainer>
                <S.Line />
                <S.AndText>ou</S.AndText>
                <S.Line />
              </S.AndContainer>

              <S.RegisterContainer>
                <S.RegisterTitle>
                  Não possui uma conta? &nbsp;
                  <S.Register to="/cadastrar">Cadastre-se agora</S.Register>
                </S.RegisterTitle>
              </S.RegisterContainer>
            </S.Form>
          </S.Content>
        </S.Container>

        <S.Footer>
          <S.FooterText>
            &#169; 2025 BORABICO. Todos os direitos reservados.
          </S.FooterText>
          <S.FooterLinks>
            <Link to="/">Política de Privacidade</Link>
            <Link to="/">Termos de Serviço</Link>
          </S.FooterLinks>
        </S.Footer>
    </>
  );
}

export default Login;
