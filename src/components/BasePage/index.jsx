import { Outlet } from "react-router-dom";
import HeaderPage from "../HeaderPage";
import FooterPage from "../FooterPage";

function BasePage() {
  return (
    <>
      <HeaderPage />
      <Outlet />
      <FooterPage />
    </>
  );
}

export default BasePage;
