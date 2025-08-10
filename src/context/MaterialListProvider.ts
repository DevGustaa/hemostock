import { useEffect, useState, useRef, useMemo, useCallback } from "react";
import { getMaterials, getMaterialsFiltred, IncrementQtdMaterial } from "../services/APIService";
import { Material, MaterialUpdateQtd } from "../models/MaterialListModel";

export function useMaterialProvider() {
  const [materials, setMateriais] = useState<Material[]>([]);
  const [materialsFiltred, setMaterialsFiltred] = useState<Material[]>([]);

  const prevMaterialsRef = useRef<Material[]>([]);
  const prevMaterialsFiltredRef = useRef<Material[]>([]);

  useEffect(() => {
    getMaterials()
      .then((data) => {
        if (JSON.stringify(data) !== JSON.stringify(prevMaterialsRef.current)) {
          setMateriais(data);
          prevMaterialsRef.current = data;
        }
      })
      .catch((err) => console.error("Erro ao buscar materiais", err));
  }, []);

  useEffect(() => {
    getMaterialsFiltred()
      .then((data) => {
        if (JSON.stringify(data) !== JSON.stringify(prevMaterialsFiltredRef.current)) {
          setMaterialsFiltred(data);
          prevMaterialsFiltredRef.current = data;
        }
      })
      .catch((err) => console.error("Erro inesperado, ", err));
  }, []);

  // Memoize a função para evitar recriação a cada render
  const updateQtdMaterialValue = useCallback(async (id: number, updates: MaterialUpdateQtd) => {
    try {
      await IncrementQtdMaterial(id, updates);

      const fresh = await getMaterials();

      if (JSON.stringify(fresh) !== JSON.stringify(prevMaterialsRef.current)) {
        setMateriais(fresh);
        prevMaterialsRef.current = fresh;
      }
    } catch (error) {
      console.error("Erro ao atualizar material:", error);
      throw error;
    }
  }, [])

  return useMemo(() => ({
    materials,
    materialsFiltred,
    updateQtdMaterialValue,
  }), [materials, materialsFiltred, updateQtdMaterialValue]);
}
