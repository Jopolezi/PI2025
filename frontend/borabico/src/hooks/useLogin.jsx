import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { toastSuccess, toastError } from "@/components/common/Toasters/Toaster"

function useLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" })

  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const onSubmit = async (data) => {
    try {
      const userData = {
        identificator: data.user,
        password: data.password,
      }
      setLoading(true)
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        userData
      )
      const { token } = response.data

      toastSuccess("Bem-vindo de volta!")

      localStorage.setItem("token", token)

      setTimeout(() => {
        navigate("/")
      }, 2500)
    } catch (error) {
      if (error.response) {
        let errorMessage = "Não foi possível realizar o login."

        if (error.response.status === 401) {
          errorMessage = "Email ou senha incorretos."
        } else if (error.response.status === 429) {
          errorMessage = "Muitas tentativas. Aguarde alguns minutos."
        } else if (error.response.status === 500) {
          errorMessage = "Erro interno do servidor. Tente novamente."
        }

        toastError(errorMessage)

        console.error("Erro do servidor:", error.response.data.message)
      } else {
        toastError("Erro de conexão")

        console.error("Erro de rede:", error.message)
      }
    } finally {
      setLoading(false)
    }
  } 

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    loading,
  }
}

export default useLogin