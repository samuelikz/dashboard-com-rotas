import Button from "@mui/material/Button"
import { Route,Navigate,Routes } from "react-router-dom"

export function AppRoutes(){
    return (
        <Routes>
            <Route path="/pagina-inicial" element={<Button variant="contained" color="primary">Entrar</Button>} />
            <Route path="*" element={<Navigate to='/pagina-inicial'/>} />
        </Routes>
    )
}