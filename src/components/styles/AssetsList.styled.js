import styled from "styled-components"

export const StyledAssetsList = styled.div`

  .assets-list {
    display: grid;
    gap: 1rem 1rem;
    grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
  }

  .asset-card {
    /* background-color: ${({ theme }) => theme.colors.assetCard}; */
    background-color: "#D8F2FF";
    height: 11rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .asset-logo {
      margin: 0;
      padding: 0;
    }
    
    .asset-img {
      width: 100px;
      padding: 0;
    }

    .code-name {
      margin-bottom: 1rem;

      p {
        margin: 0;
        text-align: center;
      }

      .asset-code {
        font-size: 15px;
      }

      .asset-name {
        font-size: 13px;
      }
    }

  }
`
