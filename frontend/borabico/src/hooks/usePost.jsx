import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toastSuccess, toastError } from "@/components/common/Toasters/Toaster";
import axios from "axios";

function usePost() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token não encontrado. Faça login novamente.");
        }

        const response = await axios.get(
          `http://localhost:3000/api/post/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        console.log("DADOS RECEBIDOS: ", response.data);

        if (response.data.success) {
          setPost(response.data.data);
          setIsOwner(response.data.FromTheUser);
        } else {
          setError("Não foi possível carregar a vaga.");
        }
      } catch (err) {
        console.error("Erro ao carregar vaga:", err);
        setError("Não foi possível carregar a vaga.");

        if (err.response?.status === 401 || err.response?.status === 403) {
          toastError("Você precisa estar autenticado.");
          setTimeout(() => navigate("/entrar"), 2000);
        } else if (err.response?.status === 404) {
          toastError("Vaga não encontrada.");
        }
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPost();
    }
  }, [id, navigate]);

  useEffect(() => {
    if (post) {
      document.title = isOwner ? "Sua publicação" : "Publicação";
    }
  }, [post, isOwner]);

  const deletePost = async () => {
    const confirmed = window.confirm(
      "Tem certeza que deseja deletar esta vaga? Esta ação não pode ser desfeita."
    );

    if (!confirmed) {
      return;
    }

    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("Token não encontrado. Faça login novamente.");
      }

      const response = await axios.delete(
        `http://localhost:3000/api/post/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.data.success) {
        toastSuccess("Vaga deletada com sucesso!");
        setTimeout(() => {
          navigate("/vagas");
        }, 1500);
      }
    } catch (err) {
      console.error("Erro ao deletar vaga:", err);

      if (err.response?.status === 401 || err.response?.status === 403) {
        toastError("Você não tem permissão para deletar esta vaga.");
      } else if (err.response?.status === 404) {
        toastError("Vaga não encontrada.");
      } else {
        toastError("Não foi possível deletar a vaga.");
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    post,
    loading,
    error,
    isOwner,
    deletePost,
  };
}

export default usePost;
