import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";

const UserAvatar = () => {
  const [user, setUser] = useState<{ nome: string } | null>(null);
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch(`${API_URL}/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then(async (res) => {
          if (!res.ok) {
            const text = await res.text();
            throw new Error(`Erro ao buscar perfil: ${res.status} - ${text}`);
          }
          return res.json();
        })
        .then((data) => {
          console.log("Dados do perfil:", data);
          setUser(data.user);
        })
        .catch((err) => console.error(err));
    }
  }, [API_URL]);

  function stringAvatar(name?: string) {
    if (!name) return { children: "?" }; // fallback para quando não tem nome
    const names = name.split(" ");
    return {
      children: names.length > 1 ? `${names[0][0]}${names[1][0]}` : names[0][0],
    };
  }
  console.log(user?.nome);

  return <Avatar {...stringAvatar(user?.nome)} />;
};

export default UserAvatar;
