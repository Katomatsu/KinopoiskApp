import React, {createContext, PropsWithChildren, useContext, useState} from "react";


interface MovieContextProps {
  genre: string;
  status: string;
  type: string;
  currPage: number;
  pageSize: number;
  setType: (type: string) => void;
  setGenre: (genre: string) => void;
  setStatus: (status: string) => void;
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  setCurrPage: (num: number) => void;
  setPageSize: (num: number) => void;
}

const MoviesContext = createContext<MovieContextProps | undefined>(undefined);

export const MovieContextProvider: React.FC<PropsWithChildren> = ({children}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [genre, setGenre] = useState<string>(null)
  const [status, setStatus] = useState<string>(null)
  const [type, setType] = useState<string>(null)
  const [currPage, setCurrPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(10)
  return <MoviesContext.Provider value={{
    genre,
    status,
    type,
    searchTerm,
    currPage,
    pageSize,
    setType,
    setStatus,
    setGenre,
    setSearchTerm,
    setCurrPage,
    setPageSize,
  }}>
    {children}
  </MoviesContext.Provider>
}

export const useMoviesContext = () => {
  return useContext(MoviesContext);
}