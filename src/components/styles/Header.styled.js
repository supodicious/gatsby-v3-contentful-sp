import styled from "styled-components"

export const StyledHeader = styled.header`
  /* background-color: #EBFCFF; */
  overflow: visible;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 2rem;
  /* padding-bottom: 2rem; */

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

  @media (max-width: 768px) {
    flex-direction: column;

    .tag-line {
      flex-direction: column;
    }

    .sa-desc {
      /* display: none; */
      font-size: 15px;
    }

    .image {
      padding-top: 2rem;
      margin: 0;
    }
  }
`
