import {
  MapPin,
  CircleAlert,
  ArrowLeft,
  Phone,
  CircleDollarSign,
  DollarSign,
  Calendar,
  SquarePen,
  Trash2,
  User,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import * as SC from "./styledPost";
import usePost from "@/hooks/usePost";
import { Controller } from "react-hook-form";
import { PatternFormat, NumericFormat } from "react-number-format";
import Select from "react-select";
import { category } from "@/data/category";
import { payment } from "@/data/payment";
import { SwalStyles } from "../../styles/globalStyles";

function Post() {
  const {
    post,
    loading,
    error,
    isOwner,
    deletePost,
    editPost,
    editing,
    handleSubmit,
    register,
    control,
    saveEdit,
    setEditing,
    searchCEP,
    sendMessage,
  } = usePost();

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;
  if (!post) return <p>Nenhuma vaga encontrada.</p>;

  return (
    <SC.Container>
      <SwalStyles />
      <SC.Content>
        <SC.Return to="/vagas">
          <ArrowLeft />
        </SC.Return>

        <SC.Top>
          <SC.Left>
            <SC.Flex>
              <SC.TitleWrapper>
                <SC.Title>{post.title}</SC.Title>
              </SC.TitleWrapper>
              {post.urgent && (
                <SC.Urgency>
                  <CircleAlert size={18} /> Urgente
                </SC.Urgency>
              )}
            </SC.Flex>

            <SC.Address>
              <MapPin size={16} />
              {post.city}, {post.state}
            </SC.Address>
          </SC.Left>

          <SC.Right>
            <SC.UserProfile to={`/perfil/${post.user?.id}`}>
              {post.user?.avatar ? (
                <SC.UserImage src={post.user.avatar} alt={post.user.name} />
              ) : (
                <SC.UserIcon>
                  <User size={24} />
                </SC.UserIcon>
              )}
              <SC.UserName>{post.user?.name}</SC.UserName>
            </SC.UserProfile>
          </SC.Right>
        </SC.Top>

        <SC.Divider />

        {editing ? (
          <SC.Form onSubmit={handleSubmit(saveEdit)}>
            <SC.EditGroup>
              <SC.Label>Título da vaga *</SC.Label>
              <SC.Input
                {...register("title")}
                defaultValue={post.title}
                placeholder="Adicione o título da vaga"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(
                    /[^A-Za-zÀ-ÖØ-öø-ÿ\s]/g,
                    ""
                  );
                }}
              />
            </SC.EditGroup>

            <SC.EditGroup>
              <SC.Label>Categoria da vaga *</SC.Label>
              <SC.SelectWrapper>
                <Controller
                  name="category"
                  control={control}
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
            </SC.EditGroup>

            <SC.EditGroup>
              <SC.Label>Descrição detalhada da vaga *</SC.Label>
              <SC.TextArea
                {...register("description")}
                defaultValue={post.description}
                maxLength={500}
                placeholder="Adicione uma descrição para sua vaga, seja competências, requisitos ou outros similares"
              />
            </SC.EditGroup>

            <SC.EditGroup>
              <SC.Label>Valor oferecido *</SC.Label>
              <Controller
                name="value"
                control={control}
                render={({ field }) => (
                  <SC.Input
                    as={NumericFormat}
                    thousandSeparator="."
                    decimalSeparator=","
                    decimalScale={2}
                    fixedDecimalScale={true}
                    allowNegative={false}
                    defaultValue={post.value}
                    onValueChange={(values) => field.onChange(values.value)}
                    placeholder="Adicione um valor"
                  />
                )}
              />
            </SC.EditGroup>

            <SC.EditGroup>
              <SC.Label>Tipo de pagamento *</SC.Label>
              <SC.SelectWrapper>
                <Controller
                  name="payment"
                  control={control}
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
            </SC.EditGroup>

            <SC.EditGroup>
              <SC.Label>CEP *</SC.Label>
              <Controller
                name="cep"
                control={control}
                defaultValue={post.cep}
                render={({ field }) => (
                  <PatternFormat
                    format="#####-###"
                    placeholder="00000-000"
                    customInput={SC.Input}
                    value={field.value}
                    onValueChange={(values) => {
                      field.onChange(values.formattedValue);
                      if (values.value?.length === 8) {
                        searchCEP(values.value);
                      }
                    }}
                  />
                )}
              />
            </SC.EditGroup>

            <SC.EditGroup>
              <SC.Label>Logradouro *</SC.Label>
              <Controller
                name="street"
                control={control}
                defaultValue={post.street}
                render={({ field }) => <SC.Input {...field} disabled />}
              />
            </SC.EditGroup>

            <SC.EditGroup>
              <SC.Label>Bairro *</SC.Label>
              <Controller
                name="district"
                control={control}
                defaultValue={post.district}
                render={({ field }) => <SC.Input {...field} disabled />}
              />
            </SC.EditGroup>

            <SC.EditGroup>
              <SC.Label>Cidade *</SC.Label>
              <Controller
                name="city"
                control={control}
                defaultValue={post.city}
                render={({ field }) => <SC.Input {...field} disabled />}
              />
            </SC.EditGroup>

            <SC.EditGroup>
              <SC.Label>Estado *</SC.Label>
              <Controller
                name="state"
                control={control}
                defaultValue={post.state}
                render={({ field }) => <SC.Input {...field} disabled />}
              />
            </SC.EditGroup>

            <SC.EditGroup>
              <SC.Label>Número *</SC.Label>
              <Controller
                name="number"
                control={control}
                render={({ field }) => (
                  <NumericFormat
                    {...field}
                    defaultValue={post.number}
                    allowNegative={false}
                    customInput={SC.Input}
                    onValueChange={(values) => field.onChange(values.value)}
                  />
                )}
              />
            </SC.EditGroup>

            <SC.EditGroup>
              <SC.Label>Data *</SC.Label>
              <Controller
                name="date"
                control={control}
                render={({ field }) => (
                  <SC.Input
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    {...field} 
                  />
                )}
              />
            </SC.EditGroup>

            <SC.EditGroup>
              <SC.Label>Telefone *</SC.Label>
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <PatternFormat
                    {...field}
                    defaultValue={post.phone}
                    format="(##) #####-####"
                    placeholder="(00) 00000-0000"
                    customInput={SC.Input}
                  />
                )}
              />
            </SC.EditGroup>

            <SC.Important>
              <SC.ImportantContent>
                <SC.Checkbox
                  {...register("urgent")}
                  type="checkbox"
                  defaultChecked={post.urgent}
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

            <SC.OwnerActions>
              <SC.Edit type="submit">
                <SquarePen size={16} /> Salvar alterações
              </SC.Edit>

              <SC.Delete type="button" onClick={() => setEditing(false)}>
                <Trash2 size={16} /> Cancelar
              </SC.Delete>
            </SC.OwnerActions>
          </SC.Form>
        ) : (
          <>
            <SC.TitleDescription>Descrição</SC.TitleDescription>
            <SC.Description>{post.description}</SC.Description>

            <SC.TitleData>Dados da vaga</SC.TitleData>

            <SC.Group>
              <SC.Data>
                <MapPin size={14} /> Endereço
              </SC.Data>
              <SC.Value>
                {post.street}, {post.number}
              </SC.Value>
            </SC.Group>

            <SC.Group>
              <SC.Data>
                <Phone size={14} /> Telefone
              </SC.Data>
              <SC.Value>
                {post.phone
                  ? post.phone
                      .replace(/\D/g, "")
                      .replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")
                  : "Telefone não informado"}
              </SC.Value>
            </SC.Group>

            <SC.Group>
              <SC.Data>
                <CircleDollarSign size={14} /> Pagamento
              </SC.Data>
              <SC.Payment>Por {post.payment}</SC.Payment>
            </SC.Group>

            <SC.Group>
              <SC.Data>
                <DollarSign size={14} /> Valor oferecido
              </SC.Data>
              <SC.Value>
                R${" "}
                {post.value ?? "Valor não informado, combine com o anunciante"}
              </SC.Value>
            </SC.Group>

            <SC.Group>
              <SC.Data>
                <Calendar size={14} /> Data do bico
              </SC.Data>
              <SC.Value>
                {post.date
                  ? post.date.split("T")[0].split("-").reverse().join("/")
                  : "Data não informada, combine com o anunciante"}
              </SC.Value>
            </SC.Group>

            {isOwner ? (
              <>
                <SC.Question>Esta é sua publicação!</SC.Question>
                <SC.Answer>
                  Modifique alguma informação ou exclua a publicação se quiser
                </SC.Answer>

                <SC.OwnerActions>
                  <SC.Edit onClick={editPost}>
                    <SquarePen size={16} /> Editar vaga
                  </SC.Edit>

                  <SC.Delete onClick={deletePost}>
                    <Trash2 size={16} /> Deletar vaga
                  </SC.Delete>
                </SC.OwnerActions>
              </>
            ) : (
              <>
                <SC.Question>Interessado na vaga?</SC.Question>
                <SC.Answer>
                  Entre em contato com o anunciante pelo botão abaixo!
                </SC.Answer>

                <SC.Button
                  href={sendMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp size={16} /> Entrar em contato pelo Whatsapp
                </SC.Button>
              </>
            )}
          </>
        )}
      </SC.Content>
    </SC.Container>
  );
}

export default Post;
