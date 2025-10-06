import { useState } from "react"
import * as SC from "./styledPublish"
import {
  Calendar1, MapPin, Phone, CheckCircle, CircleAlert,
} from "lucide-react"
import { FaMoneyBills } from "react-icons/fa6"
import { useForm, Controller } from "react-hook-form"
import { category } from "@/data/category"
import { payment } from "@/data/payment"
import Select from "react-select"
import { NumericFormat, PatternFormat } from "react-number-format"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { PulseLoader } from "react-spinners"



export default function Publish() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      value: "",
      cep: "",
      street: "",
      district: "",
      city: "",
      state: "",
      number: "",
      date: "",
      phone: "",
      category: null,
      payment: null,
      urgency: false,
    },
  })

  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const watchDescription = watch("description")?.length || 0
  const watchAddress = watch(["street", "district", "city", "state"])

  const onSubmit = async (data) => {
    try {
    setLoading(true)
        const response = await axios.post("http://localhost:3000/api/post", data)

        navigate("/feed")
        } catch (error) {
            console.error(error)
            alert("Erro ao publicar vaga")
        } finally {
            setLoading(false)
        }

    console.log("Dados do formulário:", data)
    reset()
  }

  const searchCEP = async (cep) => {
    try {
      const { data: cepData } = await axios.get(
        `https://viacep.com.br/ws/${cep}/json/`
      )

      if (cepData.erro) {
        toast.error("CEP não encontrado", {
                  position: "top-right",
                  autoClose: 4000,
                });
        return
      }

      setValue("street", cepData.logradouro)
      setValue("district", cepData.bairro)
      setValue("city", cepData.localidade)
      setValue("state", cepData.uf)
    } catch (error) {
      console.error("Erro ao buscar CEP:", error)
      toast.error("Erro ao buscar CEP")
    }
  }

  return (
    <>
      <SC.Container>
        <SC.Content>
          <SC.Title>Publicar vaga</SC.Title>
          <SC.Subtitle>Preencha os dados da sua vaga e encontre o candidato ideal *</SC.Subtitle>

          <SC.Divider />

          <SC.Form onSubmit={handleSubmit(onSubmit)}>
            <SC.Group>
              <SC.Label>Título da vaga *</SC.Label>
              <SC.Input
                {...register("title", { required: "Campo obrigatório"})}
                placeholder="Adicione o título da vaga"
                onInput={(e) => {
                     e.target.value = e.target.value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/g, "");
                }}
              />
              {errors.title && (
                <span style={{ color: "red", fontSize: "14px" }}>
                  {errors.title.message}
                </span>
              )}
            </SC.Group>

            <SC.Group>
              <SC.Label>Categoria da vaga *</SC.Label>
              <SC.SelectWrapper>
                <Controller
                  name="category"
                  control={control}
                  rules={{ required: "Campo obrigatório" }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={category}
                      classNamePrefix="react-select"
                      placeholder="Selecione a categoria"
                      isSearchable={true}
                      noOptionsMessage={() => "Nenhuma opção encontrada"}
                    />
                  )}
                />
              </SC.SelectWrapper>
              {errors.category && (
                <span style={{ color: "red", fontSize: "14px" }}>
                  {errors.category.message}
                </span>
              )}
            </SC.Group>

            <SC.Group>
              <SC.Label>Descrição detalhada da vaga *</SC.Label>
              <SC.Textarea
                {...register("description", {
                  required: "Campo obrigatório",
                  maxLength: {
                    value: 500,
                    message: "Máximo de 500 caracteres",
                  },
                })}
                maxLength={500}
                placeholder="Adicione uma descrição para sua vaga, seja competências, requisitos ou outros similares"
              />
              <SC.CharCount>{watchDescription}/500</SC.CharCount>
              {errors.description && (
                <span style={{ color: "red", fontSize: "14px" }}>
                  {errors.description.message}
                </span>
              )}
            </SC.Group>

            <SC.Group>
              <SC.Label>Valor oferecido *</SC.Label>
              <SC.Flex>
                <SC.Icon>
                  <FaMoneyBills size={24} />
                </SC.Icon>
                <Controller
                  name="value"
                  control={control}
                  rules={{ required: "Campo obrigatório" }}
                  render={({ field }) => (
                    <NumericFormat
                      {...field}
                      thousandSeparator="."
                      decimalSeparator=","
                      decimalScale={2}
                      fixedDecimalScale={true}
                      allowNegative={false}
                      customInput={SC.MarginInput}
                      placeholder="Adicione um valor"
                      onValueChange={(values) => field.onChange(values.value)}
                    />
                  )}
                />
              </SC.Flex>
              {errors.value && (
                <span style={{ color: "red", fontSize: "14px" }}>
                  {errors.value.message}
                </span>
              )}
            </SC.Group>

            <SC.Group>
              <SC.Label>Tipo de pagamento *</SC.Label>
              <SC.SelectWrapper>
                <Controller
                  name="payment"
                  control={control}
                  rules={{ required: "Campo obrigatório" }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={payment}
                      classNamePrefix="react-select"
                      placeholder="Selecione a forma de pagamento"
                      isSearchable={false}
                    />
                  )}
                />
              </SC.SelectWrapper>
              {errors.payment && (
                <span style={{ color: "red", fontSize: "14px" }}>
                  {errors.payment.message}
                </span>
              )}
            </SC.Group>

            <SC.Group>
              <SC.Label>CEP da localidade *</SC.Label>
              <SC.Flex>
                <SC.Icon>
                  <MapPin />
                </SC.Icon>
                <Controller
                  name="cep"
                  control={control}
                  rules={{ required: "Campo obrigatório" }}
                  render={({ field }) => (
                    <PatternFormat
                      {...field}
                      format="#####-###"
                      placeholder="00000-000"
                      onBlur={(e) => searchCEP(e.target.value)}
                      onValueChange={(values) => {
                      field.onChange(values.formattedValue)
                        if (values.value?.length === 8) {
                           searchCEP(values.value) 
                      }}}
                      customInput={SC.MarginInput}
                    />
                  )}
                />
              </SC.Flex>
              {errors.cep && (
                <span style={{ color: "red", fontSize: "14px" }}>
                  {errors.cep.message}
                </span>
              )}
            </SC.Group>

            {watchAddress && (
              <>
                <SC.Group>
                  <SC.Label>Logradouro *</SC.Label>
                  <SC.Input {...register("street")} disabled />
                </SC.Group>

                <SC.Group>
                  <SC.Label>Bairro *</SC.Label>
                  <SC.Input {...register("district")} disabled />
                </SC.Group>

                <SC.Group>
                  <SC.Label>Cidade *</SC.Label>
                  <SC.Input {...register("city")} disabled />
                </SC.Group>

                <SC.Group>
                  <SC.Label>UF *</SC.Label>
                  <SC.Input {...register("state")} maxLength={2} disabled />
                </SC.Group>

                <SC.Group>
                  <SC.Label>Número *</SC.Label>
                  <Controller
                    name="number"
                    control={control}
                    rules={{ required: "Campo obrigatório" }}
                    render={({ field }) => (
                      <NumericFormat
                        {...field}
                        customInput={SC.Input}
                        allowNegative={false}
                        onValueChange={(values) => field.onChange(values.value)}
                      />
                    )}
                  />
                  {errors.number && (
                    <span style={{ color: "red", fontSize: "14px" }}>
                      {errors.number.message}
                    </span>
                  )}
                </SC.Group>
              </>
            )}

            <SC.Group>
              <SC.Label>Data *</SC.Label>
              <SC.Flex>
                <SC.Icon>
                  <Calendar1 />
                </SC.Icon>
                <Controller
                  name="date"
                  control={control}
                  render={({ field }) => (
                    <SC.MarginInput
                      {...field}
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                    />
                  )}
                />
              </SC.Flex>
            </SC.Group>

            <SC.Group>
              <SC.Label>Telefone para contato *</SC.Label>
              <SC.Flex>
                <SC.Icon>
                  <Phone />
                </SC.Icon>
                <Controller
                  name="phone"
                  control={control}
                  rules={{ required: "Campo obrigatório" }}
                  render={({ field }) => (
                    <PatternFormat
                      {...field}
                      format="(##) #####-####"
                      placeholder="(00) 00000-0000"
                      customInput={SC.MarginInput}
                    />
                  )}
                />
              </SC.Flex>
              {errors.phone && (
                <span style={{ color: "red", fontSize: "14px" }}>
                  {errors.phone.message}
                </span>
              )}
            </SC.Group>

            <SC.Important>
              <SC.ImportantContent>
                <SC.Checkbox
                  {...register("urgency")}
                  type="checkbox"
                />
                <SC.ImportantIcon>
                  <CircleAlert size={24} />
                </SC.ImportantIcon>
                <SC.ImportantText>
                  <SC.ImportantTitle>Marcar como urgente</SC.ImportantTitle>
                </SC.ImportantText>
              </SC.ImportantContent>
              <SC.ImportantDescription>
                Sua vaga aparecerá com um destaque de urgência
              </SC.ImportantDescription>
            </SC.Important>

            <SC.SubmitContainer>
              <SC.SubmitTextbox>
                <SC.SubmitTitle>Pronto para publicar?</SC.SubmitTitle>
                <SC.SubmitSubtitle>
                  Sua vaga ficará disponível até a data prevista
                </SC.SubmitSubtitle>
              </SC.SubmitTextbox>

              <SC.Submit type="submit" disabled={loading} loading={loading}>
                {!loading && <CheckCircle size={16}/>}
                {loading ? <PulseLoader color="#fff" loading={true} size={14} /> : "Publicar"}
              </SC.Submit>
            </SC.SubmitContainer>   
          </SC.Form>
        </SC.Content>
      </SC.Container>
    </>
  )
}