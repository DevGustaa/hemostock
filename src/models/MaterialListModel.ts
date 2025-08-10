export interface Material {
  cod_almox: number;
  cod_material: number;
  material_name: string;
  qtd_atual: string;
  qtd_base: string
  status: string;
  id: number;
}

export type MaterialUpdateQtd = Partial<Material> & { qtd_para_adicionar?:number }