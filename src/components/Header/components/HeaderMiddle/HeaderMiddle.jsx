import styled from "styled-components";
import Container from "../../../Container/Container";
import { Link } from "react-router-dom";
import Search from "./components/Search/Search";
import Routes from "./components/Routes/Routes";

const StyledHeaderMiddle = styled.div`
  padding: 20px 0;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
`;

const Logo = styled.img`
  width: 152px;
`;

export default function HeaderMiddle() {
  return (
    <StyledHeaderMiddle>
      <Container>
        <Wrapper>
          <Link to="/">
            <Logo src="./public/logo.png" alt="logo pic" />
          </Link>
          <Search />
          <Routes />
        </Wrapper>
      </Container>
    </StyledHeaderMiddle>
  );
}
