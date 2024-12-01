import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const GeoIcon = styled.img`
  width: 24px;
`;
const LocationText = styled.span``;

export default function Location() {
  return (
    <Wrapper>
      <GeoIcon src="./public/icons/geo.svg" alt="geo icon" />
      <LocationText>Москва</LocationText>
    </Wrapper>
  );
}
