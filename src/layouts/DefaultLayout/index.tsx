import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";

import { LayoutContainer } from "./styles";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      {/* Espaço para inserir o Conteudo, especifico de alguma pagina */}
      <Outlet />
    </LayoutContainer>
  );
}
