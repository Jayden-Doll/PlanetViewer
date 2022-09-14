import styled from "styled-components";

export const MenuItemsContainer = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const MenuItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const MenuItemLink = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;

  color: #fff;

  :hover {
    cursor: pointer;
    background-color: #262626;
  }
`;

export const ContentContainer = styled.div`
  display: grid;
  place-items: center;

  width: 100%;
  margin: auto;

  height: 100%;
  place-content: center;
  gap: 0.5rem;
`;

export const Wrapper = styled.div`
  display: grid;
  place-items: center;
  align-items: center;
  justify-content: center;
  place-content: center;
  margin: auto;
  padding-top: 4%;

  width: 100%;
  height: 100%;
`;

export const Icon = styled.img`
  width: 3rem;
  height: auto;
`;

export const ItemName = styled.p`
  margin: 0.2rem;
  font-family: "Anek Telugu";
  font-size: 1.5rem;
`;
