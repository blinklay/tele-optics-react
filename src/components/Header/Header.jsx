import styled from "styled-components";
import HeaderTop from "./components/HeaderTop/HeaderTop";
import HeaderMiddle from "./components/HeaderMiddle/HeaderMiddle";

const StyledHeader = styled.header``;

export default function Header() {
  return (
    <StyledHeader>
      <HeaderTop />
      <HeaderMiddle />
    </StyledHeader>
  );
}
