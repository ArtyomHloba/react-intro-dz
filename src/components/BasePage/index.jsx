import { Outlet } from "react-router-dom";
import HeaderPage from "../HeaderPage";

function BasePage() {
  return (
    <>
      <HeaderPage />
      <Outlet />
    </>
  );
}

export default BasePage;
