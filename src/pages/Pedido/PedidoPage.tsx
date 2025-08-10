import { Box, Button, Typography } from "@mui/material";
import PedidoList from "./PedidoList";
import AcceptWindow from "./AcceptWindow";
import { useCallback, useState } from "react";
import { useMaterialProvider } from "../../context/MaterialListProvider";
import { MaterialUpdateQtd } from "../../models/MaterialListModel";

const PedidoPage = () => {
  const [dialogState, setDialogState] = useState(false);
  const { materialsFiltred, updateQtdMaterialValue } = useMaterialProvider();
  const lenghtFilter = materialsFiltred.length;

  const [pendingUpdates, setPendingUpdates] = useState<
    Record<number, MaterialUpdateQtd>
  >({});

  const closeWindow = useCallback(() => {
    setDialogState(false);
  }, []);

  const openWindow = useCallback(() => {
    setDialogState(true);
  }, []);

  const handlePedidoChange = useCallback(
    (id: number, updates: MaterialUpdateQtd) => {
      setPendingUpdates((prev) => ({
        ...prev,
        [id]: { ...(prev[id] || {}), ...updates },
      }));
    },
    []
  );

  const sendDados = useCallback(async () => {
    setDialogState(false);
    const entries = Object.entries(pendingUpdates);
    if (entries.length === 0) {
      console.warn("Nenhuma mudança para enviar");
      return;
    }

    try {
      await Promise.all(
        entries.map(([idStr, updates]) =>
          updateQtdMaterialValue(Number(idStr), updates)
        )
      );
      // depois de aplicado, limpa
      setPendingUpdates({});
      console.log("Todos os materiais atualizados");
    } catch (err) {
      console.error("Erro ao atualizar materiais:", err);
    }
  }, [pendingUpdates, updateQtdMaterialValue]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        paddingTop: "36px",
        paddingInline: "17px",
      }}
    >
      <Typography fontSize={"24px"} fontWeight={"bold"} paddingBottom={"16px"}>
        Pedido
      </Typography>

      <PedidoList
        onChange={handlePedidoChange}
        materialFiltred={materialsFiltred}
      />

      {lenghtFilter > 0 ? (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row-reverse",
            boxSizing: "border-box",
            paddingTop: "20px",
          }}
        >
          <Button
            variant="outlined"
            onClick={openWindow}
            sx={{ width: "175px", height: "30px", fontSize: "12px" }}
          >
            Confirmar Entrada
          </Button>
        </Box>
      ) : (
        <></>
      )}
      <AcceptWindow
        state={dialogState}
        onclose={closeWindow}
        onSend={sendDados}
      />
    </Box>
  );
};
export default PedidoPage;
