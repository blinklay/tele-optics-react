import Navigation from "./components/Navigation/Navigation";
import Contacts from "./components/Contacts/Contacts";
import Location from "./components/Location/Location";
import styled from "styled-components";
import Container from "../../../Container/Container";
import User from "./components/User/User";

const StyledHeaderTop = styled.div`
  background-color: #f7f8f9;
  padding: 8px 0;
  font-size: 14px;
  line-height: 1.8;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
`;

export default function HeaderTop() {
  return (
    <StyledHeaderTop>
      <Container>
        <Wrapper>
          <Location />
          <Navigation />
          <Contacts />
          <User />
        </Wrapper>
      </Container>
    </StyledHeaderTop>
  );
}
