import React from "react";
import BodyHomeView from "./BodyHomeView";
import FooterHomeView from "./FooterHomeView";

import { HomeStyle } from "./styled";

export default function HomeView() {
  return (
    <div>
      <HomeStyle>
        <BodyHomeView />
        <FooterHomeView />
      </HomeStyle>
    </div>
  );
}
