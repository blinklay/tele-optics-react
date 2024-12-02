import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledSearch = styled.div`
  position: relative;
  display: flex;
  flex: 1;
`;
const Button = styled(Link)`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);

  display: flex;
  justify-content: center;
  align-items: center;

  pointer-events: ${(props) => (props.value === "" ? "none" : "default")};
`;
const Imput = styled.input`
  width: 100%;
  padding: 13px 20px;
  font-size: 16px;
  font-weight: 400;
  background-color: var(--color-background-input);
  border: 1px solid var(--color-border);
  border-radius: 5px;
  outline: none;
`;

const Placeholer = styled.div`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  pointer-events: none;
  color: var(--color-placeholder);
  & > span {
    color: var(--color-text-accent);
  }
  opacity: ${(props) => (props.value === "" ? 1 : 0)};
`;

export default function Search() {
  const [value, setValue] = useState("");

  return (
    <StyledSearch>
      <Imput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
      />
      <Button to={`/search/${value}`} value={value}>
        <img src="./public/icons/search.svg" alt="search icon" />
      </Button>
      <Placeholer value={value}>
        Введите название: <span>Бинокль армейский</span>
      </Placeholer>
    </StyledSearch>
  );
}
