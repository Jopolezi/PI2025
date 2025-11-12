import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toastError } from "@/components/common/Toasters/Toaster";
import Swal from "sweetalert2";
import axios from "axios";
import { useForm } from "react-hook-form";
import { category} from "@/data/category";

function usePost() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOwner, setIsOwner] = useState(false);
  const [editing, setEditing] = useState(false);

  const { register, handleSubmit, reset, control, setValue } = useForm();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");
        if (!token) throw new Error("Token não encontrado.");

        const response = await axios.get(
          `http://localhost:3000/api/post/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (response.data.success) {
          setPost(response.data.data);
          setIsOwner(response.data.isOwner);

          reset({
            title: response.data.data.title,
            description: response.data.data.description,
            phone: response.data.data.phone,
            payment: response.data.data.payment,
            value: response.data.data.value,
            cep: response.data.data.cep,
            street: response.data.data.street,
            district: response.data.data.district,
            city: response.data.data.city,
            state: response.data.data.state,
            number: response.data.data.number,
            date: response.data.data.date,
            urgent: response.data.data.urgent,
            category: response.data.data.category,
          });
        } else setError("Não foi possível carregar a vaga.");
      } catch (err) {
        setError("Não foi possível carregar a vaga.");

        if ([401, 403].includes(err.response?.status)) {
          toastError("Faça login para continuar.");
          setTimeout(() => navigate("/entrar"), 2000);
        }
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchPost();
  }, [id, navigate, reset]);

  const deletePost = async () => {
    const result = await Swal.fire({
      title: "Tem certeza?",
      text: "A vaga será removida para sempre!",
      icon: "warning",
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

    if (!result.isConfirmed) return;

    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:3000/api/post/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      await Swal.fire({
        title: "Deletado!",
        text: "A vaga foi removida.",
        icon: "success",
        customClass: {
          popup: "custom-swal",
          confirmButton: "btn-confirm",
        },
      });

      navigate("/vagas");
    } catch {
      await Swal.fire({
        title: "Erro!",
        text: "A vaga não foi removida.",
        icon: "error",
        customClass: {
          popup: "custom-swal",
          confirmButton: "btn-confirm",
        },
      });
    }
  };

  const editPost = async () => {
    const result = await Swal.fire({
      title: "Editar vaga?",
      text: "A vaga sofrerá mudanças nas informações",
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

      const editData = {
        ...data,
        category: data.category?.value || data.category,
        payment: data.payment?.value || data.payment,
      };

      const response = await axios.put(
        `http://localhost:3000/api/post/${id}`,
        editData,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data.success) {
        Swal.fire({
          title: "Atualizado com sucesso",
          text: "A vaga foi editada!",
          icon: "success",
          showCancelButton: false,
          confirmButtonText: "Sim",
          cancelButtonText: "Cancelar",
          customClass: {
            popup: "custom-swal",
            confirmButton: "btn-confirm",
            cancelButton: "btn-cancel",
            icon: "swal2-success",
          },
        });
        setPost(response.data.data);
        setEditing(false);
      }
    } catch {
      Swal.fire("Erro!", "Não foi possível atualizar.", "error");
    }
  };

  const searchCEP = async (cep) => {
    try {
      const cleanCEP = cep.replace(/\D/g, "");

      if (cleanCEP.length !== 8) {
        return;
      }

      const { data: cepData } = await axios.get(
        `https://viacep.com.br/ws/${cleanCEP}/json/`
      );

      if (cepData.erro) {
        toastError("CEP não encontrado");
        return;
      }

      setValue("street", cepData.logradouro || "");
      setValue("district", cepData.bairro || "");
      setValue("city", cepData.localidade || "");
      setValue("state", cepData.uf || "");
    } catch (error) {
      console.error("Erro ao buscar CEP:", error);
      toastError("Erro ao buscar CEP");
    }
  };

  const sendMessage = () => {
    if (!post?.phone) return "";

    const phone = post.phone;
    const cleanDate = post.date
      ? post.date.split("T")[0].split("-").reverse().join("/")
      : "sem data";

    const getCategoryLabel = (value) => {
      const cat = category.find((c) => c.value === value);
      return cat ? cat.label : value;
    };

    const text = `Olá, tenho interesse na vaga que você publicou no site borabico. Ainda está disponível? \n
    Vaga para bico de ${getCategoryLabel(post.category)} para a data ${cleanDate}`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  };

  return {
    post,
    loading,
    error,
    isOwner,
    editing,
    register,
    control,
    handleSubmit,
    saveEdit,
    deletePost,
    editPost,
    setEditing,
    searchCEP,
    sendMessage,
  };
}

export default usePost;
