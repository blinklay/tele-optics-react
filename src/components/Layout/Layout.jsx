import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Container from "../Container/Container";

export default function Layout() {
  return (
    <>
      <Header />

      <Container>
        <Outlet />
      </Container>

      <footer>
        <Container></Container>
      </footer>
    </>
  );
}
