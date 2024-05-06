import { useAuthStore } from '../stores/AuthStore'
import { Navigate } from 'react-router-dom'

export const Favourites = () => {
    const authStore = useAuthStore()
    if (!authStore.isLogged) return <Navigate to="/login" />

    return (
        <div>
            <h1>Favourites</h1>
        </div>
    )
}
