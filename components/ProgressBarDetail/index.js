import React from "react";

import {
  TextColor,
  ProgressTextStyle,
  ProgressSpaceText,
  ProgressCard,
  TitlePadding,
  TitlePadding2,
} from "./styled";

import DropdownButton from "../../components/DropdownButton/index";

import { Progress } from "antd";

import dynamic from "next/dynamic";
import { theme } from "../../theme";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function ProgressBarDetail(props) {
  const {
    strokeLinecap = "butt",
    showInfo = false,
    title_1 = "Title_1",
    title_2 = "Title_2",
    title_3 = "Title_3",
    strokeColor_1 = theme.COLORS.CHART_DEFAULT_1,
    strokeColor_2 = theme.COLORS.CHART_DEFAULT_2,
    strokeColor_3 = theme.COLORS.CHART_DEFAULT_3,
    percent_1,
    percent_2,
    percent_3,
  } = props;

  const ProgressVm = () => (
    <ProgressCard>
      <DropdownButton
        HeaderDropdown="Daily"
        TextDropdown_1="Daily"
        TextDropdown_2="Monthly"
        TextDropdown_3="Yearly"
        LinkPage_1="#Daily"
        LinkPage_2="#Monthly"
        LinkPage_3="#Yearly"
      />

      <TitlePadding />

      <TextColor>
        <h3>Today : 11 January 2021</h3>
      </TextColor>

      <TitlePadding2 />

      <ProgressTextStyle>
        <ProgressSpaceText>
          <TextColor>{title_1}</TextColor>
          <TextColor>{percent_1}%</TextColor>
        </ProgressSpaceText>
        <Progress
          strokeLinecap={strokeLinecap}
          strokeColor={strokeColor_1}
          percent={percent_1}
          showInfo={showInfo}
        />
      </ProgressTextStyle>

      <ProgressTextStyle>
        <ProgressSpaceText>
          <TextColor>{title_2}</TextColor>
          <TextColor>{percent_2}%</TextColor>
        </ProgressSpaceText>
        <Progress
          strokeLinecap={strokeLinecap}
          strokeColor={strokeColor_2}
          percent={percent_2}
          showInfo={showInfo}
        />
      </ProgressTextStyle>

      <ProgressTextStyle>
        <ProgressSpaceText>
          <TextColor>{title_3}</TextColor>
          <TextColor>{percent_3}%</TextColor>
        </ProgressSpaceText>
        <Progress
          strokeLinecap={strokeLinecap}
          strokeColor={strokeColor_3}
          percent={percent_3}
          showInfo={showInfo}
        />
      </ProgressTextStyle>
    </ProgressCard>
  );

  return (
    <div>
      <ProgressVm
        title_1={title_1}
        title_2={title_2}
        title_3={title_3}
        strokeLinecap={strokeLinecap}
        strokeColor_1={strokeColor_1}
        strokeColor_2={strokeColor_2}
        strokeColor_3={strokeColor_3}
        percent_1={percent_1}
        percent_2={percent_2}
        percent_3={percent_3}
        showInfo={showInfo}
      />
    </div>
  );
}
