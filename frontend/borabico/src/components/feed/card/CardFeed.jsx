import { useEffect, useState } from "react";
import * as SC from "./styledCardFeed";
import axios from "axios";
import {
  MapPin,
  Calendar,
  DollarSign,
  AlertCircle,
  PhoneCall,
} from "lucide-react";
import { category } from "@/data/category";

export function CardFeed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true)
        const response = await axios.get("http://localhost:3000/api/post");
        setPosts(response.data.data || []);
      } catch (error) {
        console.error("Erro ao carregar o post", error);
      } finally {
        setLoading(false)
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
    const phones = phone.replace(/\D/g, '');

    if (phones.length === 11) {
      return phones.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
  
    if (phones.length === 10) {
      return phones.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    }

    return phones;
}


  if (!loading && posts.length === 0) {
    return <div>Nenhuma vaga disponível no momento.</div>;
  }

  return (
    <>
      {posts.map((post) => (
        <SC.Card key={post.id}>
          {post.urgent === true && (
            <SC.Urgency>
              <AlertCircle size={24} />
            </SC.Urgency>
          )}

          <SC.Header>
            <SC.Title>{post.title}</SC.Title>
            <SC.Category>{getCategoryLabel(post.category)}</SC.Category>
          </SC.Header>

          <SC.Description>{post.description}</SC.Description>

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
                    {post.city} - {post.state}
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

          <SC.View to={`/vagas/${post.id}`}>Ver detalhes</SC.View>
        </SC.Card>
      ))}
    </>
  );
}
