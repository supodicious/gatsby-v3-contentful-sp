import styled from "styled-components"

export const StyledAssetTemplate = styled.div`
  font-size: 17px;

  .asset-info-top {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .code-n-image {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: flex-start;
    justify-content: left;

    h2 {
      margin: 0;
    }
  }

  .desc {
  }

  .conditions {
    margin-bottom: 1rem;
  }

  .issuer {
    display: flex;
    justify-content: left;
    word-break: break-all;
    margin-bottom: 1rem;
  }

  .stellar-expert {
    margin-bottom: 1rem;
  }

  .stellar-expert-btn {
    margin-top: 1rem;
    padding: 19px 18px;
    text-transform: none;
  }

  .st-ex-btn-img {
    height: 2rem;
    position: relative;
    top: 11px;
  }

  @media (max-width: 768px) {
    .asset-info-top {
      flex-direction: column;
    }
  }
`
