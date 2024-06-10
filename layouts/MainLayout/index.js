import React from "react";
import NavbarMainPage from "../../widgets/NavbarMainPage";
import { GridLayout } from "./styled";

export default function MainLayout({ children }) {
  return (
    <div>
      <NavbarMainPage />
      <GridLayout> {children}</GridLayout>
    </div>
  );
}
