import { useEffect, useState } from "react";
import * as SC from "./styledCardFeed";
import axios from "axios";
import {
  MapPin,
  Calendar,
  DollarSign,
  AlertCircle,
  PhoneCall,
  User,
  SendHorizontal,
} from "lucide-react";
import { category } from "@/data/category";

export function CardFeed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(false);

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

  const getCategoryLabel = (value) => {
    const cat = category.find((c) => c.value === value);
    return cat ? cat.label : value;
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Data não informada";
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR");
  };

  const formatPhone = (phone) => {
    const phones = phone.replace(/\D/g, "");

    if (phones.length === 11) {
      return phones.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    }

    if (phones.length === 10) {
      return phones.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
    }

    return phones;
  };

  const daysUntil = (date) => {
    if (!date) return null;

    const target = new Date(date);
    const today = new Date();

    target.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const diffTime = target.getTime() - today.getTime();
    const d = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (d > 1) {
      return <SC.Days upcoming>Faltam {d} dias para esse bico!</SC.Days>;
    }
    if (d === 1) {
      return <SC.Days tomorrow>Falta 1 dia para esse bico!</SC.Days>;
    }
    if (d === 0) {
      return <SC.Days today>Esse bico é hoje!</SC.Days>;
    }
    return null;
  };

  useEffect(() => {
    if (!loading && posts.length === 0) {
      setSearch(true);
    } else if (posts.length > 0) {
      setSearch(false);
    }
  }, [loading, posts.length]);

  return (
    <>
      {search ? (
        <SC.NotFound>
          <SC.NFImage src="/search.png" alt="teste" />
          <SC.NFText>Nenhuma publicação encontrada</SC.NFText>
        </SC.NotFound>
      ) : (
        posts.map((post) => (
          <SC.Card key={post.id}>
            <SC.Header>
              <SC.Profile to={`/perfil/${post.user?.id}`}>
                <SC.User>
                  {post.user?.avatar ? (
                    <>
                      <SC.Photo src={post.user?.avatar || null} />
                    </>
                  ) : (
                    <>
                      <SC.Icon>
                        <User />
                      </SC.Icon>
                    </>
                  )}
                  <SC.Username>{post.user?.name}</SC.Username>
                </SC.User>
              </SC.Profile>

              {post.urgent === true && (
                <SC.Urgency>
                  <AlertCircle size={18} /> Urgente
                </SC.Urgency>
              )}
            </SC.Header>

            <SC.Divider />
            <SC.Textbox>
              <SC.Group>
                <SC.Title>{post.title}</SC.Title>
                <SC.Data>Categoria</SC.Data>
                <SC.Category>{getCategoryLabel(post.category)}</SC.Category>
              </SC.Group>

              <SC.Group>
                <SC.Data>Descrição</SC.Data>
                <SC.Description>{post.description}</SC.Description>
              </SC.Group>
            </SC.Textbox>

            <SC.Group>
              <SC.Data>Dados da vaga</SC.Data>
              <SC.Info>
                <SC.InfoItem>
                  <SC.IconWrapper className="green">
                    <DollarSign size={18} />
                  </SC.IconWrapper>
                  <span>
                    R$ {post.value} por {post.payment}
                  </span>
                </SC.InfoItem>
              </SC.Info>

              <SC.Info>
                <SC.InfoItem>
                  <SC.IconWrapper className="blue">
                    <MapPin size={18} />
                  </SC.IconWrapper>
                  <SC.AddressWrapper>
                    <span>
                      {post.street}, {post.number}
                    </span>
                    {post.city && post.state && (
                      <SC.CityState>
                        {post.city}, {post.state}
                      </SC.CityState>
                    )}
                  </SC.AddressWrapper>
                </SC.InfoItem>
              </SC.Info>

              <SC.Info>
                <SC.InfoItem>
                  <SC.IconWrapper className="purple">
                    <Calendar size={18} />
                  </SC.IconWrapper>
                  <span>{formatDate(post.date)}</span>
                  {daysUntil(post.date)}
                </SC.InfoItem>
              </SC.Info>

              <SC.Info>
                <SC.InfoItem>
                  <SC.IconWrapper className="orange">
                    <PhoneCall size={18} />
                  </SC.IconWrapper>
                  <span>{formatPhone(post.phone)}</span>
                </SC.InfoItem>
              </SC.Info>
            </SC.Group>

            <SC.View to={`/vagas/${post.id}`}>
              <SendHorizontal size={18} /> Candidate-se
            </SC.View>
          </SC.Card>
        ))
      )}
    </>
  );
}
