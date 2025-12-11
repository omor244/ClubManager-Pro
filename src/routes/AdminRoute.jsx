import { Navigate } from "react-router"
import LoadingSpinner from "../components/Shared/LoadingSpinner"
import useRole from "../hooks/useRole"


const AdminRoute = ({ children }) => {
    const {role} = useRole()


    if (role === 'admin') return children
    return <Navigate to='/' replace='true' />
}

export default AdminRoute