import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toastSuccess, toastError } from "@/components/common/Toasters/Toaster";

function usePublish() {
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
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const watchDescription = watch("description")?.length || 0;
  const watchAddress = watch(["street", "district", "city", "state"]);

  const onSubmit = async (data) => {
    try {
      const jobData = {
        title: data.title?.trim() || "",
        description: data.description?.trim() || "",
        value:
          parseFloat(String(data.value).replace(/\./g, "").replace(",", ".")) ||
          0,
        cep: data.cep?.replace(/\D/g, "") || null,
        street: data.street?.trim() || null,
        district: data.district?.trim() || null,
        city: data.city?.trim() || null,
        state: data.state?.trim() || null,
        number: data.number?.toString() || null,
        date: data.date || null,
        phone: data.phone?.replace(/\D/g, "") || null,
        category: data.category?.value || null,
        payment: data.payment?.value || null,
        urgent: Boolean(data.urgency),
      };

      setLoading(true);

      const token = localStorage.getItem("token");

      const response = await axios.post(
        "http://localhost:3000/api/post",
        jobData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      toastSuccess("Vaga publicada com sucesso!");
      console.log(response.data);

      reset();

      const postId = response.data.data?.id || response.data.id;

      setTimeout(() => {
        navigate(`/vagas/${postId}`);
      }, 2500);
    } catch (error) {
      if (error.response) {
        let errorMessage = "Não foi possível publicar a vaga.";

        if (error.response.status === 400) {
          errorMessage = "Dados inválidos. Verifique os campos.";
          if (error.response.data?.message) {
            errorMessage = error.response.data.message;
          }
        } else if (
          error.response.status === 401 ||
          error.response.status === 403
        ) {
          errorMessage = "Você precisa estar autenticado.";
          setTimeout(() => navigate("/entrar"), 2000);
        } else if (error.response.status === 429) {
          errorMessage = "Muitas tentativas. Aguarde alguns minutos.";
        } else if (error.response.status === 500) {
          errorMessage = "Erro no servidor. Tente novamente mais tarde.";
        }

        toastError(errorMessage);
      } else if (error.request) {
        toastError("Servidor não respondeu. Verifique sua conexão.");
      } else {
        toastError("Erro de conexão");
      }
    } finally {
      setLoading(false);
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
      toastError("Erro ao buscar CEP");
    }
  };

  return {
    register,
    handleSubmit,
    control,
    errors,
    onSubmit,
    loading,
    watchDescription,
    watchAddress,
    searchCEP,
    setValue,
  };
}

export default usePublish;
