import styled from "styled-components";
import { ROUTES } from "../../../../../../constants/ROUTES";
import { NavLink } from "react-router-dom";

const NavigationList = styled.ul`
  display: flex;
  gap: 15px;
  align-items: center;
`;

const routesArray = Object.values(ROUTES).filter((route) => route.show);

export default function Navigation() {
  return (
    <nav>
      <NavigationList>
        {routesArray.map((route) => (
          <li key={route.path}>
            <NavLink
              style={({ isActive }) => ({
                background: isActive ? "#F1DA09" : "transparent",
                fontWeight: isActive ? 500 : 400,
                borderRadius: "5px",
                padding: "3px",
              })}
              to={route.path}
            >
              {route.name}
            </NavLink>
          </li>
        ))}
      </NavigationList>
    </nav>
  );
}
