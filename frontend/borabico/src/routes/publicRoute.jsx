import { useState, useEffect } from "react"
import { Navigate } from "react-router-dom"
import axios from "axios"

const PublicRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const validateToken = async () => {
            const token = localStorage.getItem('token')
            
            if (!token) {
                setLoading(false);
                return
            }
            
            try {
                const response = await axios.get('/api/validate-token', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                
                if (response.status === 200) {
                    setIsAuthenticated(true)
                } else {
                    localStorage.removeItem('token')
                }
            } catch (error) {
                console.error('Erro ao validar token:', error)
                localStorage.removeItem('token')
            }
            setLoading(false)
        }

        validateToken()
    }, [])

    if (loading) {
        return <div>Carregando...</div>
    }

    return isAuthenticated ? <Navigate to="/" replace /> : children
}

export default PublicRoute