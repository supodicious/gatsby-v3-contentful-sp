import styled from "styled-components"

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  display: flex;
  flex-direction: row;
  /* gap: 3rem; */
  /* column-gap: 3rem; */
  align-items: center;
  justify-content: space-between;
  padding-top: 2rem;
  padding-bottom: 2rem;

  
  p {
    margin: 0;
  }
  
  .tag-line {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    column-gap: 1rem;
    justify-content: left;
    white-space: nowrap;
  }

  .image {
    margin-left: 2rem;
    max-width: 300px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;

    .tag-line {
    flex-direction: column;
  }

    .image {
      padding-top: 2rem;
      margin: 0;
    }
  }
`
