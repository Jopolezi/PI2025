import React, { useEffect, useState } from "react";
import useRegister from "../../../hooks/useRegister.jsx";
import * as S from "./styledRegister";
import Input from "../../../components/common/Input/Input";
import Button from "../../../components/common/Buttons/button";
import { Controller } from "react-hook-form";
import { PatternFormat } from "react-number-format";
import { PulseLoader } from "react-spinners";
import { gender } from "../../../data/gender.js";
import Select from "react-select";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Eye, EyeClosed, ArrowLeft } from "lucide-react";

function Register() {
  useEffect(() => {
    document.title = "Cadastrar";
  }, []);

  const [visibility, setVisibility] = useState(false);

  const showPassword = () => {
    setVisibility(!visibility);
  };

  const {
    register,
    handleSubmit,
    errors,
    control,
    onSubmit,
    loading,
    watch,
    verifyPassword,
  } = useRegister();

  const { length, uppercase, number, char } = verifyPassword();

  return (
    <>
      <S.Container>
        <S.ShapeTop />
        <S.ShapeBottom />
        <S.Content>
          <S.Form onSubmit={handleSubmit(onSubmit)}>
            <S.Title>Cadastrar</S.Title>

            <S.InputContainer>
              <S.InputContent>
                <S.InputTitle>Nome</S.InputTitle>
                <Input
                  {...register("name", {
                    required: "Este campo é obrigatório.",
                    minLength: {
                      value: 2,
                      message: "Nome deve ter pelo menos 2 caracteres.",
                    },
                    maxLength: {
                      value: 50,
                      message: "Nome não pode ter mais de 50 caracteres.",
                    },
                  })}
                  type="text"
                  placeholder="Nome"
                  name="name"
                />
                {errors.name && (
                  <S.InputError>{errors.name.message}</S.InputError>
                )}
              </S.InputContent>

              <S.InputContent>
                <S.InputTitle>Sobrenome</S.InputTitle>
                <Input
                  {...register("surname", {
                    required: "Este campo é obrigatório.",
                    minLength: {
                      value: 2,
                      message: "Sobrenome deve ter pelo menos 2 caracteres.",
                    },
                    maxLength: {
                      value: 50,
                      message: "Sobrenome não pode ter mais de 50 caracteres.",
                    },
                  })}
                  type="text"
                  placeholder="Sobrenome"
                  name="surname"
                />
                {errors.surname && (
                  <S.InputError>{errors.surname.message}</S.InputError>
                )}
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
                      message: "CPF inválido.",
                    },
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
                {errors.cpf && (
                  <S.InputError>{errors.cpf.message}</S.InputError>
                )}
              </S.InputContent>

              <S.InputContent>
                <S.InputTitle>Gênero</S.InputTitle>
                <Controller
                  name="gender"
                  control={control}
                  rules={{ required: "Este campo é obrigatório." }}
                  render={({ field }) => (
                    <>
                      <S.SelectWrapper>
                        <Select
                          {...field}
                          options={gender}
                          classNamePrefix="react-select"
                          placeholder="Selecione o seu gênero"
                          isSearchable={false}
                        />
                      </S.SelectWrapper>
                    </>
                  )}
                />

                {errors.gender && (
                  <S.InputError>{errors.gender.message}</S.InputError>
                )}
              </S.InputContent>

              <S.InputContent>
                <S.InputTitle>Email</S.InputTitle>
                <Input
                  {...register("email", {
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
                  name="email"
                />
                {errors.email && (
                  <S.InputError>{errors.email.message}</S.InputError>
                )}
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
                      message: "Número de telefone inválido.",
                    },
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
                {errors.phone && (
                  <S.InputError>{errors.phone.message}</S.InputError>
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
                        message: "A senha deve ter no mínimo 6 caracteres",
                      },
                      pattern: {
                        value:
                          /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/,
                      },
                    })}
                    type={visibility ? "text" : "password"}
                    placeholder="Senha"
                    name="password"
                  />

                  <S.Visibility type="button" onClick={showPassword}>
                    {visibility ? <EyeClosed /> : <Eye />}
                  </S.Visibility>
                </S.Flex>
                {errors.password && (
                  <S.InputError>{errors.password.message}</S.InputError>
                )}
              </S.InputContent>

              <S.InputContent>
                <S.InputTitle>Confirmar Senha</S.InputTitle>
                <Input
                  {...register("confirmPassword", {
                    required: "Este campo é obrigatório",
                    validate: (value) => {
                      const passwordValue = watch("password");
                      if (value !== passwordValue) {
                        return "As senhas não coincidem.";
                      }
                      return true;
                    },
                  })}
                  type={visibility ? "text" : "password"}
                  placeholder="Confirme sua senha"
                  name="confirmPassword"
                />
                {errors.confirmPassword && (
                  <S.InputError>{errors.confirmPassword.message}</S.InputError>
                )}
              </S.InputContent>

              {watch("password") && (
                <S.PasswordVerify>
                  <S.PasswordVerifyTitle>
                    Requisitos de senha
                  </S.PasswordVerifyTitle>
                  <S.PasswordRule isValid={length}>
                    <IoMdCheckmarkCircleOutline size={16} />
                    Pelo menos 6 caracteres
                  </S.PasswordRule>
                  <S.PasswordRule isValid={uppercase}>
                    <IoMdCheckmarkCircleOutline size={16} />
                    Pelo menos uma letra maiúscula
                  </S.PasswordRule>
                  <S.PasswordRule isValid={number}>
                    <IoMdCheckmarkCircleOutline size={16} />
                    Pelo menos um número
                  </S.PasswordRule>
                  <S.PasswordRule isValid={char}>
                    <IoMdCheckmarkCircleOutline size={16} />
                    Pelo menos um caractere especial (!@#$ etc.)
                  </S.PasswordRule>
                </S.PasswordVerify>
              )}
            </S.InputContainer>

            <Button
              type="submit"
              onSubmit={handleSubmit(onSubmit)}
              loading={loading}
            >
              {loading ? (
                <PulseLoader color="#fff" loading={true} size={10} />
              ) : (
                "Cadastrar-se"
              )}
            </Button>

            <S.TermsAndConditions>
              Ao clicar em "Cadastrar-se" você concorda com os{" "}
              <S.TCLink to="/termos-e-condicoes">Termos e Condições</S.TCLink>{" "}
              do Borabico, além das políticas de{" "}
              <S.TCLink to="/">Privacidade</S.TCLink>.
            </S.TermsAndConditions>

            <S.LoginContainer>
              <S.LoginTitle>
                Já possui uma conta? &nbsp;
                <S.Login to="/entrar">Entre agora</S.Login>
              </S.LoginTitle>
            </S.LoginContainer>
          </S.Form>
        </S.Content>
      </S.Container>
    </>
  );
}

export default Register;
