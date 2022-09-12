import styled from "styled-components";

export const MenuItemsContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  display: flex;
  margin: 0 auto;
`;

export const MenuItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
  color: #fff;

  :hover {
    background-color: #262626;
    cursor: pointer;
  }
`;

export const Icon = styled.img`
  width: 15%;
  height: auto;
`;

export const ItemName = styled.p`
  font-family: "Anek Telugu";
  font-size: 1.2rem;
`;
