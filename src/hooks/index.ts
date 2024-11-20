import axios from "axios";
import {useInfiniteQuery, useQuery} from "@tanstack/react-query";
import {API_KEY} from "../constants";

interface IParams {
  page?: number;
  limit?: number

  [key: string]: string | number;
}


export const useFetchData = <T>(url: string, params?: IParams) => {

  const fetchData = async (): Promise<T> => {
    const {data} = await axios.get(url, {
      params,
      headers: {
        'X-API-KEY': API_KEY,
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
