import axios from "axios";
import { Material, MaterialUpdateQtd } from "../models/MaterialListModel";
import { UserList } from "../models/UsuarioListModel";

const API_URL = process.env.REACT_APP_API_URL;

//gets
export async function getMaterials(): Promise<Material[]> {
  const response = await axios.get<Material[]>(`${API_URL}/lista_materiais`);
  return response.data;
}

export async function getUsuarios(): Promise<UserList[]> {
  const response = await axios.get<UserList[]>(`${API_URL}/users_list`)
  return response.data
}

export async function getMaterialsFiltred(): Promise<Material[]> {
  const response = await axios.get<Material[]>(`${API_URL}/lista_materiais_filtrados`);
  return response.data
}

//patchs
export async function IncrementQtdMaterial(id: number, material: MaterialUpdateQtd): Promise<void> {
   await axios.patch(`${API_URL}/lista_materiais/${id}`, material)
}

//login
export async function userLogin(coren:number, senha: string) {
  return axios.post(`${API_URL}/login`, {coren, senha})
}
