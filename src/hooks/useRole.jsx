import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import LoadingSpinner from "../components/Shared/LoadingSpinner";
import useAxiosSecure from "./useAxiosSecure";



const useRole = () => {

    const { user, loading } = useAuth()
    const axiossecure = useAxiosSecure()

    const { data: role, isLoading } = useQuery({
        queryKey: ['role', user?.email],

        queryFn: async () => {

            const { data } = await axiossecure.get(`/users/role/${user?.email}`)
        
            return data?.role
        }
    })
 


    if (isLoading) return <LoadingSpinner />
    return {role};
};

export default useRole;