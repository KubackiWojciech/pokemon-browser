import axios from "axios"
import { useQuery } from "react-query"

export const useMainListQuery = () => {
    return useQuery({
        queryKey: ['mainList'],
        queryFn: fetchMainList
    })
}

const fetchMainList = () => axios.get('pokemon?limit=100000&offset=0')