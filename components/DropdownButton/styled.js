import styled from "styled-components";
import { theme } from "../../theme";

export const Dropdown = styled.div`
  .DropdownButton {
    background-color: ${theme.COLORS.WHITE_1};
    display: flex;
    justify-content: space-between;
    width: 184px;
    color: ${theme.COLORS.BLUE_MAIN};
    padding: 8px;
    border-radius: 10px;
    border-color: ${theme.COLORS.BLUE_1};
    cursor: pointer;
  }

  .Dropdown {
    position: relative;
    display: inline-block;
  }

  .Dropdown-Content {
    display: none;
    position: absolute;
    background-color: ${theme.COLORS.WHITE_1};
    width: 184px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .Dropdown-Content a {
    color: ${theme.COLORS.BLUE_MAIN};
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .Dropdown-Content a:hover {
    background-color: ${theme.COLORS.WHITE_1};
  }

  .Dropdown:hover .Dropdown-Content {
    display: block;
  }

  .Dropdown:hover .DropdownButton {
    background-color: ${theme.COLORS.WHITE_2};
  }
`;
