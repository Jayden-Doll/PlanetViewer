import styled from "styled-components";

export const MenuItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: auto;
`;

export const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: pointer;

    background-color: #262626;
  }
`;

export const MenuItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  width: 100%;

  padding: 1.5rem 0;

  color: #fff;
`;

export const Icon = styled.img`
  width: 15%;
  height: auto;
`;

export const ItemName = styled.p`
  font-family: "Anek Telugu";
  font-size: 1.2rem;
`;
