import Button from "@mui/material/Button"
import { Route,Navigate,Routes } from "react-router-dom"
import { useAppThemeContext } from "../shared/contexts"

export function AppRoutes(){
    const { toggleTheme } = useAppThemeContext();
    return (
        <Routes>
            <Route path="/pagina-inicial" element={<Button variant="contained" color="primary" onClick={toggleTheme}>Entrar</Button>} />
            <Route path="*" element={<Navigate to='/pagina-inicial'/>} />
        </Routes>
    )
}