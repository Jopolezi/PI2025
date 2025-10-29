import { useState, useEffect } from "react"
import { Navigate } from "react-router-dom"
import axios from "axios"

const PublicRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const validateToken = async () => {
            const token = localStorage.getItem('token')
            if (!token) {
                setIsAuthenticated(false)
                setLoading(false)
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
                    setIsAuthenticated(false)
                }
            } catch (error) {
                localStorage.removeItem('token')
                setIsAuthenticated(false)
            }
            setLoading(false)
        }
        validateToken()
    }, [])

    if (loading) {
        return <></>
    }

    if (isAuthenticated) {
        return <Navigate to="/vagas" replace />
    }

    return children
}

export default PublicRoute