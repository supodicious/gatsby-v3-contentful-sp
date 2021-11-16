import styled from "styled-components"

export const StyledAssetsList = styled.div`
  .assets-list {
    display: grid;
    gap: 1rem 1rem;
    grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
  }

  .asset {
    color: var(--textColor);
    text-decoration: none;

    p {
      font-size: 19px;

      @media screen and (max-width: 767px) {
        font-size: 17px;
      }
    }
  }

  .asset-card {
    background-color: #d8f2ff;
    width: auto;
    height: 11rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);

    &:hover {
      transform: scale(0.98);
      transition: 0.3s ease-in-out all;
    }

    .asset-code-logo {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 1rem 0 1rem;
    }

    .asset-img {
      width: 50%;
      max-width: 100px;
      height: auto;
    }

    .asset-name {
      width: 12rem;
      padding-bottom: 1rem;
      
      p {
        display: flex;
        justify-content: center;
        flex-grow: 1;
        flex-shrink: 0;
        font-size: 15px;
        margin: 0;
        text-align: center;
        width: 100%;
  
        @media screen and (max-width: 767px) {
          font-size: 13px;
        }
      }
    }
  }
`
