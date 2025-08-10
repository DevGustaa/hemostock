import { Box, Typography } from "@mui/material";
import { JSX } from "react";
import ModeloAjuda from "./ModeloAjuda";

const AjudaPage = (): JSX.Element => {
  const inicioText =
    "A página inicial do HemoStock oferece uma visão geral do estoque," +
    "com informações sobre níveis de materiais, alertas de reposição e" +
    "um resumo das atividades recentes. É o ponto de partida para gerenciar" +
    " o fluxo de materiais no hospital.";
  const saidaMaterialText =
    "Esta seção permite registrar a saída de materiais" +
    "do estoque, detalhando o tipo de material, quantidade, destino e responsável" +
    "pela retirada. Garante o controle preciso do uso de materiais.";
  const PedidoText =
    "Utilize esta aba para criar e gerenciar pedidos de novos" +
    "materiais. É possível especificar os itens necessários, quantidades e fornecedores," +
    " facilitando o processo de reposição do estoque.";
  const ConfiguracoesText =
    "Aqui você pode personalizar o sistema, ajustando parâmetros" +
    "como notificações, permissões de usuário e outras configurações para adaptar o HemoStock às" +
    "necessidades específicas do hospital.";
  const AjudaText =
    "Esta seção oferece suporte e informações adicionais sobre o uso do sistema," +
    " incluindo guias, perguntas frequentes e contato para assistência técnica. Se precisar de ajuda," +
    " este é o lugar certo.";
  const ContatoText =
    "Para suporte adicional, entre em contato conosco pelo e-mail: hgfhemodinamica@gmail.com";
  return (
    <Box>
      <Box
        sx={{
          boxSizing: "border-box",
          paddingTop: "36px",
          paddingLeft: "20px",
          paddingBottom: "16px",
        }}
      >
        <Typography sx={{ fontWeight: "bold", fontSize: "32px" }}>
          Ajuda e Suporte
        </Typography>
      </Box>
      <ModeloAjuda title="Início" text={inicioText} />
      <ModeloAjuda title="Saída de Material" text={saidaMaterialText} />
      <ModeloAjuda title="Pedido" text={PedidoText} />
      <ModeloAjuda title="Configurações" text={ConfiguracoesText} />
      <ModeloAjuda title="Ajuda" text={AjudaText} />
      <ModeloAjuda title="Contato do setor" text={ContatoText} />
    </Box>
  );
};
export default AjudaPage;
