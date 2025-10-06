import React, { useEffect } from 'react'
import useRegister from '../../../hooks/useRegister.jsx'
import * as S from './styledRegister'
import Input from '../../../components/common/Input/Input'
import Button from '../../../components/common/Buttons/button'
import { Controller } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { PatternFormat } from 'react-number-format'
import { PulseLoader } from 'react-spinners'


function Register() {
  useEffect(() => {
    document.title = "Cadastrar"
  }, []);

  const {
    register,
    handleSubmit,
    errors,
    control,
    onSubmit,
    loading
  } = useRegister()

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
              <S.Title>Cadastrar</S.Title>

              <S.InputContainer>
                <S.InputContent>
                  <S.InputTitle>Nome</S.InputTitle>
                  <Input
                    {...register("firstName", {
                      required: "Este campo é obrigatório.",
                      minLength: {
                        value: 2,
                        message: "Nome deve ter pelo menos 2 caracteres."
                      },
                      maxLength: {
                        value: 50,
                        message: "Nome não pode ter mais de 50 caracteres."
                      }
                    })}
                    type="text"
                    placeholder="Nome"
                    name="firstName"
                  />
                  {errors.firstName && <S.InputError>{errors.firstName.message}</S.InputError>}
                </S.InputContent>

                <S.InputContent>
                  <S.InputTitle>Sobrenome</S.InputTitle>
                  <Input
                    {...register("lastName", {
                      required: "Este campo é obrigatório.",
                      minLength: {
                        value: 2,
                        message: "Sobrenome deve ter pelo menos 2 caracteres."
                      },
                      maxLength: {
                        value: 50,
                        message: "Sobrenome não pode ter mais de 50 caracteres."
                      }
                    })}
                    type="text"
                    placeholder="Sobrenome"
                    name="lastName"
                  />
                  {errors.lastName && <S.InputError>{errors.lastName.message}</S.InputError>}
                </S.InputContent>

                <S.InputContent>
                  <S.InputTitle>Email</S.InputTitle>
                  <Input
                    {...register("email", {
                      required: "Este campo é obrigatório.",
                      pattern: {
                        value: /^[A-Za-z0-9._-]+@[A-Za-z]+(\.[A-Za-z]+)+$/,
                        message: "Email inválido."
                      },
                      maxLength: {
                        value: 100,
                        message: "Email não pode ter mais de 100 caracteres."
                      }
                    })}
                    type="email"
                    placeholder="Email"
                    name="email"
                  />
                  {errors.email && <S.InputError>{errors.email.message}</S.InputError>}
                </S.InputContent>

                <S.InputContent>
                  <S.InputTitle>Senha</S.InputTitle>
                  <Input
                    {...register("password", {
                      required: "Este campo é obrigatório",
                      minLength: {
                        value: 6,
                        message: "Senha deve ter pelo menos 6 caracteres."
                      }
                    })}
                    type="password"
                    placeholder="Senha"
                    name="password"
                  />
                  {errors.password && <S.InputError>{errors.password.message}</S.InputError>}
                </S.InputContent>

                <S.InputContent>
                  <S.InputTitle>CPF</S.InputTitle>
                  <Controller
                    name="cpf"
                    control={control}
                    rules={{
                      required: "Este campo é obrigatório.",
                      pattern: {
                        value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
                        message: "CPF inválido."
                      }
                    }}
                    render={({ field }) => (
                      <PatternFormat
                        {...field}
                        format="###.###.###-##"
                        placeholder="000.000.000-00"
                        customInput={Input}
                      />
                    )}
                  />
                  {errors.cpf && <S.InputError>{errors.cpf.message}</S.InputError>}
                </S.InputContent>

                <S.InputContent>
                  <S.InputTitle>Telefone</S.InputTitle>
                  <Controller
                    name="phone"
                    control={control}
                    rules={{
                      required: "Este campo é obrigatório.",
                      pattern: {
                        value: /^\(\d{2}\) \d{5}-\d{4}$/,
                        message: "Número de telefone inválido."
                      }
                    }}
                    render={({ field }) => (
                      <PatternFormat
                        {...field}
                        format="(##) #####-####"
                        placeholder="(00) 00000-0000"
                        customInput={Input}
                      />
                    )}
                  />
                  {errors.phone && <S.InputError>{errors.phone.message}</S.InputError>}
                </S.InputContent>
              </S.InputContainer>

              <Button type="submit" onSubmit={handleSubmit(onSubmit)} loading={loading}>
                {loading ? <PulseLoader color="#fff" loading={true} size={10} /> : "Cadastrar"}
              </Button>

              <S.AndContainer>
                <S.Line />
                <S.AndText>ou</S.AndText>
                <S.Line />
              </S.AndContainer>

              <S.LoginContainer>
                <S.LoginTitle>
                  Já possui uma conta? &nbsp;
                  <S.Login to="/entrar">Entre agora</S.Login>
                </S.LoginTitle>
              </S.LoginContainer>
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

export default Register;