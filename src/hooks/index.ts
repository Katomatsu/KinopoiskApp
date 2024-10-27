import axios from "axios";
import {useInfiniteQuery, useQuery} from "@tanstack/react-query";

interface IParams {
  page?: number;
  limit?: number

  [key: string]: string | number;
}


export const useFetchData = <T>(url: string, params?: IParams | null) => {

  const fetchData = async (): Promise<T> => {
    const {data} = await axios.get(url, {
      params,
      headers: {
        'X-API-KEY': 'T6Z3RCY-8PJ4B99-M3KQ3MD-H97NKNF',
        'accept': 'application/json'
      }
    })
    return data
  }

  return useQuery<T>({
    queryKey: [url, params],
    queryFn: fetchData
  })

}
