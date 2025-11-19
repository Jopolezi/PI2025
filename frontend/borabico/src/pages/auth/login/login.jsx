import { useEffect, useState } from "react";
import useLogin from "@/hooks/useLogin.jsx";
import * as S from "./styledLogin";
import Input from "@/components/common/input/Input";
import Button from "@/components/common/buttons/Button";
import { Link } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { Eye, EyeClosed, ArrowLeft } from "lucide-react";

function Login() {
  useEffect(() => {
    document.title = "Entrar";
  }, []);

  const [visibility, setVisibility] = useState(false);

  const showPassword = () => {
    setVisibility(!visibility);
  };

  const { register, handleSubmit, errors, onSubmit, loading } = useLogin();

  return (
    <>
      <S.Container>
        <S.ShapeTop />
        <S.ShapeBottom />
        <S.Content>
          <S.Slogan>
            Aqui todo mundo tem <span>chance</span>.
          </S.Slogan>
          <S.Form onSubmit={handleSubmit(onSubmit)}>
            <S.Return to="/">
              <ArrowLeft />
            </S.Return>
            <S.Title>Entrar</S.Title>

            <S.InputContent>
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
            </S.InputContent>

            <S.InputContent>
              <S.InputTitle>Senha</S.InputTitle>
              <S.Flex>
                <Input
                  {...register("password", {
                    required: "Este campo é obrigatório",
                    minLength: {
                      value: 6,
                      message: "Senha deve ter pelo menos 6 caracteres.",
                    },
                  })}
                  type={visibility ? "text" : "password"}
                  placeholder="Senha"
                />
                <S.Visibility type="button" onClick={showPassword}>
                  {visibility ? <EyeClosed /> : <Eye />}
                </S.Visibility>
              </S.Flex>
              {errors.password && (
                <S.InputError>{errors.password.message}</S.InputError>
              )}
            </S.InputContent>

            <Button type="submit" loading={loading}>
              {loading ? (
                <PulseLoader color="#fff" loading={true} size={10} />
              ) : (
                "Entrar"
              )}
            </Button>

            <S.MoreOptionsContainer>
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
    </>
  );
}

export default Login;
