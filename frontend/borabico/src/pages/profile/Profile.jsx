import * as SC from "./styledProfile";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  User,
  Mail,
  Phone,
  MapPin,
  SquarePen,
  Settings,
  Trash2,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { PatternFormat } from "react-number-format";
import Select from "react-select";
import axios from "axios";
import Swal from "sweetalert2";
import { useIbge } from "../../hooks/useIBGE";

export default function Profile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [isOwner, setIsOwner] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editing, setEditing] = useState(false);
  const { cities } = useIbge();

  useEffect(() => {
    document.title = "Perfil de usuário";
  }, []);

  const { control, handleSubmit, reset, register } = useForm();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");
        if (!token) throw new Error("Token não encontrado.");

        const response = await axios.get(
          `http://localhost:3000/api/auth/perfil/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (response.data.success) {
          setProfile(response.data.data);
          setIsOwner(response.data.isOwner);

          reset({
            name: response.data.data.name,
            description: response.data.data.description,
            phone: response.data.data.phone,
            email: response.data.data.email,
            location: response.data.data.location,
          });
        }
      } catch (err) {
        setError("Não foi possível carregar o perfil.");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProfile();
  }, [id, reset]);

  const editProfile = async () => {
    const result = await Swal.fire({
      title: "Editar perfil?",
      text: "O perfil sofrerá mudanças nas informações",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sim",
      cancelButtonText: "Cancelar",
      customClass: {
        popup: "custom-swal",
        confirmButton: "btn-confirm",
        cancelButton: "btn-cancel",
        icon: "swal2-info",
      },
    });

    if (result.isConfirmed) {
      setEditing(true);
    }
  };

  const saveEdit = async (data) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Token não encontrado.");

      const formData = {
        name: data.name,
        description: data.description,
        phone: data.phone?.replace(/\D/g, ""),
        email: data.email,
        location: data.location?.label || data.location,
      };

      const response = await axios.put(
        `http://localhost:3000/api/auth/atualizarUser/${id}`,
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.data.success) {
        setProfile(response.data.data);

        reset({
          name: response.data.data.name,
          description: response.data.data.description,
          phone: response.data.data.phone,
          email: response.data.data.email,
          location: response.data.data.location,
        });

        setEditing(false);
      }
    } catch (err) {
      console.error("Erro ao salvar:", err);
      setError("Não foi possível salvar as alterações.");
    }
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;
  if (!profile) return <></>;

  return (
    <SC.Container>
      <SC.Content>
        <SC.Return onClick={() => navigate(-1)}>
          <ArrowLeft size={24} />
        </SC.Return>

        <SC.Card>
          {editing ? (
            <SC.Form onSubmit={handleSubmit(saveEdit)}>
              <SC.ProfileHeader>
                <SC.ContainerImage>
                  {profile?.avatar ? (
                    <SC.Image src={profile.avatar} alt={profile.name} />
                  ) : (
                    <User size={48} />
                  )}
                </SC.ContainerImage>

                <SC.ProfileInfo>
                  <SC.EditGroup>
                    <SC.Label>Nome completo *</SC.Label>
                    <SC.Input
                      {...register("name")}
                      placeholder="Digite seu nome completo"
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(
                          /[^A-Za-zÀ-ÖØ-öø-ÿ\s]/g,
                          ""
                        );
                      }}
                    />
                  </SC.EditGroup>

                  <SC.EditGroup>
                    <SC.Label>Cidade e Estado *</SC.Label>
                    <SC.SelectWrapper>
                      <Controller
                        name="location"
                        control={control}
                        render={({ field }) => (
                          <Select
                            {...field}
                            options={cities}
                            classNamePrefix="react-select"
                            placeholder="Digite o nome da cidade (ex: São Paulo)"
                            isSearchable={true}
                            noOptionsMessage={() => "Nenhuma cidade encontrada"}
                          />
                        )}
                      />
                    </SC.SelectWrapper>
                    <SC.Helper>
                      Digite o nome da cidade para pesquisar (ex: "Itápolis" ou
                      "São Paulo")
                    </SC.Helper>
                  </SC.EditGroup>
                </SC.ProfileInfo>
              </SC.ProfileHeader>

              <SC.Section>
                <SC.EditGroup>
                  <SC.Label>Descrição</SC.Label>
                  <SC.TextArea
                    {...register("description")}
                    maxLength={500}
                    placeholder="Conte um pouco sobre você, suas habilidades e experiências"
                  />
                </SC.EditGroup>

                <SC.TitleSection>Informações de contato</SC.TitleSection>

                <SC.EditGroup>
                  <SC.Label>Telefone *</SC.Label>
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                      <PatternFormat
                        {...field}
                        format="(##) #####-####"
                        placeholder="(00) 00000-0000"
                        customInput={SC.Input}
                      />
                    )}
                  />
                </SC.EditGroup>

                <SC.EditGroup>
                  <SC.Label>Email *</SC.Label>
                  <SC.Input
                    {...register("email")}
                    type="email"
                    placeholder="Digite seu email"
                  />
                </SC.EditGroup>

                <SC.OwnerActions>
                  <SC.PrimaryButton type="submit" onClick={saveEdit}>
                    <SquarePen size={16} /> Salvar alterações
                  </SC.PrimaryButton>

                  <SC.SecondaryButton
                    type="button"
                    onClick={() => setEditing(false)}
                  >
                    <Trash2 size={16} /> Cancelar
                  </SC.SecondaryButton>
                </SC.OwnerActions>
              </SC.Section>
            </SC.Form>
          ) : (
            <>
              <SC.ProfileHeader>
                <SC.ContainerImage>
                  {profile?.avatar ? (
                    <SC.Image src={profile.avatar} alt={profile.name} />
                  ) : (
                    <User size={48} />
                  )}
                </SC.ContainerImage>

                <SC.ProfileInfo>
                  <SC.Name>{profile?.name}</SC.Name>
                  <SC.Location>
                    <MapPin size={16} />
                    <SC.LocationLabel>
                      {profile?.location || "Localização não informada"}
                    </SC.LocationLabel>
                  </SC.Location>
                </SC.ProfileInfo>

                {isOwner && (
                  <SC.Edit onClick={editProfile}>
                    <Settings />
                  </SC.Edit>
                )}
              </SC.ProfileHeader>

              <SC.Section>
                <SC.InfoContent>
                  <SC.InfoTitle>Descrição</SC.InfoTitle>
                  <SC.InfoDescription>
                    {profile?.description || "Nenhuma descrição fornecida."}
                  </SC.InfoDescription>
                </SC.InfoContent>

                <SC.InfoContent>
                  <SC.InfoTitle>Estatísticas</SC.InfoTitle>
                  <SC.Statistic>
                    <SC.StatisticNumber>
                      {profile?.postsCount || 0}
                    </SC.StatisticNumber>
                    <SC.StatisticLabel>Vagas</SC.StatisticLabel>
                  </SC.Statistic>
                </SC.InfoContent>

                <SC.InfoContent>
                  <SC.InfoTitle>Informações de contato</SC.InfoTitle>
                </SC.InfoContent>

                <SC.InfoFlex>
                  <SC.Icon>
                    <Phone size={20} />
                  </SC.Icon>
                  <SC.Info>
                    <SC.InfoItem>Telefone</SC.InfoItem>
                    <SC.InfoLabel>
                      {profile?.phone
                        ? profile?.phone
                            .replace(/\D/g, "")
                            .replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")
                        : "Telefone não informado"}
                    </SC.InfoLabel>
                  </SC.Info>
                </SC.InfoFlex>

                <SC.InfoFlex>
                  <SC.Icon>
                    <Mail size={20} />
                  </SC.Icon>
                  <SC.Info>
                    <SC.InfoItem>Email</SC.InfoItem>
                    <SC.InfoLabel>
                      {profile?.email || "Não informado"}
                    </SC.InfoLabel>
                  </SC.Info>
                </SC.InfoFlex>
              </SC.Section>
            </>
          )}
        </SC.Card>
      </SC.Content>
    </SC.Container>
  );
}
