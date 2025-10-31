import {
  MapPin,
  CheckCircle,
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
import * as SC from "./styledPost";
import usePost from "@/hooks/usePost";

function Post() {
  const { post, loading, error, isOwner, deletePost } = usePost();

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;
  if (!post) return <p>Nenhuma vaga encontrada.</p>;

  return (
    <SC.Container>
      <SC.Content>
        <SC.Return to="/vagas">
          <ArrowLeft />
        </SC.Return>

        <SC.Top>
          <SC.Left>
            <SC.Flex>
              <SC.Title>{post.title}</SC.Title>
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
            R$ {post.value ?? "Valor não informado, combine com o anunciante"}
          </SC.Value>
        </SC.Group>

        <SC.Group>
          <SC.Data>
            <Calendar size={14} /> Data do bico
          </SC.Data>
          <SC.Value>
            {post.date
              ? new Date(post.date).toLocaleDateString("pt-BR")
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
              <SC.Edit to={`/editar-vaga/${post.id}`}>
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

            <SC.Button>
              <CheckCircle size={16} /> Candidatar-se
            </SC.Button>
          </>
        )}
      </SC.Content>
    </SC.Container>
  );
}

export default Post;