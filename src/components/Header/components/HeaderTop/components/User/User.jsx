import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledUser = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Icon = styled.img``;
const Routes = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  font-weight: 500;
`;

export default function User() {
  return (
    <StyledUser>
      <Icon src="./public/icons/user.svg" alt="user icon" />

      <Routes>
        <Link to="/login">Вход</Link>/<Link to="/register">Регистрация</Link>
      </Routes>
    </StyledUser>
  );
}
