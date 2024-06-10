import React from "react";
import { LoaderStyle } from "./styled";
import ClipLoader from "react-spinners/ClipLoader";
import { theme } from "../../theme";

export default function LoaderPage(props) {
  const { loading } = props;
  return (
    <div>
      { loading &&
        <LoaderStyle>
          <ClipLoader
            size={100}
            color={[theme.COLORS.CHART_DEFAULT_1]}
            loading={loading}
            speedMultiplier={1}
          />
        </LoaderStyle>
      }
    </div>
  );
}
