import { useEffect, useMemo, useRef, useState } from "react";
import { UserList } from "../models/UsuarioListModel";
import { getUsuarios } from "../services/APIService";

export function useUserProvider() {
    const [users, setUsers] = useState<UserList[]>([])
    const prevUserRef = useRef<UserList[]>([])

    useEffect(() => {
        getUsuarios()
        .then((data) => {
            if (JSON.stringify(data) !== JSON.stringify(prevUserRef.current)) {
                setUsers(data);
                prevUserRef.current= data
            }
        })
        .catch((err) => console.error("Erro ao buscar materiais", err))
     }, [])

     return useMemo(() => ({
        users
     }),[users]);
}