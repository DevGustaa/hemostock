import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { JSX } from "react";

type AcceptWindowProps = {
  state: boolean;
  onclose: () => void;
  onSend: () => void;
};

const AcceptWindow = ({
  state,
  onclose,
  onSend,
}: AcceptWindowProps): JSX.Element => {
  return (
    <Dialog open={state} sx={{ width: "100%" }}>
      <DialogTitle>Confirmar recebimento?</DialogTitle>
      <DialogContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "15px",
        }}
      >
        <Button onClick={onclose}>Cancelar</Button>
        <Button onClick={onSend}>Sim</Button>
      </DialogContent>
    </Dialog>
  );
};

export default AcceptWindow;
