import { Navigate } from "react-router"
import useRole from "../hooks/useRole"


const ManagerRoute = ({ children }) => {
    const {role}= useRole()


    if (role === 'manager') return children
    return <Navigate to='/' replace='true' />
}

export default ManagerRoute