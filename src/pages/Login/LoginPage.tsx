import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Eye, EyeClosed, Package2 } from "lucide-react";
import { userLogin } from "../../services/APIService";
import { useCallback, useState } from "react";
import { useAuth } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [coren, setCoren] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [statusSenha, setStatusSenha] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError(null);
    try {
      const response = await userLogin(Number(coren), senha);
      login(response.data.token);

      navigate("/home");
    } catch (err: any) {
      setError(err.response?.data?.erro || "Erro ao fazer login");
    }
  };

  const changeStatusSenha = useCallback(() => {
    setStatusSenha((p) => !p);
  }, []);

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        gap: "15%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "15px",
        }}
      >
        <Package2 size={"40px"} />
        <Typography sx={{ fontWeight: "bold", fontSize: "28px" }}>
          HemoStock
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography fontSize={28} fontWeight={"bold"}>
          Login
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            alignItems: "center",
            justifyContent: " center",
          }}
        >
          <Box>
            <Typography fontSize={16} fontWeight={"bold"}>
              Coren
            </Typography>
            <TextField
              size="small"
              type="number"
              value={coren}
              onChange={(e) => setCoren(e.target.value)}
              fullWidth
              onKeyDown={(e) => {
                if (e.key === "-" || e.key === "e") {
                  e.preventDefault();
                }
              }}
              sx={{
                width: "448px",
                "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
                  {
                    WebkitAppearance: "none",
                    margin: 0,
                  },
              }}
            />
          </Box>
          <Box>
            <Typography fontSize={16} fontWeight={"bold"}>
              Senha
            </Typography>
            <TextField
              size="small"
              onChange={(e) => setSenha(e.target.value)}
              value={senha}
              type={!statusSenha ? "password" : "text"}
              fullWidth
              sx={{ width: "448px" }}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <button
                        onClick={changeStatusSenha}
                        style={{
                          background: "transparent",
                          border: "none",
                          outline: "none",
                          cursor: "pointer",
                        }}
                      >
                        {!statusSenha ? <EyeClosed /> : <Eye />}
                      </button>
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Box>
          <Button
            variant="contained"
            sx={{ width: "50%" }}
            onClick={handleLogin}
          >
            Entrar
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
