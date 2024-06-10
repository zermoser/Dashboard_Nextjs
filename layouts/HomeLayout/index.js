import React from "react";
import NavbarHomePage from "../../widgets/NavbarHomePage";
import { GridLayout } from "./styled";

export default function HomeLayout({ children }) {
  return (
    <div>
      <NavbarHomePage />
      <GridLayout> {children}</GridLayout>
    </div>
  );
}
